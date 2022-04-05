console.log('request data...')

// setTimeout(() => {
//     console.log('preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'Working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('data recieved', backendData)
//     }, 2000)
// }, 2000)
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
         server: 'aws',
         port: 2000,
         status: 'Working'
     }
     resolve(backendData)
    }, 0)
})

p.then((data)=>{
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        data.modified = true
           resolve(data)
    }, 0)
    })
}).then(clientData => {
    console.log('Data recieved', clientData)
})
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Raiden killed Sam')
        }, 0)
        resolve()
})
p1.then((bike) => {
    return new Promise((resolve, reject) => {
        console.log('Raiden stole bike from Sam')
    })
})