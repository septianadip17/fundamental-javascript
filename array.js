// ["Saab", "Volvo", "BMW"];
// let brandCar = ["Saab", "Volvo", "BMW"]
// console.log(brandCar)

// gue pengen volvo diganti jadi toyota
// gue pengen saab diganti jadi honda
// gue pengen bmw diganti jadi suzuki
// brandCar[0] = "honda"
// brandCar[1] = "toyota"
// brandCar[2] = "suzuki"
// console.log(brandCar)

// print toyota based on brandCar array
// console.log(brandCar[1])

// tambahin merk porcshe
// brandCar.push("porcshe")
// console.log(brandCar)

// gue punya 2 arrays
// ["toyota", "honda"]
// ["suzuki", "bmw"]
// expectation output: ["toyota", "honda", "suzuki", "bmw"]
// tolong beri nama array baru tsb sebagai: newBrandCar
brandCarFirst = ["toyota", "honda"];
brandCarSecond = ["suzuki", "bmw"];
newBrandCar = brandCarFirst.concat(brandCarSecond);
console.log(newBrandCar);

// tolong di print array newBrandCar satu satu
// contoh:
// - toyota
// - honda
// - suzuki
// - bmw
// untuk melakukan ini, silahkan gunakan loop for in: https://www.w3schools.com/js/js_loop_forin.asp

for (let x in newBrandCar) {
  console.log(`- ${newBrandCar[x]}`);
}
