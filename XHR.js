const requestURl = 'https://jsonplaceholder.typicode.com/users'
function sendRequest (method, url, body = null) {
    return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
        if (xhr.status >= 400) { //обработка ошибок
            reject(xhr.response)
        } else {
           resolve(xhr.response)
        }
        //resolve(xhr.response)
        //console.log(JSON.parse(xhr.response))//делаю ответ в виде массива из кучи объектов
    }
    xhr.onerror = () => { //Обработка ошибок
        reject(xhr.response)
    }
    xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURl) //получить что-либо
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
const body = {
    name: 'Sam',
    age: 25
}
sendRequest('POST', requestURl, body)//отправить что-либо
    .then(data => console.log(data))
    .catch(err => console.log(err))