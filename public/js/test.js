
const buttonsearch = document.querySelector('form')
const input = document.querySelector('input')
buttonsearch.addEventListener('submit',(e)=>
{
    e.preventDefault()
    location.href = '/?country='+input.value

})