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

var example = {
  name: "Rivaldy",
  title: "Software Engineer (Backend)",
  address: "Jl. Panjang",
};
const prompt = require("prompt-sync")();
newName = String(prompt("Masukkan nama: "));
newTitle = String(prompt("Masukkan title: "));
newAddress = String(prompt("Masukkan address: "));

example.name = newName;
example.title = newTitle;
example.address = newAddress;

console.log(
  `Halo ${newName}, kamu adalah seorang ${newTitle} dan kamu beralamat di ${newAddress}`
);
