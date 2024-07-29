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

Apakah anda ingin belanja lagi (y/n)? (masukkan input) (bisa pakai for atau while, tapi gue prefer while biar beda aja)

INFORMATION: (jangan di print, cuma info)
- barang-barang harus ditaruh di dalam array object (nama, harga)
- jika sebelum nya menggunakan if else, kali ini kamu harus menggunakan kombinasi loop-in untuk mengecek barang yg di inginkan oleh pembeli
- jumlahkan seperti biasa (bisa lihat contoh soal sebelumnya)

 */

const prompt = require("prompt-sync")();

console.log("Aplikasi Kasir:");
console.log("");
console.log("Barang-barang yang tersedia adalah: ");
console.log(`
1. Minyak Goreng 2L Sania (Rp. 35.000)
2. Tepung 1kg (Rp. 12.000)
3. Mie Goreng 1pcs (Rp. 3.000)
4. Saos ABC 1btl (Rp. 15.000)
5. Voucher Google Play (Rp. 52.000)`
);
console.log("");

const barang = [
  { name: "Minyak Goreng 2L Sania", price: 35000 },
  { name: "Tepung 1kg", price: 12000 },
  { name: "Mie Goreng 1pcs", price: 3000 },
  { name: "Saos ABC 1btl", price: 15000 },
  { name: "Voucher Google Play", price: 52000 },
];

let lanjutBelanja = true;

while (lanjutBelanja) {
  const barangBelanja = Number(prompt("Pilih barang yang ingin dibeli? ")) - 1;
  console.log("");

  if (barangBelanja < 0 || barangBelanja >= barang.length) {
    console.log("Barang yang kamu masukkan tidak ada");
    continue;
  }

  const barangDipilih = barang[barangBelanja];
  const totalBarang = Number(
    prompt("Masukkan total barang yang ingin dibeli? ")
  );
  const totalPrice = totalBarang * barangDipilih.price;

  console.log("");
  console.log(
    `Barang yang anda beli adalah ${barangDipilih.name} berjumlah ${totalBarang}, total yang harus anda bayar adalah Rp. ${totalPrice}`
  );
  console.log("");

  const shopAgain = prompt(
    "Apakah anda ingin belanja lagi (y/n)? "
  ).toLowerCase();
  lanjutBelanja = shopAgain === "y";
}

console.log("Terima kasih telah berbelanja!");
