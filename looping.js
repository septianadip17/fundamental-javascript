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

// // outputnya: [1, 3, 5, 7, 9, 11, 13, 15]
// arr = []; //empty array atau array kosong
// for (let ganjil = 1; ganjil <= 15; ganjil++) {
//   if (ganjil % 2 !== 0) {
//     arr.push(ganjil);
//   }
// }
// console.log(arr);

// Outputnya:
// 1
// 2
// 2
// 3
// 3
// 3



/**

firstNum = 1
  -> Jalan kan code didalamnya (looping)
  endNum = 1
    -> Jalan kan code didalamnya (console.log)
  endNum = 2 (false) reason nya 2 > 1

firstNum = 2
  -> Jalan kan code didalamnya (looping)
  endNum = 1
    -> Jalan kan code didalamnya (console.log)
  endNum = 2
    -> Jalan kan code didalamnya (console.log)
  endNum = 3 (false) reason nya 3 > 2

firstNum = 3
  -> Jalan kan code di dalamnya (looping)
  endNum = 1
    -> Jalankan code di dalamnya (console.log firstNum)
  endNum = 2
    -> Jalankan code di dalamnya (console.log firstNum)
  endNum = 3
    -> Jalankan code di dalamnya (console.log firstNum)
  endNum = 4 (false) reasonnya 4 > 3

firstNum = 4 (false) reasonnya 4 > 3

 */

for (let firstNum = 1; firstNum <= 3; firstNum++) {
  // akan selalu menjalankan code yg ada didalamnya
  for (let endNum = 1; endNum <= firstNum; endNum++) {
    // akan selalu menjalankan code yg ada didalamnya
    console.log(firstNum)
  }
} // nambahin nya disini firstNum++
