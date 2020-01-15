const gettime = (value) =>
{
    var date = new Date(value * 1000)
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear()
return day+'-'+month+'-'+year
}
module.exports = gettime