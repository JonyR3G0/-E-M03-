//Este es un objeto literal, es mas facil de leer y mas intuitivo.
const carro = {

    marca: 'Toyota',
    modelo: 'Prius',
    year: '2018',
    //este es un metodo anidado en el mismo objeto
    mostrarInfo(){
        console.log(`El carro que selecciono es marca ${this.marca}, modelo ${this.modelo}, anio ${this.year}`)
    }

}

//Es intuitivo llamar el metodo desde el objeto
carro.mostrarInfo()

//Es similar a llamar caulquier propiedad del pobjeto
console.log(carro.marca)

//aca creo el objeto con el constructor object
const laptop = new Object()

//llamamos a la funcion y podemos agregar propiedades al objeto de manera dinamica
laptop.marca = 'Lenovo'
laptop.modelo = 'thinkpad'
laptop.anio = '2018'

console.log(`La laptop es de la marca ${laptop.marca}, modelo ${laptop.modelo}, anio ${laptop.anio}`)