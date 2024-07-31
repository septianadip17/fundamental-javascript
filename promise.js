// //contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     }else{
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))

// // contoh 2
// let delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Tertunda selama ${ms} milidetik`);
//     }, ms);
//   });
// };

// delay(2000).then((message) => {
//   console.log(message);
// });

// contoh 3
fetch("https://jsonplaceholder.typicode.com/todos/12")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
