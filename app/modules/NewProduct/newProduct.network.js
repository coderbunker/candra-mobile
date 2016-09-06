
import { Utils } from '../../.';

const {
  Request
} = Utils;

export function addProductRequest(params){
  const {
    body
  } = params;
  let url = 'http://192.168.1.81:3000/api/product';
  // let url = 'http://localhost:3000/api/product';
  return Request.post({url, body});
}
