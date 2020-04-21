const dns = require('dns'); // name -- addresss

dns.lookup('pluralsight.com', (err, address) => {
    console.log(address)
    if (err){
        console.log("error: err")
    }
})

dns.resolveMx('pluralsight.com', (err, address) => {
    console.log(address)
    if (err){
        console.log("error: err")
    }
})

console.log('loaded!')

dns.reverse('54.191.125.144', (err, hostnames)=> {
    console.log(hostnames)
})