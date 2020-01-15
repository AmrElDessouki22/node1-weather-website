var geoip = require('geoip-lite')
const callback = require('./getcallback')
const getCountryByIp = (ip_,country,callbackvalue)=>
{
    try{
        if(country === undefined){
    var ip = ip_;
    var geo = geoip.lookup(ip);
    console.log(geo.country);
    getcountry(geo.country,callbackvalue)
        }else
        {
            getcountry(country,callbackvalue)
        }
    
    }catch
    {
        callbackvalue('30.048819'+',31.243666','Egypt')
    }
}

const getcountry = (value , callbackvalue)=>
{
    const url = 'https://api.opencagedata.com/geocode/v1/json?q='+value+'&key=7c55a194e8c841289b100c305e84d7e6'
   
   
    
    
    callback.getCallBack_(url , (error,resBody)=>
    {
        
        if(error)
        {
            callbackvalue('30.048819'+',31.243666','Egypt')
        }
        if(resBody.code === 400)
        {
            callbackvalue('30.048819'+',31.243666','Egypt')
        }
        callbackvalue(resBody.results[0].geometry.lat +','+resBody.results[0].geometry.lng,resBody.results[0].formatted);
        
    })
}

module.exports = {getCountryByIp}