1. // Looping using "while"

var angka = 0
var angka2 = 22

console.log('LOOPING PERTAMA using while');
while(angka < 20) {
angka += 2;
console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA using while');
while(angka2 > 2) {
    angka2 -= 2;
    console.log(angka2 + ' - I will become fullstack developer');
}

2. // Looping using "for"

console.log('LOOPING PERTAMA using for');
for(var angka = 1; angka <= 20; angka ++) {
    console.log(angka + ' - I love coding');
}

console.log('LOOPING KEDUA using for');
for(var angka2 = 20; angka2 >= 1; angka2 --) {
    console.log(angka2 + ' - I will become fullstack developer');
}

3. // Angka Ganjil & Genap

console.log('DERET GANJIL DAN GENAP');
var deret = 0;
while(deret < 100) {
    deret ++;
    if(deret % 2 == 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

console.log('KELIPATAN 3');
for(var deret = 1; deret <= 100; deret += 2) {
    if(deret % 3 == 0) {
        console.log(deret + ' KELIPATAN 3');
    } else {
        console.log('');
    }
}

console.log('KELIPATAN 6');
for(var deret = 1; deret <= 100; deret += 5) {
    if(deret % 6 == 0) {
        console.log(deret + ' KELIPATAN 6');
    } else {
        console.log('');
    }
}

console.log('KELIPATAN 10')
for(var deret = 1; deret <= 100; deret += 9) {
    if(deret % 10 == 0) {
        console.log(deret + ' KELIPATAN 10');
    } else {
        console.log('');
    }
}