const request = require('request')
const getlanglat = require('./countryLatLog')

const getCallBack = (url , callback) =>
{
    console.log(url);
    
    
        request({url:url,json:true,method: 'GET'}, function (error, response) {
  
            if(error || response.body === null)
            {
                callback('error',null)
                
            }else 
            {
                
               callback(null,response.body)
               
           
            }
           })
    
    
    
}
const getCallBack_ = (url , callback) =>
{
    
    
    
    request({url:url,json:true,method: 'GET'}, function (error, response) {
  
        if(error || response.body === null)
        {
            callback('error',null)
            
        }else 
        {
            
           callback(null,response.body)
           
       
        }
       })
}

module.exports = {getCallBack,getCallBack_}