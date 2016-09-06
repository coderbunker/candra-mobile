
import queryString from 'query-string';

// GET请求
const get = function(params) {
  const {
    url,
    query
  } = params;
  let queryUrl = url+'';
  if (query) {
    queryUrl += '?' + queryString.stringify(query);
  }
  return new Promise((resolve, reject) => {
    fetch(queryUrl)
      .then(res=>res.json())
      .then((response)=>{
        WARN('1111', response)
        resolve(response);
      })
      .catch((error)=>{
        WARN('2222', error)
        reject(error);
      });
  });
};

// POST请求
const post = function(params){
  const { url, body, headers } = params;
  let bodyPass = JSON.stringify(body);
  if(headers && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    bodyPass = queryString.stringify(body);
  }
  let fetchOptions = {
      method: 'POST',
      headers: headers || {'Content-Type': 'application/json'},
      // headers: {
      //     // 'Accept': 'application/json',
      //     // 'Content-Type': 'application/json'
      //     'Content-Type': 'application/x-www-form-urlencoded'
      // },
      body: bodyPass,
  };
  return new Promise((resolve, reject) => {
    fetch(url, fetchOptions)
      .then(res=>res.json())
      .then((response)=>{
        resolve(response);
      })
      .catch((error)=>{
        reject(error);
      });
  });
};

export default {
  get,
  post,
};
