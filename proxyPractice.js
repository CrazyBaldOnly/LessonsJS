//Враппер
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy (target,{
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}
const position = withDefaultValue(
    {
        x: 24,
        y: 42
    },
    0
)
console.log(position)

//hidden properties

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj1, prop) => (prop in obj1) && (!prop.startsWith(prefix)),
        ownKeys: obj1 => Reflect.ownKeys(obj1)
            .filter(p => !p.startsWith(prefix)),
        get: (obj1, prop, reciever) => (prop in reciever)
        ? obj1[true]
            : console.log('No such prop')
    })
}
const hide = withHiddenProps({
    hi: 'Hello! Salut!',
    _hidethis: 'Hehehehe'
})
console.log(Object.keys(hide))

//Оптимизация
// const swordsmenData = [
//     {id:1, name: 'Samuel', job: 'Brazilian samurai', age: 25},
//     {id:2, name: 'Jack', job: 'Justiciar', age: 30},
//     {id:3, name: 'Armstrong', job: 'Senator', age: 50},
//     {id:4, name: 'Testknight', job: 'dummy', age: false},
// ]
// console.log(swordsmenData.find(swordsmen => swordsmen.id === 3))
// const index = {}
// swordsmenData.forEach(i=>(index[i.id] = i))
// console.log(index[2])
const IndexedSwordsmenData = new Proxy(Array,{
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop){
                switch (prop) {
                    case 'push' :
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case'findById': return id => index[id]
                    default:
                        return arr [prop]
                }
            }
        })
    }
})
const mechniki = new IndexedSwordsmenData([
    {id:1, name: 'Samuel', job: 'Brazilian samurai', age: 25},
    {id:2, name: 'Jack', job: 'Justiciar', age: 30},
    {id:3, name: 'Armstrong', job: 'Senator', age: 50},
    {id:4, name: 'Testknight', job: 'dummy', age: false},
])
mechniki.push({id:228, name: 'Nikita', age: 19, job: 'Student'})
console.log(mechniki)
console.log(mechniki.findById(228))
console.log(mechniki[1])
