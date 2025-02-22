// para elementos de estilo escogemos constantes para evitar soobre escribir
const parrafo = document.getElementById('txt')

let cambiarTXT = () => {
    parrafo.innerText = "adios mundo 😒"
    parrafo.style.color = 'blue'
    parrafo.style.fontSize = '3rem'
    parrafo.style.fontStyle = 'italic'
}

// captura de elementos por tag

const listelements = document.getElementsByTagName('li')

const inputComment = document.getElementById('inputComentario')
const btnComment = document.getElementsByTagName('button')[1]
const bxComment = document.getElementsByClassName('comentarios')[0]

let comentar = (event) => {
    event.preventDefault() //solo se usa en formularios para evitar que se ejecute la accion por defecto (reload)
    console.log(inputComment.value)
    bxComment.innerHTML += `<li>${inputComment.value}</li>`
    inputComment.value = ''
}

btnComment.addEventListener('click',comentar)