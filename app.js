const listelements = document.getElementsByTagName("li");
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const bxComment = document.getElementById("listaComentarios");

//creo un array vacio para almacenar los comentarios
const comentarios = [];
let idComentarios = 0;
let cantidadSeccionesComentarios = 0;

let comentar = () => {
  //Creamos la instancia date
  const date = new Date();
  //Deconstruimos para tener a la mano los datos
  const [day, month, year, hour, minutes, seconds] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    //To string + pad start es para que cuando retorne un solo digito de muestre un 0 a la izq. para mantener el formato 24 horas.
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ];

  event.preventDefault(); //solo se usa en formularios para evitar que se ejecute la accion por defecto (reload)

  //para prevenir comentar vacio
  if (inputComment.value === "") {
    alert("Por favor, no dejes campos vacios (ㅅ´ ˘ `)");
  } else {
    console.log(inputComment.value);
    comentarios.push(
      `<div class="comentario" id="${idComentarios++}">${
        inputComment.value
      } <br><i>Comentado el ${day}-${
        month + 1
      }-${year} a las ${hour}:${minutes}:${seconds}</i> <span class="borrar">🗑️</span></div>`
    );
    bxComment.innerHTML = comentarios.join("");
    inputComment.value = "";
  }
};

//Funcion para eliminar el ultimo elemento del array que almacena los comentarios.
let eliminarCom = (event) => {
  event.preventDefault();
  comentarios.pop();
  bxComment.innerHTML = comentarios.join("");
};

//creo listeners para los botones
btnComment.addEventListener("click", comentar);
