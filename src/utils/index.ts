// /*
//  * @Author: zfd
//  * @Date: 2021-01-08 08:26:57
//  * @LastEditors: zfd
//  * @LastEditTime: 2021-01-13 11:22:10
//  * @Description:
//  */
//
// // eslint-disable-next-line no-extend-native
// Date.prototype.addDay = function (day) {
//   if (isNaN(+day)) {
//     return '';
//   }
//   const r = Date.now() + day * 24 * 60 * 60 * 1000;
//   return Date.prototype.format(new Date(r));
// };
// // eslint-disable-next-line no-extend-native
// Date.prototype.format = function (
//   value,
//   format = '{y}/{m}/{d} {h}:{i}:{s}.{ms}',
// ) {
//   if (Object.prototype.toString.call(value) === '[object Date]') {
//     const formatObj = {
//       y: value.getFullYear(),
//       m: value.getMonth() + 1,
//       d: value.getDate(),
//       h: value.getHours(),
//       i: value.getMinutes(),
//       s: value.getSeconds(),
//       a: value.getDay(),
//       ms: value.getMilliseconds(),
//     };
//     const time_str = format.replace(
//       /{([ymdhis(ms)])+}/g,
//       (result, key, idx) => {
//         const k = /{(\w{1,2})}/.exec(result)[1];
//         const value = formatObj[k];
//         // Note: getDay() returns 0 on Sunday
//         if (key === 'a') {
//           return ['日', '一', '二', '三', '四', '五', '六'][value];
//         }
//         if (k === 'ms') {
//           return value.toString().padStart(3, '0');
//         }
//         return value.toString().padStart(2, '0');
//       },
//     );
//     return time_str;
//   }
//   return '';
//   // if (typeof value === 'string') {
//
//   // }
//   // if (typeof value === 'number') {
//
//   // } else {
//   //   return ''
//   // }
// };
// // console.log(new Date().addDay(-1))
// // for (const k in Date.prototype) {
// //   console.log(k)
// // }
// // console.log(Date.prototype.format(new Date()))
// // console.log(Object.prototype.toString.call(new Date()) === '[object Date]')
//
// function testFormat(value, format = '{y}/{m}/{d} {h}:{i}:{s}.{ms}') {
//   const formatObj = {
//     y: value.getFullYear(),
//     m: value.getMonth() + 1,
//     d: value.getDate(),
//     h: value.getHours(),
//     i: value.getMinutes(),
//     s: value.getSeconds(),
//     a: value.getDay(),
//     ms: value.getMilliseconds(),
//   };
//   const time_str = format.replace(/{([ymdhis(ms)])+}/g, (result, key, idx) => {
//     const k = /{(\w{1,2})}/.exec(result)[1];
//     const value = formatObj[k];
//     // Note: getDay() returns 0 on Sunday
//     if (key === 'a') {
//       return ['日', '一', '二', '三', '四', '五', '六'][value];
//     }
//     if (k === 'ms') {
//       return value.toString().padStart(3, '0');
//     }
//     return value.toString().padStart(2, '0');
//   });
//   return time_str;
// }
