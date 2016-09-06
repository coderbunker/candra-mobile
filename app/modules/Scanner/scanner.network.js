
import { Utils } from '../../.';

const {
  Request
} = Utils;

console.log('REQUEST', Request);

export async function getProducts(){

  // let url = 'http://localhost:3000/api/product';
  let url = 'http://192.168.1.81:3000/api/product';
  return Request.get({url});

  // return new Promise((resolve, reject) => {
  //   fetch(url, {
  //     method: 'GET',
  //     // body: JSON.stringify(params),
  //     //   headers: {
  //     //   // 'Accept': 'application/json',
  //     //   // 'Content-Type': 'application/json'
  //     //   // 'Content-Type': 'application/x-www-form-urlencoded'
  //     // },
  //   }).then((res)=>{
  //     return res.json();
  //   }).then((res)=>{
  //     // callback && callback(null, res);
  //     resolve(res);
  //   }).catch((err)=>{
  //     reject(err);
  //     // console.log('err', err)
  //     // callback && callback(err);
  //   });
  // });

}
