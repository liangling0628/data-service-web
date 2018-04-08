import axios from "axios";

export function getData(url, params) {
    // let ur = service + url
    return new Promise((resolve, reject) => {
        return axios.get(ur, {params}).then((res) => {
            resolve(res.data)
        }).catch((e) => {
            reject(e)
        })
    })
}

export function postData(url, data) {
    // let ur = service + url
    return new Promise((resolve, reject) => {
        return axios({
            url: url,
            method: 'post',
            data: data,
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
            resolve(res.data)
        }).catch((e) => {
            reject(e)
        })
    })
}