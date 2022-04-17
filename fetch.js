// const requestURl = 'https://jsonplaceholder.typicode.com/users'
// function sendRequest (method, url, body = null) {
//     return fetch(url)
//         .then(response => {
//             //return response.text()//привели к тексту
//             return response.json() //получили сразу все объекты
//     })
// }
// sendRequest('GET', requestURl) //получить что-либо с url
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Sam',
    age: 25
}
const requestURl = 'https://jsonplaceholder.typicode.com/users'
function sendRequest (method, url, body = null) {
    const headers = {
        'Content-Type':'application/json'
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(response => {
            if (response.ok){
                return response.json()
            }
            return response.json().then(error => {
                const err = new Error('ЧЗХ ОШИБКА')
                err.data = error
                throw err
            })
        })
}

sendRequest('POST', requestURl, body)//отправить что-либо
    .then(data => console.log(data))
    .catch(err => console.log(err))