function xo(str) {
    str.split('')
    var countX = 0;
    var countO = 0;
    for (var i of str) {
        if(i == 'x') {
            countX = countX + 1;
        }
    }
    for (var j of str) {
        if(j == 'o') {
            countO = countO + 1;
        }
    }
    if(countX == countO) {
        return true;
    } else {
        return false;
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));