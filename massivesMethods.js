const characters = [
    {name: 'Sam', age: 25, deathstatus: true},
    {name: 'Jack', age: 30, deathstatus: false},
    {name: 'Monsoon', age: 40, deathstatus: true},
    {name: 'Mistral', age: 30, deathstatus: true},
    {name: 'Sundowner', age: 30, deathstatus: true},
    {name: 'Armstrong', age: 45, deathstatus: true}
]
// for (let spisok = 0; spisok < characters.length; spisok++){
//     console.log(characters[spisok])
// }
//
// for (let heroes of characters){
//     console.log(heroes)
//}

//ForEach - для применения чего-либо к каждому элементу массива
// characters.forEach(function (heroes, index, charactersArray){ //Классическая функция
//     console.log(heroes)
//     console.log(index)
//     console.log(charactersArray)
// })
// characters.forEach(heroes => console.log(heroes)) //Удобный короткий вариант со стрелочной функцией

//Map - для преобразования текущего массива
// const newCharacters = characters.map(characters=>{
//     return `${characters.name} (${characters.age})`
// })
// console.log(newCharacters)

// const newCharacters = characters.map(characters=>`${characters.name} (${characters.age})`) //Короткий варинат без return
// console.log(newCharacters)

//Filter
// const eldery = []
// for (let sort = 0; sort < characters.length; sort++ ){
//     if (characters[sort].age >= 31){
//         eldery.push(characters[sort])
//     }
// }
// console.log(eldery)
// const eldery = characters.filter(characters => {
//     if (characters.age >= 31){
//         return true
//     }
// })
// const eldery = characters.filter(characters => characters.age >=31) //короткая запись фильтра
// console.log(eldery)

//Reduce
// let ageAmount = 0
// for (let sum = 0; sum < characters.length; sum++ ){
//     ageAmount += characters[sum].age
// }
// let ageAmount = characters.reduce((total, person) => {
//     return total + person.age
// }, 0)
// let ageAmount = characters.reduce((total, person) => total + person.age, 0) //короткая версия reduce
// console.log(ageAmount)

//Find
// const nameFinder = characters.find(heroes => heroes.name === 'Jack')
// console.log(nameFinder)
//
// //FindIndex
// const indexFinder = characters.findIndex(index => index.name === 'Jack')
// console.log(indexFinder)

//combo methods
const amount = characters
    .filter(person => person.age > 31)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            deathstatus: person.deathstatus
        }
    })
    .reduce((total, person) => total + person.age, 0)
console.log(amount)