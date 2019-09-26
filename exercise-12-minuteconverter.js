function konversiMenit(menit) {
    var m = menit / 60;
    var ss = menit % 60;
    if(ss < 10) {
        return Math.floor(m) + ":0" + Math.floor(ss);
    } else {
        return Math.floor(m) + ":" + Math.floor(ss);
    }
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));