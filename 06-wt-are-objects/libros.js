// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

const libro = {

    titulo: "A través del Atlántico en globo" ,
    autor: "Emilio Salgari" ,
    anio: "1942" ,
    estado: "Prestado",
    capitulos: [
        'Capítulo 1: Una Sorpresa de la Policía Canadiense',
        'Capítulo 2: El Feniano',
        'Capítulo 3: El Globo de Mister Kelly',
        'Capítulo 4: La Pesca del Bacalao',
        'Capítulo 5: Las Grandes Ascensiones',
        'Capítulo 6: Arrastrados Hacia El Ecuador',
        'Capítulo 7: El Huracán',
        'Capítulo 8: El Asalto de los Tiburones',
        'Capítulo 9: El Náufrago',
        'Capítulo 10: Las Canarias',
        'Capítulo 11: Las Islas de Bissagos',
        ],
    describirLibro: function (){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado} con ${this.capitulos.length} capitulos.`
    },
    verListaCapitulos: function () {
        return this.capitulos
    },
    agregarCapitulo: function (){
        this.capitulos.push(prompt('Aniadir nombre de capitulo'))
    },
    eliminarCapitulo: function (){
        this.capitulos.pop()
    }

}

// document.write(`<h1>Info libro</h1><p>${libro.describirLibro()}</p>`)
//super toxico el document.write, ojo.

const cajaTexto = document.getElementById("infoLibro")

function imprimir () {
    cajaTexto.innerHTML = `${libro.describirLibro()} <br><h2>Lista de capitulos:</h2></br> <br> ${libro.verListaCapitulos()} </br>`
}

console.log(libro.describirLibro())