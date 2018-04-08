import axios from 'axios'


axios.interceptors.request.use(
    config => {
        if (config.params && !config.params.token) {
            config.params.token = localStorage.getItem('_token_')
        }
        if (config.method == 'post') {
            config.headers['Content-type'] = 'application/x-www-form-urlencoded'
        }
        return config

    },
    error => {
        console.info(error)
    })


axios.interceptors.response.use(
    res => {
        if (res.status === 200) {
            if (res.data.errorcode === 3002 || res.data.code === 3002) {
                let backUrl = document.URL

            } else {
                return res
            }
        }
    },
    error => {
        console.log(error)
    })

