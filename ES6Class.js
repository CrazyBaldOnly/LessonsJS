// const jetstreamSam = {
//     name: 'Samuel',
//     weapon: 'Murasama',
//     isDead: true
// }
class InfoAboutHeroes {
    static type = 'Samuel Rodrigez'
    constructor(heroInfo) {
        this.name = heroInfo.name
        this.weapon = heroInfo.weapon
        this.isDead = heroInfo.isDead
        this.age = heroInfo.age
    }
    quote(){
    console.log('You deny your weapon its purpose')
}
}

// const samuelInfo = new InfoAboutHeroes({
//     name: 'Samuel',
//     weapon: 'Murasama',
//     isDead: true
// })
// console.log(InfoAboutHeroes.quote(), InfoAboutHeroes.type)
class CoolGuys extends InfoAboutHeroes {
    static type = 'Swordsman'
     constructor(heroInfo) { //конструктор для CoolGuys
         super(heroInfo)//чтобы строка выше работала я должен вызвать родительский конструктор
         this.augments = heroInfo.augments //Только после этого я могу добавлять новые свойства в мой конструктор
         this.motivation = heroInfo.motivation
     }
    quote() {
        super.quote()//Это нужно чтобы не стирать родительский quote
        console.log('Lets dance!')
    }
    get trueMotivation () {
        return console.log('Настоящая мотивация Джека -',this.motivation*5 + '%')
    }
    set trueMotivation(updMotivation){
        this.motivation = updMotivation
    }
}
const samuel =  new CoolGuys({
    name: 'Samuel',
    age: 25,
    weapon: 'Murasama',
    isDead: true,
    augments: 'hand'
})
const raiden = new CoolGuys({
    name: 'Jack',
    age: 30,
    weapon: 'HP blade',
    isDead: false,
    augments: 'Full body',
    motivation: 100,
})
const testKnight = new InfoAboutHeroes({
    name: 'Nameless',
    weapon: 'Sword',
    isDead: false,
    age: 'Unknown'
})
console.log(testKnight)
console.log(samuel)
console.log(raiden.trueMotivation)
console.log(raiden)


