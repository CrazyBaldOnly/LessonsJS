// function samsCoolJokes(n){
//     return function () {
//         console.log(1000*n)
//     }
// }
// const jokesCounter = samsCoolJokes(2) // Замкнул двойку внутри
// jokesCounter()
// function murasamaInSheath(n){
//     return function (num) {
//         return n + num
//     }
// }
// const hits = murasamaInSheath(1)// Внутри произошло замыкание единицы для n
// const ZANDATSU = murasamaInSheath(10)// Тут тоже.
// console.log(hits(1))
// console.log(ZANDATSU(1))
// function purposeOfWeapon(name) {
//     return function (phrase) {
//         return `Now I see, ${name}! ${phrase}`
//     }
// }
// const samSays = purposeOfWeapon('Jack')
// const jackSays = purposeOfWeapon('Sam')
//
// console.log(samSays("You deny your weapon its purpose!"))
// console.log(jackSays("You were wrong, I didn't!"))
// function heroInfo(heroName, heroWeapon) {
//         return function (heroStatus) {
//             return `${heroName} has ${heroWeapon} and he's ${heroStatus}`
//         }
// }
// const samRodrigez = heroInfo("Samuel Rodrigez", "Murasama")
// console.log(samRodrigez("Dead"))
// const jackTheRipper = heroInfo("Jack", "HP Blade")
// console.log(jackTheRipper("Alive"))
const jetsteamSam = {
    name: 'Sam',
    weapon: 'Murasama',
    status: 'dead',
}
const raiden = {
    name: 'Jack',
    weapon: 'HP blade',
    status: 'alive'
}
function aboutHeroes() {
    console.log(`Info about hero: Name - ${this.name}, Weapon - ${this.weapon}, Status - ${this.status}`)
}
aboutHeroes.bind(raiden)()
//Ниже - самописная bind. ...args разбивает объект на составляющие в виде массиввa, которые потом попадают в func.
// info - контекст, к свойствам которого все привязывается. args замыкается внутри функции.
// function heroInfo(info, func) {
//     return function (...args) {
//         func.apply(info, args)
//     }
// }
// function aboutHeroes(){
//     console.log(`Info about hero: Name - ${this.name}, Weapon - ${this.weapon}, Status - ${this.status}`)
// }
// heroInfo(jetsteamSam, aboutHeroes)()

