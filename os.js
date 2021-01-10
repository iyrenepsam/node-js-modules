
const myos = require('os') 

var hostname = myos.hostname()
var space = myos.freemem()

var avg = myos.loadavg()

var type = myos.type()

var uptime = myos.uptime()

var user = myos.userInfo(['buffer'])


var signal = myos.constants.SIGHUP

console.log(hostname)

console.log(space)

console.log(avg)

console.log(type)

console.log(uptime)

console.log(user)

console.log(signal)