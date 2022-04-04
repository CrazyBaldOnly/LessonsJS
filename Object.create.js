const jetstreamSam = Object.create(
    {
        calcAge(){
            return console.log('Age:',new Date().getFullYear()-this.birthYear) //функция-ключ прототипа
        }
    },
    {
        name: {
            value: 'Samuel',
            enumerable: true, //настройка видимости поля
            writable: true, //настройка изменяемости ключа и поля
            configurable: true //позволяет удалять и добавлять ключи в поле
        },
        birthYear: {
            value: 1993,
            enumerable: true,
            writable: false,
            configurable: false,
        },
        age: {
            get() {
                return new Date().getFullYear()-this.birthYear
            },
            set(value){
                console.log('Set age', value)
            }
        }
    }
)
// const jetstreamSam = {
//     name: 'Samuel',
//     surname: 'Rodrigez'
// }
//jetstreamSam.name = 'Jack' //проверка для параметра writable
//delete jetstreamSam.name
for (let key in jetstreamSam) {
    if (jetstreamSam.hasOwnProperty(key)) {//сделано для того, чтобы не проходить по ключам прототипа
        console.log('Key', key, jetstreamSam[key])
    }
}
console.log(jetstreamSam.name , jetstreamSam.birthYear, jetstreamSam.age=100, jetstreamSam.age)
jetstreamSam.calcAge()