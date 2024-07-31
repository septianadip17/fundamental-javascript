
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