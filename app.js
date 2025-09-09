// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] //crear un array para almacenar nombres
let conteo = 0;
let numeroRandom = 0;
let consulta = 0;
let nombreDeAmigo = '';


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Limpiar el campo de entrada:
function limpiarIndex(){
    document.querySelector('#amigo').value = '';
    return;
}

//function limpiarLista(){

//    lista.innerHTML = "";
//    return;

//}


// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
 
// Capturar el valor del campo de entrada:
    nombreDeAmigo = (document.getElementById('amigo').value);

    
    console.log("tipo de variable: " + typeof(nombreDeAmigo));
    console.log("nombre de amigo añadido: " + nombreDeAmigo);
   
   if (nombreDeAmigo == ''){

// Validar la entrada
        alert('Por favor, inserte un nombre.')

     } else {

// Actualizar el array de amigos:
            amigos.push(nombreDeAmigo);
            console.log("lista: " + amigos);
            
            conteo ++;
            console.log("longitud vector: " + conteo);
            limpiarIndex();
        
            return;

        } 

}


function sortearAmigo(){

     if (amigos == ''){
        alert('¡La lista de amigos está vacía!');

    } else {

        numeroRandom = Math.floor(Math.random()*conteo)+1;
        console.log("ramdom: " + numeroRandom);
        console.log("longitud vector: " + conteo);
        

        consulta = numeroRandom -1;
        console.log("numero de ganador: " + consulta);
        console.log("nombre ganador: " + amigos[consulta]);
        
       // limpiarLista();

    }

       
}