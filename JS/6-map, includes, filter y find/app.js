const array = [1,2,3,4,5,5];

// el map es como un for pero mas sencillo,  se recorre por cada elemtento del array, e en este caso seria el elemento en cada vuelta 
// cualquier cambio que se haga a los elementos adentro de map, no cambia el array original
array.map((numero)=>{//le puse numero pero podes ponerle cualquier nombre, 
console.log(numero)
})
// busca en el array si existe algo igual, devuelve true y false 
const incluye = array.includes(1)
console.log(incluye)

// filter devulve un array, busca considencias 

const filtro = array.filter((e)=> e==5)

console.log(filtro)

// find busca el primer elemento y lo devuelve

const find = array.find((e)=> e===5)
console.log(find)   