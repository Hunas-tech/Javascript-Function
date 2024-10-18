//exercicio-1


function saudacao (Hunas){
    return `Coisa de DEV!!!`;
}
console.log(saudacao("Hunas"));


//exercicio-2


function somar (a,b) {
    return a+b
} 
let resultado =somar(8,9);
console.log(resultado)


//exercicio-3


function parouimpar (conta){
    return conta % 2 == 0 ? "Par" : "Impar"
}

let conta = 23
console.log(parouimpar(conta));


//exercico-4


function multiplica (resultado1){
return resultado1;
} 
let a = 4;
let b = 8;
let resultado1 = multiplica(a*b);
console.log(multiplica(resultado1));


//exercicio-5

 
function celsiusParaFahrenheit(celsius){
    return(celsius *1.8)+32
}
console.log(celsiusParaFahrenheit(40));


//exercicio-6


function calculaMedia (media){
    return media
}

let c = 4;
let d = 6;
let e = 8;
let media = (c+d+e)/3;
console.log(calculaMedia(media));


//exercicio-7


function minutosParaSegundos (segundos){
    return segundos
}
let  minutos = 4;
let segundos = minutos * 60;
console.log(minutosParaSegundos(segundos));


//exercicios-8


function ehPositivo (f){
    return f == 0? false : true
}
let f = 77
console.log(ehPositivo(f));


//exercicio-9

function repetePalavra (palavra){
    return palavra.repeat(4)
}
let palavra ="JHunaSolar";
console.log(repetePalavra(palavra));


//exercicio-10


function calcularAreaRetangulo(){
    base = 10;
    altura = 12;
    ret = base * altura;
    return ret
}
let retangulo = calcularAreaRetangulo()
console.log(retangulo)


