//contoh 1
let ditepati = true
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    }else{
        reject('Ingkar janji..');
    }
});

janji1
    .then(response => console.log('OK! : ' + response))
    .catch(response => console.log('NOT OK! : ' + response))