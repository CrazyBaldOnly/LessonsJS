console.log('Jetstream!')
console.log('Zandatsu')
function timeBeforeDeath (){
    console.log('2 seconds!')
}
setTimeout(function (){
    console.log('Dead and cut to 120 pieces!!')
},3000) //Закинул на сторонний апи, подождал 3 секунды, потом перешел в очередь и вернул в колл стек
setTimeout(timeBeforeDeath, 2000)
