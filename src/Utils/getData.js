const getTimeDate = require('./getTimeDate')

const getData = (rescallback,country)=>
{
    data = {
    temp: rescallback.currently.temperature+'°F' ,
     time : getTimeDate(rescallback.currently.time) ,
     humidity : rescallback.currently.humidity,
     windSpeed : rescallback.currently.windSpeed,
     madeby : 'this side made by Amr EL-Dessouki',
     country : country ,
     temp0: rescallback.daily.data[1].temperatureHigh+'°F',
     time0 : getTimeDate(rescallback.daily.data[1].time) ,
     humidity0 : rescallback.daily.data[1].humidity,
     windSpeed0 : rescallback.daily.data[1].windSpeed,
     temp1: rescallback.daily.data[2].temperatureHigh+'°F',
     time1 : getTimeDate(rescallback.daily.data[2].time) ,
     humidity1 : rescallback.daily.data[2].humidity,
     windSpeed1 : rescallback.daily.data[2].windSpeed,
     temp2: rescallback.daily.data[3].temperatureHigh+'°F',
     time2 : getTimeDate(rescallback.daily.data[3].time) ,
     humidity2 : rescallback.daily.data[3].humidity,
     windSpeed2 : rescallback.daily.data[3].windSpeed,
     temp3: rescallback.daily.data[4].temperatureHigh+'°F',
     time3 : getTimeDate(rescallback.daily.data[4].time) ,
     humidity3 : rescallback.daily.data[4].humidity,
     windSpeed3 : rescallback.daily.data[4].windSpeed
    }
    return data
}
module.exports = getData