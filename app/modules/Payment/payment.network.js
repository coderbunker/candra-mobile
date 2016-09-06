
export function someRequest(params, callback){
  let url = 'http://localhost:8000/'
  fetch(url, {
    method: 'GET',
    body: JSON.stringify(params),
      headers: {
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded'
    },
  }).then((res)=>{
    return res.json();
  }).then((res)=>{
    callback && callback(null, res);
  }).catch((err)=>{
    console.log('err', err)
    callback && callback(err);
  })
}

