const prompt = require("prompt-sync")();
const Information = require("./information");
const ValidationBelanja = require("./validation");
const Calculation = require("./calculation");
const { barang } = require("./constant");

Information();
console.log();

let lanjutBelanja = true;
let belanjaan = [];

while (lanjutBelanja) {
  const barangBelanja = Number(prompt("Pilih barang yang ingin dibeli? ")) - 1;
  console.log("");
  if (ValidationBelanja(barangBelanja, barang) == false) {
    continue;
  }

  const barangDipilih = barang[barangBelanja];
  const totalBarang = Number(
    prompt("Masukkan total barang yang ingin dibeli? ")
  );
  totalHarga = Calculation(totalBarang, barangDipilih.price);

  console.log("");
  console.log(
    `Barang yang anda beli adalah ${barangDipilih.name} berjumlah ${totalBarang}, total yang harus anda bayar adalah Rp. ${totalHarga}`
  );
  console.log("");

  belanjaan.push({
    name: barangDipilih.name,
    quantity: totalBarang,
    price: totalHarga,
  });
  // console.log(belanjaan)

  const shopAgain = prompt(
    "Apakah ada barang yang ingin dibeli lagi (y/n)? "
  ).toLowerCase();
  lanjutBelanja = shopAgain === "y";
  console.log()
}

console.log("Daftar belanjaan Anda:");
belanjaan.forEach((item, index) => {
  console.log(
    `${index + 1}. ${item.name} - Jumlah: ${item.quantity}, Total Harga: Rp. ${
      item.price
    }`
  );
});
const semuaBelanjaan = belanjaan.reduce((total, item) => total + item.price, 0);

console.log(`Total semua belanjaan: Rp. ${semuaBelanjaan}`);

console.log("Terima kasih telah berbelanja!");
