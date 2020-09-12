
const request = require('request')

const { handleError, handleSuccess } = require('../utils');

// const { getAccess } = require('./accessToken');
// let access = getAccess;


// CONSTS
// const CONSUMER_KEY = 'XaJitAA0RePDkOUeCi9BX5cAAQ7ypZbd'
// const CONSUMER_SECRET = 'RCepcfGie2MRunZd'
// var BUSINESSSHORTCODE = '5354685'
// BUSINESSSHORTCODE = '174379'
// const MSSID = '254799995665'
// const NGROK_API = 'https://fc879e6fe4f4.ngrok.io'


exports.registerUrl = function registerUrl(access,MpesaDataObject){
    let {
        CONSUMER_KEY,
        CONSUMER_SECRET,
        BUSINESSSHORTCODE,
        MSSID,
        NGROK_API,
        passkey,
        REGISTER_URL_RESPONSE_TYPE,
        REGISTER_URL_SHORTCODE
    } = MpesaDataObject;
    const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl'

    access(function(accessToken){

        let auth = 'Bearer '+accessToken;

        request({
            url: endpoint,
            method: 'POST',
            headers: {
                'Authorization':auth
            },
            json: {
                "ShortCode": REGISTER_URL_SHORTCODE,
                "ResponseType": REGISTER_URL_RESPONSE_TYPE,
                "ConfirmationURL": NGROK_API+"/confirmation",
                "ValidationURL": NGROK_API+"/validation_url"
            }
        },(error,response,body)=>{
            if(error){
                handleError('RegisterUrl',error)
            }else {
                handleSuccess('Register Url',response.toJSON())
                // console.log(response.toJSON().body)
            }
        })
    })
}