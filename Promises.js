// console.log("Lets's dance!")
// setTimeout(() => {
//     console.log("Ok, let's do this!")
//     const sam = {
//         status: "alive",
//         weapon: "Murasama",
//         power: 9000
//     }
//     setTimeout(()=>{
//         sam.cool = true
//         console.log("Info: ", sam)
//     }, 2000)
// },2000)
const jetstream = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Ok, let's do this!")
        const sam = {
            status: "alive",
            weapon: "Murasama",
            power: 9000
        }
        resolve(sam)//Записав sam в скобках я получил доступ к объекту sam
    },2000)
})
jetstream.then((info) => { //и параметр resolve (значение в скобках)  я получу тут. Можно ставить любое название.
    // const raiden = new Promise((resolve, reject)=>{ //вариант с созданием новой переменной под промис
    return new Promise((resolve, reject)=>{ //вариант с возвратом промиса
    setTimeout(()=>{
        info.cool = true
        resolve(info)
        //console.log("Info: ", sam)
    }, 2000)
    })
    // raiden.then(raidenInfo => { //Остатки варианта с созданием новой переменной под промис
    //     console.log("Info: ", raidenInfo)
    // })
})
    .then(samInfo => {
    console.log("Info: ", samInfo)
    samInfo.updated = true
    return samInfo
}).then(data => {
    console.log('Updated',data)
})
    .catch(samError => console.error('Error', samError))//Ловлю ошибку и выдаю ее в консоли
    .finally(()=>{console.log('You are finally here!')})//finally выведется в любом случае

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
//sleep(2000).then(() => console.log('After 2 secs'))
//sleep(3000).then(() => console.log('After 3 secs'))
Promise.all([sleep(2000), sleep(5000)]).then(() =>{ //all ждет пока выполнятся все промисы и потом срабатывает
    console.log('All promises')
})
Promise.race([sleep(2000), sleep(5000)]).then(() =>{ //race ждет пока выполнится самый быстрый промис и срабатывает
    console.log('fastest of all promises')
})