Programa tarjeta de crédito:
Pido al usuario su número de tarjeta a través de un prompt.
Utilizo un if para saber si el campo está vacío o los caracteres no son números, si es así no es válido.
Creo un array vacío para ingresar el número de tarjeta en orden inverso y através de un for recorro la variable de atrás hacia adelante. 
Saco uno a uno los números en orden inverso con charAt y transformo a number con parseInt.
Ingreso los números en el array en orden inverso utilizando push.
Recorro la variable con un for para encontrar los números en posiciones pares y multiplico por 2 cada uno (par).
Verifico si cada par ya multiplicado es mayor o igual a 10 con un if, si lo es, sumo entre sí los dígitos de cada número.
Modifico mi array dejando pares e impares adentro.
Utilizo for para sumar todos los números al interior del array.
Si el residuo del total dividido 10 es igual a 0 la tarjeta es válida, de lo contrario no lo es.