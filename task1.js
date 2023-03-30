console.log('============== Задача 1 ==============')
console.log('Полезность продуктов: ')
let myArray = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']
function GoodOrBad() {
    for (element of myArray) {
        if (element == 'молоко') {
            console.log(element + ' - '+ 'хорошо');
        } else {
            console.log(element + ' - '+ 'плохо');
        }
    }
}

GoodOrBad()
console.log('=================================================')