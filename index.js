const myos = require("os");

const myfile = require("fs")

var user = myos.userInfo();
var platform = myos.platform();
var network = myos.networkInterfaces();


console.log(user);

console.log(platform);
console.log(network);


var data = JSON.stringify(network);


myfile.appendFile('networkdata.txt',network,function (error) {


    if(error){
        throw error;

    }

    else 
    {
        console.log("file to be saved");
    }

} );

