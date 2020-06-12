let titulo = document.getElementById('titulo')
let Texto = document.getElementById('texto')
let button = document.getElementById('button')
let Nombre = document.getElementById('Nombre')
let Direccion = document.getElementById('Direccion')
let telefono = document.getElementById('Telefono')
let piña = document.getElementById("piña")

let Rnombre= document.getElementById("Rnombre")
let Rdireccion = document.getElementById("Rdireccion")
let Rtelefono = document.getElementById("Rtelefono")
let Rpiña = document.getElementById("Rpiña")



       



const cambio =() =>{
 Rnombre.innerHTML = Nombre.value 
 Rdireccion.innerHTML=Direccion.value
 Rtelefono.innerHTML=telefono.value
 Rpiña.innerHTML=piña.value
}

botton.addEventListener('click', cambio)

