// // contoh 1
// async function getMultipleData() {
//   try {
//       let [response1, response2] = await Promise.all([
//           fetch('https://jsonplaceholder.typicode.com/todos/12'),
//           fetch('https://jsonplaceholder.typicode.com/todos/132')
//       ]);

//       if (!response1.ok || !response2.ok) {
//           throw new Error('One of the network responses was not ok');
//       }

//       let data1 = await response1.json();
//       let data2 = await response2.json();

//       console.log(data1, data2);
//       console.log("berhasil dijalankan")
//   } catch (error) {
//       console.error('There has been a problem with your fetch operation:', error);
//   }
// }

// getMultipleData();

// // contoh 2
// async function getData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/12");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     let data = await response.json();
//     console.log(data);
//     console.log("berhasil dijalankann")
//   } catch (error) {
//     console.error("There has been a problem with your fetch operation:", error);
//   }
// }
// getData();

// // contoh 3
// async function delay(ms) {
//   await setTimeout(() => {
//     console.log("testing");
//   }, ms);
// }
// // Async function that waits for the delay and then logs a message
// async function asyncFunction() {
//   console.log("Waiting for 2 seconds...");
//   // Use await to wait for the delay function to complete
//   await delay(2000);
//   // After the delay, log the message
//   console.log("2 seconds have passed");
// }

// asyncFunction();

// contoh 4
async function callAPI() {
  var response;

  await fetch("https://jsonplaceholder.typicode.com/todos/1").then((resp) => {
    response = resp;
  });

  return response;
}

async function main() {
  var receiveResponse = await callAPI();
  console.log(receiveResponse);
}

main();
