// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [] // crear un array para almacenar nombres
let conteo = 0;
let numeroRandom = 0;
let consulta = 0;
let nombreDeAmigo = '';


function ganador(elemento, texto){// funciond de texto para elementos 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function listado(){// funcion de listado dimanico
    let nombre = document.getElementById('listaAmigos');
    let nuevoItem = document.createElement('li');// Crea un elemento li
    nuevoItem.textContent = nombreDeAmigo;// Añade texto al nuevo item
    nombre.appendChild(nuevoItem);// Agrega el nuevo item a la lista
    return;
}

function limpiarIndex(){// Limpiar el campo de entrada:
    document.querySelector('#amigo').value = '';
    return;
}    

function agregarAmigo(){// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
    nombreDeAmigo = (document.getElementById('amigo').value);// Capturar el valor del campo de entrada:
    
    console.log("tipo de variable: " + typeof(nombreDeAmigo));// consulta el tipo de variable
    console.log("nombre de amigo añadido: " + nombreDeAmigo);// verificar el nombre agrado
   
   if (nombreDeAmigo == ''){// Validar que haya amigos disponibles:
        alert('Por favor, inserte un nombre.')// Validar la entrada

     } else {
            amigos.push(nombreDeAmigo);// Actualizar el array de amigos:
            console.log("lista: " + amigos);// lista de agragados
            
            conteo ++;// contador para traer el dato de la lista
            console.log("longitud vector: " + conteo);// visualizacion de la domesion de vector de lista
            
            limpiarIndex();// limpiar el campo de ingreso de dato
            listado();// agragar dato al listado dimanico 
            
        }
    return; 
}

function sortearAmigo(){// funcion de sorteo de amigo aplicado al boton
     if (amigos == ''){
        alert('¡La lista de amigos está vacía!');// alerta de dato vacio

    } else {
        numeroRandom = Math.floor(Math.random()*conteo)+1;//Generar un índice aleatorio:
        console.log("ramdom: " + numeroRandom);// viasualizacion de numero ramdom
        console.log("longitud vector: " + conteo);

        consulta = numeroRandom -1;// operacion de para posicion del vector inicio "0"
        console.log("numero de ganador: " + consulta); // viasualizacion del numero ganador 
        console.log("nombre ganador: " + amigos[consulta]);//Obtener el nombre sorteado:
    }
    return;      
}