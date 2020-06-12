// alerta ('Holaaaa')



// if (condición) {
// accion en caso que sea verdad
//} más {
// accionista en caso que sea falso
//}

// var  num  =  10


// // --------------- Operadores relaciones ---------------------
// // <menor que
// // <= menor igual
// //> alcalde que
// //> = mayor igual
// // == comparar -> nunca lo usen
// // === comparar identicamente
// //! == difente de 



// if ( num  !==   10 ) {
//     console . log ( 'Es verdad' )
// }else {
//     console . log ( 'Es falso' )
// }

// // ------------------------- Desafío -------------------
// // Investigar que es el MODULO ->% <-
// // Si un numero es par o impar 
// // Pd este numero lo tiene que dar el usiario.


// var  preguntaNumero  =  prompt ( 'Ingresa cualquier numero' )
// var  numReal  =  Number ( preguntaNumero )

// if ( numReal % 2  ===  0 ) {
//     console . log ( numReal  +  ': es par' )
// } else  if ( numReal % 2  ===  1 ) {
//     console . log ( numReal  +  ': es impar'  )}
//  else{ 
//     console . error ( 'Es un error, por favor checa tus datos' )
// }





// var correcta = prompt ("Pon la contraseña" )


// if ( correcta === "perrosalchicha123") {
//     console . log (correcta + ": es correcto")

//     } else  {
//    console. error("Intenta nuevamente");

//              }
             
            
//-------------------------------Operadores logicos-----------------------        
    
// Y && obliga a que las 2 condiciones sean verdaderas
// O \\ si uno se cumple nos arroja un verdadero, si ninguno se cumple es falso

// Edad para no conducir 0 -> 15 y 71 ->
// Edad para sacar persmiso 16 o 17
// Edad para menejar 18 -> 70


// var  edad  =  Number ( prompt ( 'Ingresa tu edad' ) ) 


 
// if ( edad >= 18  &&  edad <= 70  ) {
//     console . log ( 'Puedes sacar tu licencia' )
// } else  if ( edad  ===  16  ||  edad  ===  17 ) {
//     console . log ( 'Puedes sacar tu permiso para conducir' )
// } else  if ( edad <= 15  ||  edad >= 71 ) {
//     console . log ( 'No puedes conducir por tu seguridad y la de los demas' )
// } else {
   
//     console . error ( 'Datos incorrectos, intentalo de nuevo ' )
// } 


//-----------------------Piedra papel o tijera-----------------------

// var jugador1 = ( prompt ( " Elige piedra , tijera y tijera"))
// var jugador2 = ( prompt ( " Elige piedra, tijera y papel"))


// if ("inicio de sesion" === "perritoSalchicha123") {
//     console . log ("Bienvenido")
// }

// if (jugador1 === "piedra" && jugador2 ==="piedra" ){
//     console .  log ( "Empate")

//     } else if ( jugador1 === "piedra" && jugador2 === "tijera"){
//         Console . log ("gana jugador1")
//     }
//      else if (jugador2 === "tijera" && jugador1 === "papel"){
//      console . log ( "gana jugador2")
        
//      }else if( jugador1 === "hoja" && jugador2 === "lapiz")
//       console . error ("intente nuevamente")



      // ---------- 💩 PPT Complicado 💩 -------->

var  userAnswer  =  prompt ( 'Ingresa Piedra, Papel o Tijera' ) . toLowerCase ( )

//ORDENADOR PERSONAL
var  pcAnswer  =  ''

// Math es el metodo de js para usar funciones matematicas
// .floor -> regresa el minimo o el maxio ----> (0, 5) regresa * 0, 1, 2, 3, 4, 5 * 
 var opciones  =  Math.floor ( ( Math . random ( ) * 3 )  +  1  )

if ( opciones  ===  1 ) {  pcAnswer  =  'piedra'  }
if ( opciones  ===  2 )  {  pcAnswer  =  'papel'  }
if ( opciones  ===  3 )  {  pcAnswer  =  'tijera'  } 

if ( userAnswer  ===  pcAnswer ) {
    console . log ( 'Es un empate porque:' )
    console . log ( 'Usuario:'  +  userAnswer )
    console . log ( 'PC:'  +  pcAnswer )
} else  if ( pcAnswer  ===  'papel'  &&  userAnswer  ===  'piedra'  ||  pcAnswer  ===  'tijera'  &&  userAnswer  ===  'papel'  ||  pcAnswer  ===  'piedra'  &&  userAnswer  ===  'tijera'  ) {
    console . log ( 'Gana la PC porque:' )
    console . log ( 'Usuario:'  +  userAnswer )
    console . log ( 'PC:'  +  pcAnswer )
} else  if ( userAnswer  ===  'papel'  &&  pcAnswer  ===  'piedra'  ||  userAnswer  ===  'tijera'  &&  pcAnswer  ===  'papel'  ||  userAnswer  ===  'piedra'  &&  pcAnswer  ===  'tijera' ) {
    console . log ( 'Gana la User porque:' )
    console . log ( 'Usuario:'  +  userAnswer )
    console . log ( 'PC:'  +  pcAnswer )
} else {
    console . error ( ' Datos incorrectos, intentalo de nuevo ' )
    console . error ( ' Ingresa bien tus opciones ' )
} 
    
