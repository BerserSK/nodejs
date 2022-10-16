const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('============================================');
console.log('|                Programa de               |');
console.log('|                    Menu                  |');
console.log('============================================');
console.log('|                                          |');
console.log('|           Por favor seleccione una       |');
console.log('|               de las opciones            |');
console.log('|                  del menu                |');
console.log('|                                          |');
console.log('|                                          |');
console.log('|    OPT.      Nombre                      |');
console.log('| ---------------------------------------- |');
console.log('|     1        Saludo                      |');
console.log('|     2        Suma                        |');
console.log('|     3        Resta                       |');
console.log('|     4        Multiplicación              |');
console.log('|     5        División                    |');
console.log('|     6        Contador de elementos       |');
console.log('|     7        constructor de elementos    |');
console.log('|     8        Despedida                   |');
console.log('|     9        Fin de Programa             |');
console.log('|                                          |');
console.log('| ---------------------------------------- |');
console.log('|     Nota: este programa esta realizado   |');
console.log('|     noje.js con javascript como base.    |');
console.log('|                                          |');
console.log('============================================');
console.log('                                            ');

rl.question('---> Ingresa un opcion de menu ?', function (opt) {

  console.log(`---> Ingresaste la opción: ${opt}`);
  console.log('                                            ');
  Menu(opt);

 // rl.close();
});



rl.on('close', function(){
  //console.log('Adios');
  process.exit(0);
})


function Menu(opt){

  switch (opt){
    case '1':
      console.log('                    ');
      console.log('====== Saludo====== ');
      console.log('                    ');
      saludo();
    break;
    case '2':
      console.log('                    ');
      console.log('====== Suma ====== ');
      console.log('                    ');
      //llamen la funcion que realiza la suma
      suma();
    break;
    case '3':
        console.log('                    ');
        console.log('====== Resta ====== ');
        console.log('                    ');
        //llamen la funcion que realiza la suma
        resta();
    break;
    case '4':
        console.log('                             ');
        console.log('====== Multiplicacion ====== ');
        console.log('                             ');
        //llamen la funcion que realiza la suma
        multi();
    break;
    case '5':
        console.log('                       ');
        console.log('====== Division ====== ');
        console.log('                       ');
        //llamen la funcion que realiza la suma
        divi();
    break;
    case '6':
        console.log('                      ');
        console.log('====== Objetos ====== ');
        console.log('                      ');
        //llamen la funcion que realiza la suma
        contador();
    break;
    case '7':
        console.log('                          ');
        console.log('====== Constructor ====== ');
        console.log('                          ');
        //llamen la funcion que realiza la suma
        constructor();
    break;
    case '8':
      console.log('                        ');
      console.log('====== Despedida ====== ');
      console.log('                        ');
      despedida();
    break;
    case '9':
      console.log('====================================');
      console.log('|       Fin del programa !Adios¡   |');
      console.log('====================================');
    break;
  }

    // Saludo ------------------------
    function saludo(){
      rl.question('---> Ingrese su nombre:', function (nombre) {
          console.log(`Bienvenido al programa ${nombre}`);
          rl.close();
      });
    }

    // Suma ------------------------
    function suma(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) + parseInt(num2);
                console.log(`El resultado de la suma es ${resultado}`);
                rl.close();
        })
    })
    } 

    // Resta ------------------------
    function resta(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) - parseInt(num2);
                console.log(`El resultado de la resta es ${resultado}`);
                rl.close();
        })
    })
    } 

    // Multiplicacion ------------------------
    function multi(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) * parseInt(num2);
                console.log(`El resultado de la multiplicacion es ${resultado}`);
                rl.close();
        })
    })
    } 

    // Division ------------------------
    function divi(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) / parseInt(num2);
                console.log(`El resultado de la division es ${resultado}`);
                rl.close();
        })
    })
    } 

    // Contador ------------------------
    function contador(){
      arrayContador = [null, 'Moto', 'Cicla', 'Carro', 'Patineta', 'Bus', 'Patines', 'Monopatin', 'triciclo']
      rl.question('---> Cuantos objetos desea contar? : ', function(a){
        if(a <= arrayContador.length){
          for(i = 1; i<=a; i++){
            console.log(`${i}. ${arrayContador[i]}`);
          }
        }
        else{
          console.log(`No existen ${a} objetos, existen ${arrayContador.length-1}`);
        }
        rl.close();
      });   
    }

    // Constructor ------------------------
    function constructor(){
      const b = []
      rl.question('---> Ingrese el Nº de animales a generar: ', function(a){
        console.log('Animales generados: ');
        for(let i = 1; i<=a; i++){
          b.push(`Animales Nº ${i}`);
        }
        console.log(`${b}`);
        rl.close();
      })
    }

    // Despedida ------------------------
    function despedida(){
      rl.question('---> Ingrese su nombre: ',function(nombre){
        console.log(`Te despedimos del programa ${nombre}`);
        rl.close()
      })
    }
}