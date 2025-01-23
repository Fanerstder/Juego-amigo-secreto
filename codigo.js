// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigos = []; // almacenamos los nombres.

//Funcion para agregar amigo
function agregarAmigo() {
    //variables
    let inputAmigo = document.getElementById("amigo"); //
    let amigo = inputAmigo.value.toLowerCase().trim(); // capturamos la caadena de texto del input, lo convertimos todo a minúscula y eliminamos los espacios.
    let listaAmigos = document.getElementById("listaAmigos");
    let itemListaAmigo = document.createElement("li");

    // Realizamos validaciones en campo texto,si esta vacio no retorne y envia una alerta.
    if (amigo !== "" ) {
        if (!amigos.includes(amigo)) {
            amigos.push(amigo); // Agregamos el nombre al array.
            itemListaAmigo.innerHTML = amigo[0].toUpperCase() + amigo.slice(1); //mostramos el nombre con la primera letra mayúscula y las demas en minúscula en lista.
            listaAmigos.appendChild(itemListaAmigo); // Agregamos un nodo.
            inputAmigo.value = ""; // Limpiamos el campo de texto.
            return;
        } else {
            //Se envia un mensaje de alerta que se encuentra el nombre registrado. 
           //se limpia el campo de texto.
            alert(`El nombre ${amigo} ya se encuentra en la lista.`);
            inputAmigo.value = "";
            return;
        }
    }else{
        alert("Por favor, Ingrese un nombre!");
        return;
    }
}

// Funcion sortear amigos
function sortearAmigo() {
    let resultados = document.getElementById("resultado");
    let itemResultados = document.createElement("li");
    let ganador = Math.floor(Math.random() * amigos.length); // realizamos el sorteo con esta funcion.
    
     // Validamos en la lista los nombres que estan guardados.
    if (amigos.length === 0) {
        alert("No hay nombres de amigos para realizar el sorteo.");
        return;
    }
    itemResultados.innerHTML = amigos[ganador].toUpperCase();
    resultados.appendChild(itemResultados);
    return;
}

