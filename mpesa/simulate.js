
const request = require('request')

const { handleError, handleSuccess } = require('../utils');

const { getAccess } = require('./accessToken');
let access = getAccess;


// CONSTS
const CONSUMER_KEY = 'XaJitAA0RePDkOUeCi9BX5cAAQ7ypZbd'
const CONSUMER_SECRET = 'RCepcfGie2MRunZd'
var BUSINESSSHORTCODE = '5354685'
BUSINESSSHORTCODE = '174379'
const MSSID = '254799995665'
const NGROK_API = 'https://fc879e6fe4f4.ngrok.io'



module.exports.simulate = function simulate(){
    const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';
    access(function(accessToken){
        let auth = 'Bearer '+accessToken;

        request({
            url: endpoint,
            method: 'POST',
            headers: {
                'Authorization': auth
            },
            json: {
                "ShortCode":BUSINESSSHORTCODE,
                "CommandID":"CustomerPayBillOnline",
                "Amount":"1",
                "Msisdn":MSSID,
                "BillRefNumber":"test"
            }
        },(error,response,body)=>{
            if(error){
                handleError('simulate',error)
            }else {
                handleSuccess('simulate',body)
            }
        })

    })
}