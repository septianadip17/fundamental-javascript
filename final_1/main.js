const prompt = require("prompt-sync")();

function();



let lanjutBelanja = true;

while (lanjutBelanja) {
  const barangBelanja = Number(prompt("Pilih barang yang ingin dibeli? ")) - 1;
  console.log("");



  const barangDipilih = barang[barangBelanja];
  const totalBarang = Number(
    prompt("Masukkan total barang yang ingin dibeli? ")
  );





  const shopAgain = prompt(
    "Apakah anda ingin belanja lagi (y/n)? "
  ).toLowerCase();
  lanjutBelanja = shopAgain === "y";
}

console.log("Terima kasih telah berbelanja!");