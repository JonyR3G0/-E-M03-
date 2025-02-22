const libro = {

    titulo: "A través del Atlántico en globo" ,
    autor: "Emilio Salgari" ,
    anio: "1942" ,
    estado: "rentado" ,
    capitulos: "20",
    describirLibro: function (){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`
    }

}

// document.write(`<h1>Info libro</h1><p>${libro.describirLibro()}</p>`)
//super toxico el document.write, ojo.

const cajaTexto = document.getElementById("infoLibro")

function imprimir () {
    cajaTexto.innerText = libro.describirLibro()
}

console.log(libro.describirLibro())