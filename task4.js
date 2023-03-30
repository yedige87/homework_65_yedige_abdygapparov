console.log('============== Задача 4 ==============')
let duck = {
    name: 'Дональд',
    color: 'белый',
    age: '1',
    toStr: function() {
        console.log(this.name + ',' + this.color + ',' + this.age)
    },
    say: function() {
        console.log('Кря кря!')
    }
};
console.log('Свойства и методы объекта duck: ')
duck.toStr()
duck.say()
console.log('=================================================')





