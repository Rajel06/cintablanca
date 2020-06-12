

//Estructura

// for(inicio; limite; secuencia){
//     instruccion
// }

for(var i = 0;  i <= 10; i = i + 1){
    console.log(i)
}

// Empiece en 0  su  - 200 limite y la secuencia  5

for(var i =0; i >= -200; i = i -5){
    console.log(i)
}

// Empiece en 500  su limite 0 y la secuencia 10
for (var i= 500; i >= 0; i = i - 10){
    console.log(i)
}
// Empiece en -500  su limite 0 y la secuencia 50
for(var e=-500; e <= 0; e= e+50){
    console.log(e)
}


// --------------------------Challege Cool-----------------
// Del 1 al 100
// Si el numero es divisible entre 3 ----> Fizz
// Si el numero es divisible entre 5 ----> Buzz
// Si el numeor es divisible entre 3 y 5 ---> FizzBuzz
// Ejemplo: 
// 1 
// 2
// 3 Fizz
// 4
// 5 Buzz
// ...
// 15 FizzBuzz
// 16
//Errores
// 15 fizz
// 15 buzz
// 15 fizzBuzz
// for(var x = -500;  x <= 0 ; x = x +50 ){
//     if(){
//         console.log(object)
//     }
// }

 for (var d=1; d <=100; d= d+1 ){
    if(d%5 === 0 && d%3 ===0  ){
       console.log (d + " fizzBuzz") 
    }else if (d%5 ===0 ){
        console.log(d +" Buzz")
    }else if (d%3 ===0){
        console.log(d +" Fizz")
    }else{
        console.log(d)
    }
 }

