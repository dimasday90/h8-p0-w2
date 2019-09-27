function balikKata(kata) {
    var tampungan = '';
    for(i = kata.length - 1; i >= 0; i --) {
        tampungan = tampungan + kata[i];
    }
    return tampungan;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));