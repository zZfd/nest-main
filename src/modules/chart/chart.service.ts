import { HttpException, Injectable } from '@nestjs/common';
import ResponseSchema from '../../classes/response';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from '../../entity/project.entity';
import { Between, Repository } from 'typeorm';
import Axios from 'axios';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as Iconv from 'iconv-lite';
import * as BufferHelper from 'bufferHelper';
// import * as charset from 'superagent-charset';
// import * as superagent from 'superagent';

// const charset = require('superagent-charset'); //解决乱码问题:
const superagent = require('superagent'); //发起请求
require('superagent-charset')(superagent); // install charset
@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  // 根据商品条形码查询商品信息
  async commodityQuery(id) {
    const response = new ResponseSchema();
    const res = await superagent
      .get('http://search.anccnet.com/searchResult2.aspx?keyword=6902022134333')
      .set(
        'Cookie',
        'ASP.NET_SessionId=z24ihc3p4ekfmvrdltmgxz55; td_cookie=3017672599',
      )
      .set(
        'Referer',
        'http://search.anccnet.com/searchResult2.aspx?keyword=6902022134333',
      )
      .charset('gb2312'); //取决于网页的编码方式

    // console.log(res);
    if (res.text) {
      response.content = this.parse(res.text);
      response.message = '查询成功';
      response.status = 200;
    }
    // .end((err, res) => {
    //   console.log(res.text);
    //   debugger;
    //   response.content = this.parse(res.text);
    //   response.message = '查询成功';
    //   response.status = 200;
    //   console.log(response);
    // });

    // await Axios.request({
    //   url: 'http://search.anccnet.com/searchResult2.aspx?keyword=6902022134333',
    //   method: 'get',
    //   headers: {
    //     Cookie:
    //       // 3007198904 3011628264  3013738527  3017672599
    //       'ASP.NET_SessionId=z24ihc3p4ekfmvrdltmgxz55; td_cookie=3013738527',
    //     'Upgrade-Insecure-Requests': 1,
    //     Referer:
    //       'http://search.anccnet.com/searchResult2.aspx?keyword=6902022134333',
    //     'Content-Type':
    //       'text/html,application/xhtml+xml,application/xml;charset=UTF-8',
    //     Accept:
    //       'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'Accept-Encoding': 'gzip, deflate',
    //     'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //   },
    // })
    //   .then((res) => {
    //     const buf = Buffer.from(res.data);
    //     debugger;
    //     const html = Iconv.decode(buf, 'gbk').toString();
    //     debugger;
    //     response.content = this.parse(html);
    //     response.message = '查询成功';
    //     response.status = 200;
    //   })
    //   .catch((err) => {
    //     response.content = err;
    //     response.message = '查询失败';
    //     response.status = 500;
    //   });
    return response;
  }

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

  async applying() {
    const response = new ResponseSchema();
    const count = await this.projectRepository
      .count({
        status: Between(0, 11),
      })
      .catch((err) => {
        console.log(err);
        throw new HttpException(
          {
            message: '查询失败',
            error: '服务器错误',
          },
          500,
        );
      });
    response.content = count;
    response.message = '查询成功';
    response.status = 200;
    return response;
  }

  dayApply() {
    const response = new ResponseSchema();
    const today = new Date().getMilliseconds();
    // ('2020/10/10 10:11:22');
    // const start = (new Date()
    //   const [items, count] = this.projectRepository.findAndCount({
    //   created_at: Between(),
    // }));
  }

  weekApply() {}

  monthApply() {}

  periodApply(start, end) {}

  yearApply() {}
}
