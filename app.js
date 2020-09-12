const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const constants = crypto.constants;


const { routes } = require('./routes')
const { getAccess } = require('./mpesa/accessToken');
const { handleError, handleSuccess } = require('./utils');
const { registerUrl } = require('./mpesa/registerUrl');
const { simulate } = require('./mpesa/simulate');
const { lipaNaMpesaOnlinePaybil } = require('./mpesa/pushStk');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



// CONSTS
const CONSUMER_KEY = 'XaJitAA0RePDkOUeCi9BX5cAAQ7ypZbd'
const CONSUMER_SECRET = 'RCepcfGie2MRunZd'
var BUSINESSSHORTCODE = '5354685'
BUSINESSSHORTCODE = '174379'
const REGISTER_URL_SHORTCODE = '600730'
const MSSID = '254799995665'
const NGROK_API = 'http://d27860262005.ngrok.io'
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
const REGISTER_URL_RESPONSE_TYPE = 'Canceled'

let MpesaDataObject = {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    BUSINESSSHORTCODE,
    MSSID,
    NGROK_API,
    passkey,
    REGISTER_URL_RESPONSE_TYPE,
    REGISTER_URL_SHORTCODE
}


let access = getAccess;


// 1. Get access token
// access()

// 2. register url

// 3. get balance


// 4. simulate

// 5. c2b stk




// routes
routes(app)
// server 
app.listen(8081,(req,res)=>{
    console.log('server running on port 8081')
    registerUrl(access,MpesaDataObject)
    simulate()
    lipaNaMpesaOnlinePaybil(access,MpesaDataObject)
})