// const example = {
//     name: "Rivaldy",
//     title: "Software Engineer (Backend)",
//     address: "Jl. Panjang"
// }

// console.log(example);

/**

var example = {
    name: "Rivaldy",
    title: "Software Engineer (Backend)",
    address: "Jl. Panjang"
}

Masukkan nama:
Masukkan title:
Masukkan address:

Gue pengen semua data didalam object tersebut diganti dengan data diri lu.
Setelah itu di print object nya, dan cek apakah datanya sesuai atau tidak dengan yg lu input.

 */

// var example = {
//   name: "Rivaldy",
//   title: "Software Engineer (Backend)",
//   address: "Jl. Panjang",
// };
// const prompt = require("prompt-sync")();
// newName = String(prompt("Masukkan nama: "));
// newTitle = String(prompt("Masukkan title: "));
// newAddress = String(prompt("Masukkan address: "));

// example.name = newName;
// example.title = newTitle;
// example.address = newAddress;

// console.log(
//   `Halo ${newName}, kamu adalah seorang ${newTitle} dan kamu beralamat di ${newAddress}`
// );

// gue pengen elu bisa buat array object, terus print
let biodata = [
  {
    name: "iay",
    title: "Presiden",
    address: {
      postCode: 16512,
      village: "krukut",
      district: "limo",
      city: "depok",
      country: "indonesia",
      continent: "southeast asia",
      planet: "earth"
    }
  },
  {
    name: "ipal",
    title: "Wakil Presiden",
    address: {
      postCode: 16513,
      village: "sawah",
      district: "cafe",
      city: "sukoharjo",
      country: "indonesia",
      continent: "southeast asia",
      planet: "earth"
    }
  },
  {
    name: "ray",
    title: "Kandidat",
    address: {
      postCode: 16514,
      village: "krukut",
      district: "limo",
      city: "depok",
      country: "indonesia",
      continent: "southeast asia",
      planet: "earth"
    }
  }
]
// console.log(biodata)
// console.log(`${biodata[1].name}`)

for (let x in biodata){
  bio = biodata[x]
  nama = bio.name
  title = bio.title
  kodePos = bio.address.postCode
  kelurahan = bio.address.village
  kecamatan = bio.address.district
  kota = bio.address.city
  negara = bio.address.country
  benua = bio.address.continent
  planet = bio.address.planet
  console.log(`- halo nama saya ${nama} saya memiliki jabatan sebagai ${title} saya tinggal di ${kelurahan}, ${kecamatan}, kota ${kota}. Negara saya adalah ${negara} yang terletak di benua ${benua} planet ${planet} dan kode pos saya adalah ${kodePos}`)
}