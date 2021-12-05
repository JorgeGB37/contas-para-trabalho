function inversabinaria(){
    var binary = document.getElementById("primeira caixa").value;
    var int = parseInt(binary, 2);
    document.getElementById("resultadocontadecimal").innerHTML = "O Decimal é:" + int;
}function inversaoctal(){
    var octal = document.getElementById("primeira2 caixa").value;
    var inte = parseInt(octal, 8);
    document.getElementById("resultadocontadecimal2").innerHTML = "O Decimal é:" + inte;
}
function inversahexadecimal(){
    var hexa = document.getElementById("primeira3 caixa").value;
    var intei = parseInt(hexa, 16);
    document.getElementById("resultadocontadecimal3").innerHTML = "O Decimal é:" + intei;
}
function contabinaria(){
        let bin = 0;
        let rem, i = 1
        var x = document.getElementById("segunda caixa").value;
        while (x != 0) {
            rem = x % 2;
            x = parseInt(x / 2);
            bin = bin + rem * i;
            i = i * 10;
        }
        document.getElementById("resultadoconta2").innerHTML = "O Binario é:" + bin; 
}
function contaoctal(){
    let oct = 0;
    let ram, o = 1
    var y = document.getElementById("terceira caixa").value;
    while (y != 0) {
        ram = y % 8;
        y = parseInt(y / 8);
        oct = oct + ram * o;
        o = o * 10;
    }
    document.getElementById("resultadoconta3").innerHTML = "O Octal é: " + oct;
}
function contahexadecimal(){
    let number = document.getElementById("quarta caixa").value;
    h = parseInt(number, 10).toString(16)
    document.getElementById("resultadoconta4").innerHTML = "O Hexadecimal é: " + h;


}