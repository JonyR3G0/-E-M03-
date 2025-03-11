/* Flow del programa

0 Verificamos si se ha cargado el contenido del DOM
1 Capturamos elementos del DOM
2 Iniciamos los event listeners
3 Arrays
4 Objeto utils para la generacion de los strings y numero aleatorio

*/

// 0 Esperamos que se carguen los elementos del DOM antes de ejecutar el codigo
document.addEventListener("DOMContentLoaded", main())

// Main code
function main () {
    
    // 1 Capturamos elementos del DOM
    const charLength = document.querySelector("#charLength")
    const lengthRange = document.querySelector("#lengthRange")
    const passwordOutput = document.querySelector("#passwordOutput")
    const generateButton = document.querySelector("#generateButton")
    const copyButton = document.querySelector("#copyButton")
    
    // 🐛 Fix del primer bug: Cuando cargabas la pagina aparecia en 0 el charLenght (aunque el minimo esta en 5)
    // hasta que movieras la barra. asi que leemos el contenido de lenghtRange la primera vez.
    charLength.textContent = lengthRange.value
    
    // 3 Arrays
    const kana = [
        'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り',
        'る', 'れ', 'ろ', 'わ', 'を', 'ん',
        'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト',
        'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
        'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'
    ];
    const simbolos = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];
    const letras = [...'abcdefghijklmnopqrstuvwxyz'];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // 4 crear un objeto utils para hacer las funciones que generen los numeros aleatorios
    const utils = {
        //un utils es un scafold (distribucion de carpetas) generalmente utils metemos funciones que tenienen tareas muy especificas, y pequenitas.
        generateRandomBetween: function (min, max) {
    
            //el metodo Math.random, genera un numero decimal aleatorio del 0 - 1, tambien si hacemos un Math.random()*numero devuelve en ese rango.
            //metodo Math.round redondea todo lo que este entre parentesis, hay tambien un floor que devuelve hacia abajo
            return Math.floor(Math.random() * (max - min + 1) + min)
        },
        getCharsFromArray: function (array, num) {
            //un string vacio que se va a untrir del return
            let chars = ""
            //Da vueltas la cantidad de veces num
            for (let i = 0; i < num; i++) {
                //numero random lo guardamos
                const randomNumber = this.generateRandomBetween(0, array.length - 1)
                //vamos formando el char seleccionando la posicion del array dictado por el numero variable. (-1 para no retornar null)
                if (typeof array[randomNumber] === "string") {
                    randomNumber % 2 === 0 ? chars += array[randomNumber].toLowerCase() : chars += array[randomNumber].toUpperCase()
                    //OPERADOR TERNARIO es una condicional, es un if else condensado concretamente a que pasa si, y que pasa si no. es un if else comprimido para economizar sintaxys
                }
                else {chars += array[randomNumber]}
            }
            return chars
        }
    }
    
    //3 evento y funcion del boton generate
    
    function generatePassword() {
    
        //4 capturando la configuracion de la pswrd
    
        //la capturamos para el ecosistema de esta variable, esta data ya la rescatamos al inicio del programa.
    
        //Es importante usar el metodo .value para que devuelva el valor, si no devuelve el tipo array que no es array.
        const passLength = lengthRange.value
    
    
        //solo necesito verificar si la psswrd cuando voy a generar, por eso solo revisamos aca.
        const includeNumbers = document.querySelector("#numbers").checked
        //.checked devuelve un booleano en este caso de estar checked y unchecked true, false.
        const includeSymbols = document.querySelector("#symbols").checked
    
        const includeKanas = document.querySelector("#kanas").checked
    
        console.log(passLength, includeNumbers, includeSymbols, includeKanas)
    
        // 7 guardar contra
        let tempPass = ''
        // numbers
        if (includeNumbers) {
            tempPass += utils.getCharsFromArray(numeros, utils.generateRandomBetween(3, passLength / 3))
        }
        if (includeSymbols) {
            tempPass += utils.getCharsFromArray(simbolos, utils.generateRandomBetween(3, passLength / 3))
        }
        if (includeKanas) {
            tempPass += utils.getCharsFromArray(kana, utils.generateRandomBetween(3, passLength / 3))
        }
        //agregamos letras
        //8 aniadir letras a temp Passs
        tempPass += utils.getCharsFromArray(letras, passLength - tempPass.length)
    
        //9 randomizamos los que ya tenemos 
        console.log(tempPass.split('').sort(() => Math.random() - 0.5).join(''))
        //metodos que vamos a usar el string --> split(),(arrays) sort() join
    
        //.split() separa todos los elementos basandose en un marcador especificados, y lo retorna en un array
    
        //.sort() ordena elementos, menores primero a mayores, comparando. recive un callback (un retorno de una funcion) en este caso estamos usando math.random para aleatorizar (y un -5) un numero entre -0.5 y 0.5 para manejar la posicion del sort
    
        //.join() pide un parametro igual al split como un separador, y crea un strign a partir de un array
    
        //imprimimos
        passwordOutput.value = tempPass.split('').sort(() => Math.random() - 0.5).join('')
    }
    
    function copyToClip() {
    
        console.log('holiwis')
        if (passwordOutput.value === '') return // si no hay mas de una linea se puede dejar la condicional sin llaves
        const psCopy = passwordOutput.value
        //api del clipboard
        navigator.clipboard.writeText(psCopy)
    
    }
    
    //2 Event listeners de el boton para generar pass, para copiar y la cantidad de caracteres
    generateButton.addEventListener("click", generatePassword)
    copyButton.addEventListener('click', copyToClip)
    lengthRange.addEventListener("input", function (e) {
        //pasamos el valor de la barra, que se setea en el html
        charLength.textContent = e.currentTarget.value
    })
}