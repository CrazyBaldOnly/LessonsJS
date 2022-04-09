const delay = ms => {
    return new Promise(r => setTimeout(() => r(),ms))
}
delay(2000).then(()=>console.log(`Прошло 2 секунды`))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos () {
//     console.log("Fetch to do started")
//      return delay(2000).then(() => {
//         return fetch(url)
//         //fetch(url).then(response => response.json())
//     }).then(response => response.json())
// }
// fetchTodos().then(data => {
//     console.log('Data:', data)
// })
//     .catch(err => console.error(err))

async function fetchAsyncTodos(){//если внутри используем await, то перед функцией пишем async
    console.log('Fetch todo started')

    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (err) {
        console.error(err)
    } finally {
        console.log('Fin')
    }

}
 fetchAsyncTodos().then(() => {
     console.log('Hello')
 })