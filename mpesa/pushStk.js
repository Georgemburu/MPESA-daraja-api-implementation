const request = require('request')

const { handleError, handleSuccess } = require('../utils');
 
module.exports.lipaNaMpesaOnlinePaybil =  function lipaNaMpesaOnlinePaybil(access,MpesaDataObject){
    let {
        CONSUMER_KEY,
        CONSUMER_SECRET,
        BUSINESSSHORTCODE,
        MSSID,
        NGROK_API,
        passkey
    } = MpesaDataObject;
    const endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'

    access(function(accToken){
        console.log('Access token recieved=',accToken)
        let auth = 'Bearer '+accToken;
       
        let datenow = new Date()
        let timestamp;
        if(String(datenow.getFullYear()).length==1){
            timestamp =  `0${datenow.getFullYear()}`
            console.log('timestamp [A0]',timestamp)
        } else {
            timestamp =  `${datenow.getFullYear()}`
            console.log('timestamp [A1]',timestamp)

        }
        if(String(datenow.getMonth()).length==1){
            timestamp+=  `0${datenow.getMonth()}`
            console.log('timestamp [B0]',timestamp)

        } else {
            timestamp+=  `${datenow.getMonth()}`
            console.log('timestamp [B1]',timestamp)

        }
        if(String(datenow.getDate()).length==1){
            timestamp+=`0${datenow.getDate()}`
            console.log('timestamp [C0]',timestamp)

        }else {
            timestamp+= `${datenow.getDate()}`
            console.log('timestamp [C1]',timestamp)

        }
        if(String(datenow.getHours()).length==1){
            timestamp+=`0${datenow.getHours()}`
            console.log('timestamp [D0]',timestamp)

        }else {
            timestamp+= `${datenow.getHours()}`
            console.log('timestamp [D1]',timestamp)

        }
        if(String(datenow.getMinutes()).length==1){
            timestamp+= `0${datenow.getMinutes()}`
            console.log('timestamp [E0]',timestamp)

        }else {
            timestamp+= `${datenow.getMinutes()}`
            console.log('timestamp [E1]',timestamp)

        }
        if(String(datenow.getSeconds()).length==1){
            timestamp+= `0${datenow.getSeconds()}`
            console.log('timestamp [F0]',timestamp)

        }else {
            timestamp+= `${datenow.getSeconds()}`
            console.log('timestamp [F1]',timestamp)

        }



        let passwrd = new Buffer.from(BUSINESSSHORTCODE+passkey+timestamp).toString('base64');
        console.log(timestamp+',')
        console.log(BUSINESSSHORTCODE+passkey+timestamp)
        console.log(passwrd)

        // 

        // var privatekey = fs.readFileSync(path.join(__dirname,"./mpesacert.cer"));
        // var bufferToEncrypt = new Buffer(passwrd);
        // bufferToEncrypt = new Buffer(passkey)
        
        // var encrypted = crypto.publicEncrypt(
        //     {"key" : privatekey, padding : constants.RSA_PKCS1_PADDING},
        //     bufferToEncrypt);
        // let encodedPwd = encrypted.toString("base64");

            // passwrd = encodedPwd


            // take 2
            // passwrd = new Buffer.from(BUSINESSSHORTCODE+passkey+'20200726173620')
        // timestamp 20200726173620
        request({
            url: endpoint,
            method: 'POST',
            headers: {
                'Authorization': auth
            },
            json:{
                "BusinessShortCode": BUSINESSSHORTCODE,
                "Password": passwrd,
                "Timestamp": String(timestamp),
                "TransactionType": "CustomerPayBillOnline",
                "Amount": "1",
                "PartyA": "254799995665",
                "PartyB": BUSINESSSHORTCODE,
                "PhoneNumber": "254799995665",
                "CallBackURL": NGROK_API+"/callback",
                "AccountReference": "254799995665",
                "TransactionDesc": "test"
            }
        },(error,response,body)=>{
            if(error){
                handleError('stk',error)
            }else {
                handleSuccess('stk',body)
            }
        })
    })
}
