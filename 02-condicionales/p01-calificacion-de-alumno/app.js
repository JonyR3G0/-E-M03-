// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let calificacion = prompt(
  "Introduce tu calificación, usando un número del 1-100"
);

//Primero detecta si el numero esta dentro del rango

if (calificacion >= 0 && calificacion <= 100) {
  if (calificacion >= 90) {
    alert("🥇 Excelente ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧ 🥇");
    console.log(
      "La calificacion fue: ",
      calificacion,
      " por lo que adquiere el estatus Excelente"
    );
  } else if (calificacion >= 75) {
    alert("✅ Bien ✅");
    console.log(
      "La calificacion fue: ",
      calificacion,
      " por lo que adquiere el estatus Bien"
    );
  } else if (calificacion >= 60) {
    alert("🤏🏻 Suficiente 🤏🏻");
    console.log(
      "La calificacion fue: ",
      calificacion,
      " por lo que adquiere el estatus Suficiente"
    );
  } else if (calificacion < 60 && calificacion != null) {
    alert("❌ No aprueba (·•᷄‎ࡇ•᷅ ) ❌");
    console.log(
      "La calificacion fue: ",
      calificacion,
      " por lo que adquiere el estatus No aprueba"
    );
  } else if (calificacion == null) {
    let calificacion = alert(
      "No es buena idea cancelar (⊙ _ ⊙ ) Será mejor que recargues la página cuanto antes"
    );
  }
}
//Cualquier otro caso que no sea un numero del 1-100
else {
  alert("Introduce un número del 1 - 100");
}
