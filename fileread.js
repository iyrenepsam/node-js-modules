
const myos = require('os')
const myfile = require('fs')


var network = myos.networkInterfaces()

console.log(network)

var data = JSON.stringify(network)

myfile.appendFile('networkdata.txt', data , function( error ){
   
    if(error){
        throw error;

    }

    else 
    {
        console.log("file to be saved");
    }


});