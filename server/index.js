const express = require('express')
const request = require('superagent')
// const axios = require('axios')
// const proxy = require('http-proxy-middleware')

const app = express();
app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

app.get('/Organization', function (req, res,next) {
    var sreq = request(`https://apple.myysq.com.cn/bms${req.originalUrl}`)
    sreq.pipe(res)
    sreq.on('end', function (err, res) {
        console.log('end')
    })
    next()
})

app.listen(9000, () => {
    console.log(`server was run in at prot 9000`)
})