const prompt = require("prompt-sync")();
const Information = require("./information");
const ValidationBelanja = require("./validation");
const Calculation = require("./calculation");
const {barang} = require("./constant")

Information();

let lanjutBelanja = true;

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

  const shopAgain = prompt(
    "Apakah anda ingin belanja lagi (y/n)? "
  ).toLowerCase();
  lanjutBelanja = shopAgain === "y";
}

console.log("Terima kasih telah berbelanja!");
