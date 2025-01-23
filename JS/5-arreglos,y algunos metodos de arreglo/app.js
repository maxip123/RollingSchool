// array sin datos al comienzo
const list=[];

// array sin datos al comienzo
const list2=[1,2,3];


// muestra la cantidad de elementos del array
console.log(list2.length)
//agregar un elemento al comienzo del array
list2.unshift(6)
//agregar un elemento al final del array
list2.push(20)
//splice sirve para agregar o eliminar elementos de una posicion especifica , la primera es donde se desea agergar y la segunda que se borra, y en el tercerol o que se desea eliminar
list2.splice(2,0,24)

//list2.splice(1,1) con este codigo desde la posicion 1, borrariamos 1 elemento y como no ponemos la tercera , no se agregaria nada 
// una forma de modificar un elemento del array
list2[3] = 1
// Shift elimina el primer elemento del array 
list2.shift()
// Shift elimina el ultimo elemento del array 
list2.pop()
console.log(list2)