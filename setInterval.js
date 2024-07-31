setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());
}, 1000);

let count = 0;
let maxCount = 5;

let intervalID = setInterval(() => {
  console.log("Ini pesan yang muncul setiap 1 detik");
  count++;

  if (count >= maxCount) {
    clearInterval(intervalID);
    console.log("Interval dihentikan");
  }
}, 1000);

function displayMessage(name, message) {
  console.log(`${name}, ${message}`);
}

setInterval(
  displayMessage,
  3000,
  "Septian",
  "ini pesan yang muncul setiap 3 detik!"
);

setInterval(() => {
  console.log("Pesan ini muncul setiap 1 detik");
}, 1000);

let messages = ["Pesan 1", "Pesan 2", "Pesan 3"];
let index = 0;

setInterval(() => {
  document.getElementById("message").innerText = messages[index];
  index = (index + 1) % messages.length;
}, 2000);
