const https =require('https');

//same with https and https

// const req = http.request(
//     {hostname: 'www.google.com'}, //, method:'?'},


// req: http.ClientRequest
const req = https.get('https://google.com',
    res => {

        // res: http.IncomingMessage
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', data=> {
            console.log(data.toString());
        })
    }
)

req.on('error', e => console.log(e));

// req.end();
console.log(req.agent) // http.Agent