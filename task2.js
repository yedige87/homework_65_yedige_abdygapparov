console.log('============== Задача 2 ==============')
let Array1 = [1, 5, 12, 4, 3]
let Array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let Array3 = [3, 10, 17]

console.log('Средние значения трех массивов')
function averageCalc() {
    let summ1 = Array1.reduce((total, value) => total + value, 0) / Array1.length;
        console.log(summ1);
    let summ2 = Array2.reduce((total, value) => total + value, 0) / Array2.length;
        console.log(summ2);
    let summ3 = Array3.reduce((total, value) => total + value, 0) / Array3.length;
        console.log(summ3);
}
averageCalc()
console.log('=================================================')
