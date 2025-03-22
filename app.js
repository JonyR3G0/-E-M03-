// Verificamos que ya haya cargado el DOM de manera adecuada
document.addEventListener("DOMContentLoaded", (mainFunction) => {
  const listelements = document.getElementsByTagName("li");
  const inputComment = document.querySelectorAll(".inputComentario");
  const btnComments = document.querySelectorAll(".commentButton");
  const bxComment = document.querySelectorAll(".listaComentarios");

  // Array para almacenar los comentarios
  let comentarios = [];
  let commentIdCounter = 0;

  function comentar(event) {
    // Evitamos que se reinice la pagina
    event.preventDefault();

    // Obtener el índice del botón presionado
    const indice = Array.from(btnComments).indexOf(event.target);

    // Validar el índice
    if (indice === -1) return;

    // Obtener el sectionId de la caja de comentarios correspondiente
    const sectionId = bxComment[indice].getAttribute("seccion-id");

    // Evitar comentarios vacíos
    if (inputComment[indice].value.trim() === "") {
      alert("Por favor, no dejes campos vacíos (ㅅ´ ˘ `)");
      return;
    }

    // Crear la fecha formateada
    const date = new Date();
    const fechaConFormato = `Comentado el ${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} a las ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    // Crear el objeto comentario
    const nuevoComentario = {
      id: commentIdCounter++,
      sectionId: sectionId,
      content: inputComment[indice].value,
      date: fechaConFormato,
    };

    // Agregar el comentario al array
    comentarios.push(nuevoComentario);

    // Renderizar los comentarios de la sección actual
    renderComments(sectionId, indice);

    // Limpiar el input
    inputComment[indice].value = "";
  }

  function renderComments(sectionId, indice) {
    // Filtrar comentarios por sección
    const comentariosFiltrados = comentarios.filter(
      (c) => c.sectionId === sectionId
    );

    // Renderizar comentarios
    bxComment[indice].innerHTML = comentariosFiltrados
      .map(
        (com) =>
          `<div class="comentario" data-id="${com.id}">
         ${com.content} <br>
         <i>${com.date}</i> <span class="borrar" data-id="${com.id}">🗑️</span>
       </div>`
      )
      .join("");

    // Agregar evento a los botones de eliminar
    document.querySelectorAll(".borrar").forEach((boton) => {
      boton.addEventListener("click", eliminar);
    });
  }

  function eliminar(event) {
    // Obtener el ID del comentario a eliminar
    const idABorrar = Number(event.target.getAttribute("data-id"));

    // Filtrar comentarios eliminando el que coincide con el ID
    comentarios = comentarios.filter((com) => com.id !== idABorrar);

    // Obtener el sectionId correctamente
    const sectionId = event.target
      .closest(".listaComentarios")
      .getAttribute("seccion-id");

    // Obtener el índice del `bxComment` correspondiente
    const indice = Array.from(bxComment).findIndex(
      (box) => box.getAttribute("seccion-id") === sectionId
    );

    // Renderizar nuevamente la sección
    if (indice !== -1) {
      renderComments(sectionId, indice);
    }
  }

  // Asignar evento a los botones de comentar
  btnComments.forEach((boton) => {
    boton.addEventListener("click", comentar);
  });
});