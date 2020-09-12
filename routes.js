exports.routes = function(app){

    // stk callback
    app.post('/callback',(req,res)=>{
        console.log('------callback------')
        console.log(req.body)
        res.status(200).json({})

        
    })
    app.get('/callback',(req,res)=>{
        console.log('------callback------')
        console.log(req.body)
        res.status(200).json({})

        
    })
    

    // url registration
    app.post('/confirmation',(req,res)=>{
        console.log('------confirmation------')
        console.log(req.body)
        res.status(200).json({})

    })
    app.get('/confirmation',(req,res)=>{
        console.log('------confirmation------')
        console.log(req.body)
        res.status(200).json({})

    })
    app.post('/validation_url',(req,res)=>{
        console.log('------validation_url------')
        console.log(req.body)
        res.status(200).json({})

    })
    app.get('/validation_url',(req,res)=>{
        console.log('------validation_url------')
        console.log(req.body)
        res.status(200).json({})
    })

    // homepage
    app.get('/',(req,res)=>{
        res.json('Hello')
        registerUrl()
    })
}