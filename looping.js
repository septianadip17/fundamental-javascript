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

// for (let firstNum = 1; firstNum <= 3; firstNum++) {
//   // akan selalu menjalankan code yg ada didalamnya
//   for (let endNum = 1; endNum <= firstNum; endNum++) {
//     // akan selalu menjalankan code yg ada didalamnya
//     console.log(firstNum)
//   }
// } // nambahin nya disini firstNum++

// Outputnya:
// 1
// 1
// 2
// 1
// 2
// 3
// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4
// 5
// for (let a = 1; a <= 5; a++){
//   for (let b = 1; b <= a; b++){
//     console.log(b)
//   }
// }

/**
Inputnya 3
Outputnya
*
**
***
*/

// for (let i = 1; i <= 3; i++) {
//   star = "";
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// /**
// Inputnya 3
// Outputnya
// *** (loop-2 jalan 3x)
// ** (loop-2 jalan 2x)
// * (loop-2 jalan 1x)
// */
// for (let i = 3; i >= 1; i--) {
//   star = "";
//   // for (let j = 1; i >= j; j++) {
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// // /**
// // 2
// // 33
// // 444
// // 5555
// // 66666
// //  */
// for (let i = 2; i <= 6; i++) {
//   string = "";
//   for (let j = 2; j <= i; j++) {
//     string += i;
//   }
//   console.log(string);
// }

// /**
// 11111
// 22222
// 33333
// 44444
// 55555

// Kalau gue masukin 3, berarti 1 nya ada 3 dst
// Kalau gue masukin 7, berarti 1 nya ada 7 dst
//  */

// for (let i = 1; i <= 5; i++) {
//   string = ""
//   for (let j = 1; j <= 5; j++) {
//     string += i
//   }
//   console.log(string)
// }

/**

Aplikasi Kasir:

Barang-barang yang tersedia adalah:
1. Minyak Goreng 2L Sania (Rp. 35.000)
2. Tepung 1kg (Rp. 12.000)
3. Mie Goreng 1pcs (Rp. 3.000)
4. Saos ABC 1btl (Rp. 15.000)
5. Voucher Google Play (Rp. 52.000)

Pilih barang yang ingin di beli? (masukkan input)

Masukkan total barang yang ingin di beli? (masukkan input)

Barang yang anda beli adalah Minyak Goreng 2L Sania berjumlah 3,
total yang harus anda bayarkan adalah Rp. 105.000

 */

console.log("Aplikasi Kasir:");
console.log("")
console.log("Barang-barang yang tersedia adalah: ");
console.log(`1. Minyak Goreng 2L Sania (Rp. 35.000)
2. Tepung 1kg (Rp. 12.000)
3. Mie Goreng 1pcs (Rp. 3.000)
4. Saos ABC 1btl (Rp. 15.000)
5. Voucher Google Play (Rp. 52.000)`);
console.log("")

const prompt = require("prompt-sync")();
barang = Number(prompt("Pilih barang yang ingin dibeli? "));
console.log("")

var name = "";
var price = "";
if (barang == 1) {
  (name = "Minyak Goreng 2L Sania"), (price = 35000);
} else if (barang == 2) {
  (name = "Tepung 1kg"), (price = 12000);
} else if (barang == 3) {
  name = "Mie Goreng 1pcs";
  price = 3000;
} else if (barang == 4) {
  name = "Saos ABC 1btl";
  price = 15000;
} else if (barang == 5) {
  name = "Voucher Google Play";
  price = 52000;
} else {
  console.log("Barang yang kamu masukkan tidak ada");
}

// disini proses mendapatkan total barang yg ingin dibeli
totalBarang = Number(prompt("Masukkan total barang yang ingin dibeli? "));
totalBelanja = totalBarang * price
console.log("")

// disini proses kalkulasi
console.log(`Barang yang anda beli adalah ${name} berjumlah ${totalBarang}, total yang harus anda bayar adalah Rp. ${totalBelanja}`)
