// getElementById busca el id en nuestro archivo HTML
let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')
let pregunta = document.getElementById('pregunta')
let respuesta = document.getElementById('respuesta')
let botton = document.getElementById('botton')

console.log(titulo)
console.log(texto)
// console.log(pregunta)
// console.log(titulo)
// console.log(texto)

const cambio = () => {

//Pinta en la etiqueta el valor dado
titulo.innerHTML = 'Titulo cambiado desde JS'
texto.innerHTML = 'Texto cambiado desde JS'


// .value es el valor del input, en otras palabras lo que el usuario ingresa
    console.log(pregunta.value)
    respuesta.innerHTML = pregunta.value

}
// addEventListener escucha los eventos de HTML
//El primer parametro es el evento
//Segundo parameto es la funcion que queremos ejecutar

boton.addEventListener('click', cambio)
