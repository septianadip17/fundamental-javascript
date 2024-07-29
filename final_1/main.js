const prompt = require("prompt-sync")();
const Information = require("./information");
const ValidationBelanja = require("./validation");
const Calculation = require("./calculation");

const barang = [
  { name: "Minyak Goreng 2L Sania", price: 35000 },
  { name: "Tepung 1kg", price: 12000 },
  { name: "Mie Goreng 1pcs", price: 3000 },
  { name: "Saos ABC 1btl", price: 15000 },
  { name: "Voucher Google Play", price: 52000 },
];

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
  Calculation(barangDipilih, totalBarang);

  console.log("");
  console.log(
    `Barang yang anda beli adalah ${barangDipilih.name} berjumlah ${totalBarang}, total yang harus anda bayar adalah Rp. ${Calculation()}`
  );
  console.log("");

  const shopAgain = prompt(
    "Apakah anda ingin belanja lagi (y/n)? "
  ).toLowerCase();
  lanjutBelanja = shopAgain === "y";
}

console.log("Terima kasih telah berbelanja!");
