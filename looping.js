// // gue minta lu ngeprint 1-10 tapi pakai looping
// for (let angkaAwal = 1; angkaAwal <= 10; angkaAwal++){
//   console.log(angkaAwal)
// }

// // gue minta lu ngeprint 25-13 tapi pakai looping
// for (let angkaAwal = 25; angkaAwal >= 13; angkaAwal--){
//   console.log(angkaAwal);
// }

// // gue minta lu ngeprint 1-20 tapi ganjil nya doang
// for (let ganjil = 1; ganjil <= 20; ganjil++) {
//   if (ganjil % 2 !== 0) {
//     console.log(ganjil);
//   }
// }

// outputnya: [1, 3, 5, 7, 9, 11, 13, 15]
arr = []; //empty array atau array kosong
for (let ganjil = 1; ganjil <= 15; ganjil++) {
  if (ganjil % 2 !== 0) {
    arr.push(ganjil);
  }
}
console.log(arr);
