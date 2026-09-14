const app =require   ('express')().use(require('express').json());///setup miniserver and tell to automatically read incoming data as json.
// start a seerver in a port 4k,attach socket.io to it ,hence push live update to phone instantly;
const    io=new (require ("socket.io").Server )(app.listen(4000)  ,{cors:{origin   :"*"}});


///as webhook in metadata is setsup,so meta check the ownership to prove;
app. get("/webhook",(req,  res)=>req.query   ['hub.verify_token']==='my_verify_token'  ?res.send(req.query['hub.challenge']):res.sendStatus(403));


app.post('/webhook',(req,  res)=>{
    res.sendStatus(200);
    const v=req.body.entry?.[0]?.changes?.[0]?.value;
    if (v?.leadgen_id==="444444444444")io.emit("new_lead",{    ...v,id:v.leadgen_id,   time:Date.now(),full_name:'Meta_test_leaddd',email:"test@example.com",phone_number:"+911-96000000",source :'Meta weebhooks test'});


    

});
