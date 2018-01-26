function isValidCard(card) {
  var answer = prompt('Ingrese su número de tarjeta'); // pidiendo al usuario su número de tarjeta
  if (answer == 0 || isNaN(answer)) { // si el campo está vacío o los caracteres no son números no es válido
    alert('Caracter inválido');
  }
  var arr = []; // creando array vacío para ingresar los números en orden inverso
  for (var i = answer.length - 1; i >= 0; i--) { // recorriendo la variable de atrás hacia adelante
    var reverse = parseInt(answer.charAt(i)); // sacando uno a uno los números en orden inverso y transformando a number
    arr.push(reverse); // ingresando los números en el array en orden inverso
  }

  for (var k = 1; k < arr.length; k += 2) { // recorriendo la variable para encontrar los números en posiciones pares
    var par = arr[k] * 2; // multiplicando por 2 los pares
    if (par >= 10) { // verificando si el número es mayor o igual a 10
      var sum = par - 9; // sumando entre sí cada número mayor o igual a 10
      arr[k] = sum; // modificando la variable con los nuevos números pares
    }	else {
      arr[k] = par; // dejando pares e impares en la misma variable
    }
    var total = 0; // nueva variable para guardar la suma de todos los dígitos
    for (var j = 0; j < arr.length; j++) { // recorriendo la variable para sumar todos los dígitos
      total += arr[j]; // sumando todos los dígitos
    }
  }
  if (total % 10 === 0) { // si el residuo del total dividido 10 es igual a 0
    alert('Tarjeta válida'); // la tarjeta es válida 
  } else { // si no
    alert('Tarjeta inválida'); // tarjeta inválida
  }
}
isValidCard();


