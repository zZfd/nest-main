/* eslint-disable */
import { HttpException, Injectable } from '@nestjs/common';
import ResponseSchema from '../../classes/response';
import { InjectRepository } from '@nestjs/typeorm';
// import { ProjectEntity } from '../../entity/project.entity';
import { Between, Repository } from 'typeorm';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as BufferHelper from 'bufferHelper';

const superagent = require('superagent'); //发起请求
require('superagent-charset')(superagent); // install charset

const serialPort = require('serialport');
@Injectable()
export class ChartService {
  constructor(
  ) { }

  // 根据商品条形码查询商品信息
  async commodityQuery(id) {
    const response = new ResponseSchema();
    const url = `http://search.anccnet.com/searchResult2.aspx?keyword=${id}`
    console.log(url)
    const res = await superagent
      .get(url)
      .set(
        'Cookie',
        // ASP.NET_SessionId=a1u0ig452kqb1h552evgvnaj
        // 3007198904 3011628264  3013738527  3017672599
        'ASP.NET_SessionId=a1u0ig452kqb1h552evgvnaj;',
      )
      .set(
        'Referer',
        url,
      )
      .charset('gb2312'); //取决于网页的编码方式

    // console.log(res);
    if (res.text) {
      console.log(res.text)
      response.content = this.parse(res.text);
      response.message = '查询成功';
      response.status = 200;
    }
    return response;
  }

  // 读取串口列表
  async port() {
    const ports = await serialPort.list()
    ports.forEach(function (port) {
      console.log(port.comName);
      console.log(port.pnpId);
      console.log(port.manufacturer);
    });
  }

  // 读取串口信息
  portInfo() {
    const port = new serialPort("COM3", {
      baudRate: 9600,
      autoOpen: false
    });

    // 串口打开
    port.open((err) => {
      if (err) {
        return console.log('failed to open: ', err.message);
      } else {
        console.log('open');
        //接受串口数据，并打印到终端
        port.on('data', async (data) => {
          console.log('数据接收: ' + data);
          const id = data.toString().trim()
          // 国内商品条码
          if (/^69[0-9]{11}$/.test(id)) {
            const response = await this.commodityQuery(id)
            console.log(response)
          }
        });
      }
    })

  }

  //   获取最新的seesionId
  async getNewSeesion() {
    //
    const res = await superagent
      .get('http://search.anccnet.com/writeSession.aspx?responseResult=check_out')
    // console.log(res);
    console.log(res.header['set-cookie'])
  }

  // 解析html
  parse(html) {
    const $ = cheerio.load(html);
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

  parseHtml() {
    const response = new ResponseSchema();

    let data = '';
    const readerStream = fs.createReadStream('./src/test.html');
    readerStream.setEncoding('utf8');
    readerStream.on('data', function (chunk) {
      data += chunk;
    });
    readerStream.on('end', function () {
      const $ = cheerio.load(data);
      const url = $(
        '#results > li > div > dl.p-info > dd:nth-child(2) > a',
      ).attr('href');
      const name = $(
        '#results > li > div > dl.p-info > dd:nth-child(6)',
      ).text();
      const spec = $(
        '#results > li > div > dl.p-info > dd:nth-child(8)',
      ).text();
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
      response.content = {
        url,
        name,
        spec,
        remarks,
        brand,
        company,
        status,
      };
      response.message = '解析成功';
      response.status = 200;
      console.log(response);
      return response;
    });
  }




}
