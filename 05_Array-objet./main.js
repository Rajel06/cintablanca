<! DOCTYPE html >
< html  lang = " es " >
< cabeza >
    < meta  charset = " UTF-8 " >
    < título > Matriz y objeto </ título >
</ cabeza >
< cuerpo >



    < script  src = " ./main.js " > </ script >
</ cuerpo >
</ html > 
 63  05_Array-Object / main.js 
@@ -0,0 +1,63 @@
// alerta ('Hola')
// Arreglos nos permite tener diferentes valores diferentes
// 0 1 2 3 4        
var  colores  =  [ 'negro' ,  'rojo' ,  'rosa' ,  'azul' ,  'amarillo' ]

// Viejita
colores [ 5 ]  =  'verde'
// colores [2] = 'blanco'


// console.log (colores)
// console.log (colores [2])

// metodo de arreglos

//. push () -> agrega un nuevo valor al final

colores . push ( 'gris' ,  'dasdfasf' )

// console.log (colores)

// .pop () -> borra nuesto ultimo valor

colores . pop ( )

// console.log (colores)

// .splice -> borra elementos específicos

// primer numero es la posicion   
// segundp numero son los elemtos a borrar         
colores . empalme ( 4 ,  1 )
// truquitp el 3 elemento remplaza el que se borro
colores . empalme ( 1 ,  1 ,  'violoeta' )
// console.log (colores)

// Objetos

var  persona  =  {

    nombre : 'Ricardo' ,
    cel : '45645647894' ,
    direccion : 'CDMX' ,
    correo electrónico : 'kelebra@devf.mx' ,
    contraseña : '123456' ,
    musica : [ 'rock' ,  'corridos tumbados' ,  'cumbia' ,  'pop' ,  'k-pop' ,  'trap' ] ,
    peliculas : {
        accion : [ 'R&F' ,  'MI' ,  'El trasportador' ] ,
        survivalHorror : [ 'Chuky' ,  'blair wich' ,  'El exorsista' ] ,
        comedia : [ 'Este es mi hijo' , 'película de terror' ,  'clic'  ] ,
        romanticas : {
            comedias Románticas : [ 'La propuesta' ,  'Zohan' ] ,
            tristeza : [ 'Titanic' ,  'Robando a la novia' ,  'Cartas a Jhon' ]
        }
    }

}

consola . log ( persona )
consola . log ( persona . nombre )
consola . log ( persona . contraseña )
consola . log ( persona . musica [ 1 ] )
consola . log ( persona . peliculas . romanticas . comediasRomanticas [ 1 ] )
 8  05_Array-Object / persona.json 
@@ -0,0 +1,8 @@
{
    " nombre " : " Ricardo " ,
   " cel " : " 45645647894 " ,
   " direccion " : " CDMX " ,
    " correo electrónico " : " kelebra@devf.mx " ,
    " contraseña " : " 123456 " ,
    " edad " : 22
}