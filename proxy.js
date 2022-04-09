//прокси и объекты
const jetstream = {
    name: 'Samuel',
    age: 25,
    job: 'Cool swordsman'
}
const objectProxy = new Proxy(jetstream,{
    get(target,prop){
    console.log(`Getting prop ${prop}`)
    return target[prop]
    },
    set(target,prop, value){
        if (prop in target){
            target[prop] = value
        }else{
            throw new Error(`No ${prop} field in target`) //закидываем ошибку, если какого-то поля нет в objectProxy
        }
    },
    has(target, prop){
        return ['age', 'name', 'job'].includes(prop) //смотрим какие строки есть в пропе
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true //чтобы не вернуть false
    }
})
delete objectProxy.age
console.log(objectProxy)

//функции

const song = songText => `Song: ${songText}`
console.log(song('The memories broken, the truth goes unspoken'))
const functionProxy = new Proxy(song, {
    apply(target, thisArg, argArray) {
    console.log('Calling function...')
        return target.apply(thisArg,argArray).toUpperCase()
    }
})
console.log(functionProxy('Kill'))


//Классы
class Swordsman {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const SwordsmanProxy = new Proxy(Swordsman, {
    construct(target, argArray) {
        console.log('Construction...')

        return new Proxy(new target(...argArray), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`)
                return t [prop]
            }
        })
    }
})
const p = new SwordsmanProxy('Jack', 30)
console.log(p.name)