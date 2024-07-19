// gue minta lu ngeprint 1-10 tapi pakai looping
// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

// gue minta lu ngeprint 25-13 tapi pakai looping
// for (let i = 25; i >= 13; i--) {
//   console.log(i)
// }

// gue punya variable s dengan value 25
// kalau gue input n dengan nilai 10
// maka output yg gue pengen adalah 35
// kalau gue input n dengan nilai 7
// maka output yg gue pengen adalah 32
// const prompt = require('prompt-sync')()
// var s = 25
// n = Number(prompt('Masukkan angka yang kamu inginkan: '))
// console.log(n + s)

// gue minta lu ngeprint true/false (bilangan ganjil) untuk nilai n yg gue input
// const prompt = require('prompt-sync')()
// let n = Number(prompt('Masukkan angka yang kamu inginkan: '))
// let ganjil = n % 2 !== 0
// console.log(ganjil)

// gue minta lu ngeprint 1-20 tapi ganjil nya doang
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i)
//   }
// }

// gue minta lu ngeprint 1-20 tapi genap nya doang
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

// gue minta lu ngeprint output jumlah bilangan ganjil dalam range 1-20
// let count = 0
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     count++
//   }
// }
// console.log(count)

// gue minta lu ngeprint output jumlah bilangan genap dalam range 1-20
// let count = 0
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     count++
//   }
// }
// console.log(count)

/**
Outputnya:
1
2
2
3
3
3
 */
// for (let i = 1; i <= 3; i++) {
//   for (let n = 1; n <= i; n++) {
//     console.log(i)
//   }
// }

// outputnya: [1, 3, 5, 7, 9, 11, 13, 15]
// let arr = []
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     arr.push(i)
//   }
// }
// console.log(arr)

// inputnya 1-20
// outputnya
// 1 - Ganjil
// 2 - Genap
// 3 - Ganjil
// dsb
// 20 - Genap
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i + ' - Genap')
//   } else {
//     console.log(i + ' - Ganjil')
//   }
// }

// inputnya 100
// output nya berupa array dengan angka keliapatan 5
// contoh [5, 10, dsb]
// let arr = []
// for (let i = 1; i <= 100; i++){
//   if (i % 5 == 0){
//     arr.push(i)
//   }
// }
// console.log(arr)

/**
Inputnya 3
Outputnya
1
22
333
 */
// let a = 3
// for (let i = 1; i <= a; i++){
//   var print = ""
//   for (let n = 1; n <= i; n++){
//     print += i.toString()
//   }
//   console.log(print)
// }

/**
Inputnya 3
Outputnya
***
**
*
 */
// let a = 3
// for (let i = a; i > 0; i-- ){
//   var star = ""
//   for(let n = 0; n < i; n++){
//     star += "*";
//   }
//   console.log(star)
// }

/**
Inputnya 3
Outputnya
*
**
***
 */
// let a = 3;
// for (let i = 1; i <= a; i++) {
//   var star = "";
//   for (let n = 1; n <= i; n++) {
//     star += "*";
//   }
//   console.log(star);
// }

/**
55555
4444
333
22
1
 */
// for (let i = 5; i >= 1; i--) {
//   let print = "";
//   for (let j = 0; j < i; j++) {
//     print += i;
//   }
//   console.log(print);
// }

/**
2
33
444
5555
66666
 */
let a = 6;
for (let i = 1; i <= a; i++) {
  var print = "";
  for (let n = 1; n <= i; n++) {
    print += i;
  }
  console.log(print);
}

/**
11111
22222
33333
44444
55555

Kalau gue masukin 3, berarti 1 nya ada 3 dst
Kalau gue masukin 7, berarti 1 nya ada 7 dst
 */

/**

Inputnya: 20
Outputnya:
3 - Kelipatan 3
5 - Kelipatan 5
6 - Kelipatan 3
9 - Kelipatan 3
10 - Kelipatan 5
12 - Kelipatan 3
15 - Kelipatan 3 & 5
dst ...

 */

for (let i = 1; i <= 20; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log(i + " - Kelipatan 3 & 5")
  }else if(i % 3 == 0){
    console.log(i + " - Kelipatan 3")
  }else if(i % 5 == 0){
    console.log(i + " - Kelipatan 5")
  }
}
