import axios from 'axios';
import origin_jsonp from 'jsonp';

export function getData(url, params = { __flag: true }) {
  return new Promise((resolve, reject) => {
    return axios
      .get(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        reject(e);
      });
  });
}

export function postData(url, data = { __flag: true }) {
  return new Promise((resolve, reject) => {
    return axios({
      url: url,
      method: 'post',
      data: data,
      transformRequest: [
        function(data) {
          let ret = '';
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
          }
          return ret;
        }
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(e => {
        reject(e);
      });
  });
}

export function jsonp(url, param = 'jsopcallback') {
  return new Promise((resolve, reject) => {
    origin_jsonp(url, { param }, (err, res) => {
      if (!err) {
        resolve(res);
      }
      reject(err);
    });
  });
}
