// // gue minta lu ngeprint 1-10 tapi pakai looping
// for (let i = 1; i <= 10; i++){
//   console.log(i)
// }

// // gue minta lu ngeprint 25-13 tapi pakai looping
// for (let i = 25; i >= 13; i--){
//   console.log(i)
// }

// // gue punya variable s dengan value 25
// // kalau gue input n dengan nilai 10
// // maka output yg gue pengen adalah 35
// // kalau gue input n dengan nilai 7
// // maka output yg gue pengen adalah 32
// let s = 25
// const prompt = require('prompt-sync')()
// n = Number(prompt('Masukkan angka yang kamu inginkan: '))
// let result = n + s
// console.log(result)

// gue minta lu ngeprint true/false (bilangan ganjil) untuk nilai n yg gue input
// const prompt = require('prompt-sync')()
// n = Number(prompt('Masukkan angka yang kamu inginkan: '))
// check = Boolean
// if(n % 2 == 0){
//   console.log(check)
// }else if(n % 2 !== 0){
//   console.log(check)
// }

// // gue minta lu ngeprint 1-20 tapi ganjil nya doang
// for (let i = 1; i <= 20; i++){
//   if(i % 2 !== 0){
//     console.log(i)
//   }
// }

// // gue minta lu ngeprint 1-20 tapi genap nya doang
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // gue minta lu ngeprint output jumlah bilangan ganjil dalam range 1-20
// countGanjil = 0
// for (let i = 1; i <= 20; i++){
//   if(i % 2 !== 0){
//     countGanjil++
//   }
// }
// console.log(countGanjil)

// // gue minta lu ngeprint output jumlah bilangan genap dalam range 1-20
// countGenap = 0
// for (let i = 1; i <= 20; i++){
//   if(i % 2 == 0){
//     countGenap++
//   }
// }
// console.log(countGenap)

// // Outputnya:
// // 1
// // 2
// // 2
// // 3
// // 3
// // 3
// for(let i = 1; i <= 3; i++){
//   for(let j = 1; j <= i; j++){
//     console.log(i)
//   }
// }

// // outputnya: [1, 3, 5, 7, 9, 11, 13, 15]
// arr = []
// for(let i = 1; i <= 15; i++){
//   if(i % 2 !== 0){
//     arr.push(i)
//   }
// }
// console.log(arr)

// // inputnya 1-20
// // outputnya
// // 1 - Ganjil
// // 2 - Genap
// // 3 - Ganjil
// for (let i = 1; i <= 20; i++){
//   if(i % 2 == 0){
//     console.log(i + " - Genap")
//   }else{
//     console.log(i + " - Ganjil")
//   }
// }

// // inputnya 100
// // output nya berupa array dengan angka keliapatan 5
// // contoh [5, 10, dsb]
// arr = []
// for (i = 1; i <= 100; i++){
//   if(i % 5 == 0){
//     arr.push(i)
//   }
// }
// console.log(arr)

// Inputnya 3
// Outputnya
// 1
// 22
// 333
for (let firstLoop = 1; firstLoop <= 3; firstLoop++) {
  output = "";
  for (let secondLoop = 1; secondLoop <= firstLoop; secondLoop++) {
    output += firstLoop;
  }
  console.log(output);
}

/**
Inputnya 3
Outputnya
***
**
*
*/

/**
Inputnya 3
Outputnya
*
**
***
*/
// for (let i = 1; i <= 3; i++){
//   star = "*"
//   for(let j = 1; j <= i; j++){
//     star += i
//   }
//   console.log(star)
// }


/**
55555
4444
333
22
1
 */

/**
2
33
444
5555
66666
 */

/**
11111
22222
33333
44444
55555

Kalau gue masukin 3, berarti 1 nya ada 3 dst
Kalau gue masukin 7, berarti 1 nya ada 7 dst
 */

// // Inputnya: 20
// // Outputnya:
// // 3 - Kelipatan 3
// // 5 - Kelipatan 5
// // 6 - Kelipatan 3
// // 9 - Kelipatan 3
// // 10 - Kelipatan 5
// // 12 - Kelipatan 3
// // 15 - Kelipatan 3 & 5
// // dst ...
// for (let i = 1; i <= 20; i++){
//   if(i % 3 == 0 && i % 5 == 0){
//     console.log(i + " - kelipatan 3 & 5")
//   }else if(i % 3 == 0){
//     console.log(i + " - kelipatan 3")
//   }else if(i % 5 == 0)(
//     console.log(i + " - kelipatan 5")
//   )
// }
