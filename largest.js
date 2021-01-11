   
   
module.exports.largest=(x,y,z)=>
{
    if(x>y&&x>z){
        return x
    }
    else if(y>z)
    {
        return y
    }
    else 
    {
       return z
    }
}
module.exports.smallest=(x,y,z)=>{
    if(x<y&&x<z){
        return x
    }
    else if(y<z)
    {
        return y
    }
    else
    {
       return z
    }
}

