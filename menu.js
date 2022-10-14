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
      console.log('Saludo');
    break;
    case '2':
      console.log('Suma');
      //llamen la funcion que realiza la suma
      suma();
    break;
    case '3':
        console.log('Resta');
        //llamen la funcion que realiza la suma
        resta();
    break;
    case '4':
        console.log('Multiplicacion');
        //llamen la funcion que realiza la suma
        multi();
    break;
    case '5':
        console.log('Division');
        //llamen la funcion que realiza la suma
        divi();
    break;
    case '6':
        console.log('Objetos');
        //llamen la funcion que realiza la suma
        lista();
    break;
    case '8':
      console.log('Despedida');
    break;
    case '9':
      console.log('====================================');
      console.log('|       Fin del programa !Adios¡   |');
      console.log('====================================');
    break;
  }


    function suma(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) + parseInt(num2);
                console.log(resultado)
                rl.close();
        })
    })
    } 


    function resta(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) - parseInt(num2);
                console.log(resultado)
                rl.close();
        })
    })
    } 


    function multi(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) * parseInt(num2);
                console.log(resultado)
                rl.close();
        })
    })
    } 


    function divi(){
        rl.question('---> Ingresa el primer numero ?', function (num1) {
            rl.question('---> Ingresa el segundo numero ?', function (num2) {
                const resultado = parseInt(num1) / parseInt(num2);
                console.log(resultado)
                rl.close();
        })
    })
    } 


    function lista(){

        var depositos=[];
        var nro,monto,canti=0;

        do {
        rl.question('Ingrese nro de cliente (0 para salir)','');

        nro=parseInt(nro)
        if (nro!=0)
        {
            rl.question('Ingrese monto a depositar','');

            monto=parseInt(monto);
            // Línea nueva. Si elemento de la matriz no existe, inicializarlo con 0
            (depositos[nro] == undefined) ? depositos[nro] = 0: false;
            // Línea modificada. Cambiar = por +=
            depositos[nro] += monto;
            // Contador de depósitos
            canti++
        }
        } while (nro!=0);

        var suma=0;
        //var canti=0;

        for(var f=0;f<depositos.length;f++)
        {
        if (depositos[f]!==undefined)
        {
            suma=suma+depositos[f];
            //canti++;
        }
        }
        console.log('Cantidad de depósitos:'+canti+'<br>');
        console.log('Total depositado por todos los clientes:'+suma);
    }
}