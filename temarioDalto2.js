// METODOS DE CADENAS-----------------------------

let cadena = "esta es una cadena para prueba prueba";
let cadena2 = "prueba";
// buscar en cadenas y devuelve un valor
resultado = cadena.concat(cadena2); // concatena cadenas
resultado1 = cadena.startsWith(cadena2); // si la 1er cadena empieza con la 2da cadena lanza true si no, false
resultado2 = cadena.endsWith(cadena2); // lo mismo pero compara el final de las cadenas
resultado3 = cadena.includes(cadena2); // busca cadenas en cualquier parte de otra cadena
resultado4 = cadena.indexOf(cadena2); // devuelve la posicion del primer valor de la busqueda, si devuelve -1 no está
resultado5 = cadena.lastIndexOf(cadena2); // devuelve la posicion del ultimo valor de la busqueda si se repite, si devuelve -1 no está
// modificar cadenas
resultado6 = cadena.padStart(40,"dd"); // completa la cadena al principio con los valores necesarios para que sea igual al # de caracteres [#decaracteres, caracter]
resultado7 = cadena.padEnd(40,"dd"); //lo mismo pero al final
resultado8 = cadena.repeat(2); //repite la cdena el # de veces deseadas


document.write(
  resultado + "<br>"
+ resultado1 + "<br>" 
+ resultado2+ "<br>" 
+ resultado3+ "<br>" 
+ resultado4+ "<br>" 
+ resultado5+ "<br>" 
+ resultado6+ "<br>" 
+ resultado7+ "<br><br>" 
+ resultado8);