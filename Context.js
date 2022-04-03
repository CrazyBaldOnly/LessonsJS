// function Bloodshed (){
//     console.log("There will be blood (blood) shed (shed)", this)
// }
// const Jetstream = {
//     name: "Sam",
//     type: "Swordsman",
//     theme: Bloodshed
// }
// Bloodshed()
// console.log(Jetstream)
// Jetstream.theme()
//--------------------------------------------------------------------------
//This указывает на объект, в котором было вызвано. Так же и с другими вещами.
//Вызывая theme из объекта Jetstream я получаю оюбъект, в котором была функция.
//--------------------------------------------------------------------------
// function Bloodshed (){
//     console.log("There will be blood (blood) shed (shed)", this)
// }
// const Jetstream = {
//     name: "Sam",
//     type: "Cool swordsman",
//     theme: Bloodshed,
//     windowedTheme: Bloodshed.bind(global),//Тут я забиндил контекст global и привязался к нему, получая и выводя его свойства)
//     themeText: function (){
//         console.group(`This song is about ${this.name}`)
//         console.log(`Theme text is about ${this.name}`)
//         console.log(`He's a ${this.type}`)
//         console.groupEnd()
//     }
// }
// const Raiden = {
//     name: "Jack",
//     type: "Weapon of justice"
// }
// Jetstream.themeText()
// Jetstream.themeText.bind(Raiden)() //Без двойных скобок bind в этом случае просто привяжет контекст Raiden, функция вызвана не будет
//--------------------------------------------------------------------------
//Здесь я забиндил функцию themeText в объекте Jetstream к значениям объекта Raiden. Можно увидеть, что this тоже перепривязались к Raiden.
//--------------------------------------------------------------------------
function Bloodshed (){
    console.log("There will be blood (blood) shed (shed)", this)
}
const Jetstream = {
    name: "Sam",
    type: "Cool swordsman",
    theme: Bloodshed,
    windowedTheme: Bloodshed.bind(global),
    themeText: function (memories, truth){
        console.group(`This song is about ${this.name}`)
        console.log(`Theme text is about ${this.name}`)
        console.log(`He's a ${this.type}`)
        console.log(`The ${memories} broken`)
        console.log(`The ${truth} goes unspoken`)
        console.groupEnd()
    }
}
const Raiden = {
    name: "Jack",
    type: "Weapon of justice"
}
// const RaidenFunc = Jetstream.themeText.bind(Raiden)
// RaidenFunc('Memories','truth')//Записав параметры сюда, я смог вывести строки с нужными мне параметрами, взяв функцию themeText из объекта Jetstream
//Jetstream.themeText.bind(Raiden, 'Memories', 'Truth')()//Укоротил запись, записав все в одну строку и вызвав функцию в конце.
//Jetstream.themeText.call(Raiden, 'Memories', 'Truth')//Та же строка, но с методом call, вызывает функцию сразу, без скобок.
Jetstream.themeText.apply(Raiden, ['Memories', 'Truth'])//Та же строка, но с методом apple, вызывает функцию сразу, может иметь только два параметра в массиве.
//Вторая часть кода.
const hits = [1,2,3,4,5]
const bullets = [1,2,4,8,16]
// function partsForHits(array, n){
//     return array.map( function (i){
//         return i*n
//     })
// }
Array.prototype.partsForHits = function (n){
    return this.map( function (i){ //Важно!!! this нужен для привзязки map к Array.
        return i*n
    })
    //console.log('Parts for each hit ',this)
}
console.log('Parts for hits', hits.partsForHits(2))
console.log('Parts for bullets shot', bullets.partsForHits(3))
//--------------------------------------------------------------------------
//Большой пример. В части кода до массивов я добавлял функции параметры и использовал их для объекта Raiden.
//Во второй части кода я использовал глобальный прототип массивов и привязвл к нему функцию partsForHits.
//Она перебирает каждый объект i при помощи метода map и умножает его на n.
//После этого я в выводе вызываю нужную функцию к нужному массиву и получаю результат в зависимости от n.
//--------------------------------------------------------------------------

