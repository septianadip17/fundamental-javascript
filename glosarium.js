// // continue: Melewati iterasi loop saat ini dan melanjutkan dengan iterasi berikutnya.
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue; // Melewati iterasi saat i adalah 2
//   }
//   console.log(i);
// }

// // break: Menghentikan loop sepenuhnya dan keluar dari loop.
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     break; // Menghentikan loop saat i adalah 2
//   }
//   console.log(i);
// }

// return: Menghentikan eksekusi fungsi dan mengembalikan nilai dari fungsi tersebut.
function tambah(a, b) {
  return a + b; // Mengembalikan hasil penjumlahan
}

let hasil = tambah(3, 4);
console.log(hasil);
