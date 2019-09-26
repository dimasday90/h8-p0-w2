function shoutOut() {
    return 'Halo Function!'
}
console.log(shoutOut());

function calculateMultiply() {
    return num1 * num2
}
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);

console.log(hasilPerkalian);

function processSentence() {
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby
}

var name = 'Dimas';
var age = 22;
var address = 'Jln. Panji Wangko no.8, Mataram';
var hobby = 'gaming and watching anime and other pop-culture';
var fullSentence = processSentence(name, age, address, hobby);

console.log(fullSentence);

