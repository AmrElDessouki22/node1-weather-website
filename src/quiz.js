const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const countrylaglong = require('./Utils/countryLatLog')
const getCallBack = require('./Utils/getcallback')
const getData = require('./Utils/getData')
const port = process.env.PORT

const url = 'https://api.darksky.net/forecast/1b741728e7a5a486e629bb51feeb3b15/'

const filepathpublic = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templets/views')
const partionspath = path.join(__dirname,'../templets/partions')
app.use(express.static(filepathpublic))

app.set('view engine', 'hbs');
app.set('views',viewspath)
hbs.registerPartials(partionspath)





app.get('',(req,res) => {
  
    countrylaglong.getCountryByIp(req.connection.remoteAddress,req.query.country,(longlag,country)=>{
        getCallBack.getCallBack(url+longlag,(erorr,rescallback)=>
        {
            if(erorr)
            {
                return app.render('404')
       
            }
           if(rescallback.code === (400 || null))
           {
               res.render('404')
       
           }else{
               res.render('index',getData(rescallback,country))
       }
       
        })

    })
   
    
})

app.get('/about',(req,res) =>
{
    res.render('onecolumn',{
        title : 'about',
        madeby : 'this side made by Amr EL-Dessouki'
    })
})

app.get('*',(req,res)=>
{
    res.send("can not find your path")
})







app.listen(3000)