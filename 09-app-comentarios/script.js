const comments = []

const listelements = document.getElementsByTagName('li')

const inputComment = document.getElementById('inputComentario')
const btnComment = document.getElementsByTagName('button')[0]
const bxComment = document.getElementsByClassName('comentarios')[0]

let i = 1

let comentar = (event) => {
    event.preventDefault() //solo se usa en formularios para evitar que se ejecute la accion por defecto (reload)
   
    // 1 creamos instancia date y guardarla en variable
    const fecha = new Date();
    // 2 ejecutamos metodo toDateString para tener elformato
    const hoy = fecha.toDateString()

    // 3 creamos elobjeto con los datos pre hechos 
    const commentario = {
        date: hoy,
        content: inputComment.value,
        id: i++,
        user: 'Jonathan'
    }
    
    // 4 aniadimos la info al array
    comments.push(commentario)

    //6 llamamos la funcion para imprimir
    printComment(comments)

    //limpiamos el cuadrito
    inputComment.value = ""
/*     console.log(inputComment.value)
    bxComment.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value = '' */
}

//5 creamos la funcion que imprime la lista (comentarios)

//array.for each es un especie de for especializado para recorrer toda al alista
let printComment = (array) => {
    array.forEach(item => {
        //desestructuramos (no recuerdo pq)
        const {date, content, user} = item
        console.log(content, date, user)

        bxComment.innerHTML = `<li>${content} User: ${user} fecha: ${date}</li>`
    });
}

// INVESTIGAR for each
// Investigar document.CrateElement

btnComment.addEventListener('click',comentar)