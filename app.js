/*console.log("Hello World!")
let nombre = "Fernando";
//console.log(nombre);

nombre = "Mario";
console.log(nombre)
const saludar = (nombre)=>{
    return `saludos ${nombre}`;
}

console.log(saludar("Fernando"));*/

/*let num1 = 0;
let num2 = 0;
const calculo = (num1, num2)=>{
    total = num1 + num2;
    return `El resultado de la suma es ${total}`;
}

console.log(calculo(15,15));*/

/*let numero = 0;
let obj = [];
const crear = (numero)=>{
    for(let i=0; i<numero; i++){
        obj.push(`Texto ${i}`)
    }
    return `total elementos ${obj}`
}

console.log(crear(5));*/

/*let si = "Si Porque no";
let no = "No Porque si";
const condicion = (si, no)=>{
    if(si == si){
        return `Usted a elegido el ${si}`
    }else if(no == no){
        return `Usted a elegido el ${no}`
    }
}

console.log(condicion(si))*/

/*n = 0;
x = 0;
const condicion = (x, n)=>{
  
    while (n < 3) {
      n ++;
      x += n;
    }
    return `El numero a aumentado a ${n} y ${x}`
}

console.log(condicion(0,0))*/

let result = '';
let i = 0;

const condicionDo = (result, i)=>{
  
    do {
        i = i + 1;
        result = result + i;
      } while (i < 5);

    return `Los numeros son ${result}`
}

console.log(condicionDo('', 0));
// Resultado E: "12345"
