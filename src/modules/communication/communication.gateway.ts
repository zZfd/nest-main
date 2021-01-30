import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
const serialPort = require('serialport');
const superagent = require('superagent'); //发起请求
require('superagent-charset')(superagent); // install charset
import * as cheerio from 'cheerio';
import * as fs from 'fs';

@WebSocketGateway()
export class CommunicationGateway {
  @WebSocketServer()
  server: Server;
  port = null;
  cookie = 'ASP.NET_SessionId=a1u0ig452kqb1h552evgvnaj;';
  // socket连接钩子
  async handleConnection(client: Socket): Promise<string> {
    const userId = client.handshake.query['userId'];
    console.log(client.handshake.query);
    if (userId) {
      client.join(userId);
    }
    if (this.port === null) {
      this.openPort(userId);
    }
    console.log('连接成功');
    // this.server.to(userId).emit('putIn', { goodsId: '123456' });

    return '连接成功';
  }

  // 断开连接
  async handleDisconnect(): Promise<string> {
    console.log('连接断开');

    return '连接断开';
  }

  // 入库
  @SubscribeMessage('putin')
  async sendPutIn(@MessageBody() data): Promise<any> {
    console.log('putIn', data);
    this.server.to(data.userId).emit('putin', { goodsId: '123456' });
    return 'put-in';
  }

  // 打开端口
  openPort(userId) {
    const port = new serialPort('COM3', {
      baudRate: 9600,
      autoOpen: false,
    });

    // 串口打开
    port.open((err) => {
      if (err) {
        return console.log('failed to open: ', err.message);
      } else {
        console.log('open');
        // 接受串口数据，并打印到终端
        port.on('data', async (data) => {
          console.log('数据接收: ' + data);
          const id = data.toString().trim();
          // 国内商品条码
          if (/^69[0-9]{11}$/.test(id)) {
            const response = await this.commodityQuery(id);
            console.log(response);
            this.server.to(userId).emit('putin', response);
          }
        });
      }
    });
  }

  // 根据商品条形码查询商品信息
  async commodityQuery(id) {
    for (let i = 0; i <= 3; i++) {
      const res = await this.fetch(id);
      if (res.text) {
        // fs.writeFile('./src/fail.html', res.text, () => { });
        const result = this.parse(res.text);
        if (result !== null) {
          return result;
        } else {
          this.cookie = await this.getNewSeesion();
        }
      }
    }
  }

  // 发送请求
  async fetch(id) {
    const url = `http://search.anccnet.com/searchResult2.aspx?keyword=${id}`;
    const res = await superagent
      .get(url)
      .set(
        'Cookie',
        // ASP.NET_SessionId=a1u0ig452kqb1h552evgvnaj
        // 3007198904 3011628264  3013738527  3017672599
        this.cookie,
      )
      .set('Referer', url)
      .charset('gb2312'); //取决于网页的编码方式
    return res;
  }
  // 解析html
  parse(html) {
    const $ = cheerio.load(html);
    const isFailed = $('#Label4 > font').text();
    if (isFailed) {
      return null;
    }
    const url = $('#results > li > div > dl.p-info > dd:nth-child(2) > a').attr(
      'href',
    );
    const name = $('#results > li > div > dl.p-info > dd:nth-child(6)').text();
    const spec = $('#results > li > div > dl.p-info > dd:nth-child(8)').text();
    const remarks = $(
      '#results > li > div > dl.p-info > dd:nth-child(10)',
    ).text();
    const brand = $(
      '#results > li > div > dl.p-supplier > dd:nth-child(2)',
    ).text();
    const company = $('#repList_ctl00_firmLink').text();
    const status = $(
      '<span id="repList_ctl00_status">经查，该商品条码已在中国物品编码中心注册，编码信息已按规定通报。</span>',
    ).text();
    return {
      url,
      name,
      spec,
      remarks,
      brand,
      company,
      status,
    };
  }

  //   获取最新的seesionId
  async getNewSeesion() {
    //
    const res = await superagent.get(
      'http://search.anccnet.com/writeSession.aspx?responseResult=check_out',
    );
    // console.log(res);
    return res.header['set-cookie'];
  }
}
