// Barisan Bintang

console.log('barisan bintang 1')
var rows1 = '*';
for(i = 0; i < 5; i ++) {
    console.log(rows1);
}

2. // Barisan Bintang dengan Nested Looping

console.log('barisan bintang 2')
var rows3 = '*'
var tampungan = ''
for(i = 0; i < 5; i ++) {
     for(i = 0; i < 5; i ++) {
         tampungan = tampungan + rows3;
    }  
    console.log(tampungan);
    console.log(tampungan);
    console.log(tampungan);
    console.log(tampungan);
    console.log(tampungan);
}

3. // Barisan tanggan bintang dengan nested loop

console.log('barisan tangga bintang')
var pagar = '*****';
var tampungan2 = '';

for(i= 0; i < pagar.length; i ++) {
    for(i = 0; i < pagar.length; i ++) {
        tampungan2 = tampungan2 + pagar[i]
        console.log(tampungan2)
    }
}
