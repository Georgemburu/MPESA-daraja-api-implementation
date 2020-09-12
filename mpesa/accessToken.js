const request = require('request')

const { handleError, handleSuccess } = require('../utils');
 
const CONSUMER_KEY = 'XaJitAA0RePDkOUeCi9BX5cAAQ7ypZbd'
const CONSUMER_SECRET = 'RCepcfGie2MRunZd'

exports.getAccess = function access(cb=null){
    let auth = new Buffer.from(CONSUMER_KEY+":"+CONSUMER_SECRET).toString('base64');
    auth = 'Basic '+auth;

    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    request({
        url: url,
        headers: {
            'Authorization':auth
        }
    },(error,res,body)=>{
        if(error){
            handleError('access token:',error)
        }else {
            handleSuccess('acess token',body)
            if(cb){
                 cb(JSON.parse(body)['access_token'])
            }
           
        }
    })

}
