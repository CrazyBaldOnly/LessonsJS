// const person = {
//     name: 'Nick',
//     age : 19,
//     hello: function () {
//         console.log('Hi')
//     }
// }
// console.log(person)
// person.hello()
// console.log(person.toString())
//---------------------------------------------------------------------------
//to.String работает потому что в прототипе объекта person есть такой метод
//---------------------------------------------------------------------------
const person = new Object({
    name: 'Nick',
    age : 19,
    player: function () {
        console.log("Nick controls Raiden")
    }
})
Object.prototype.murasama = function (){
    console.log("Its Sam's sword")
}

const Raiden = Object.create(person)
Raiden.name = "Jack"
console.log(Raiden.name)
Raiden.murasama()
Raiden.player()
//---------------------------------------------------------------------------
//Тут ровно так же. Я могу использовать функции прототипа (и самого объекта) person (murasama) даже в новом объекте Raiden. Плюс, я могу менять объект Raiden, т.к. JS смотрит на него сверху вниз.
//---------------------------------------------------------------------------
const Armstrong = new String("He uses nanomachines, son")
if (Armstrong.length <= 30)
    console.log("Armstrong really uses nanomachines")
console.log(Armstrong.length)
console.log(Armstrong)
Armstrong.murasama()
//---------------------------------------------------------------------------
//Еще один пример. Я могу использовать свойства Object даже в строке, достаточно написать имя переменной строки и нужную мне функцию.
//---------------------------------------------------------------------------