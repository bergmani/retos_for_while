//------------COLA DEL BANCO---------------

//Parte 1: Hay tres personas esperando en el banco. Sus nombres, en orden, son Sofía, David y Juan. Crea una matriz que tenga estos tres nombres en orden.
const filaBanco = ['Sofía', 'David', 'Juan'];
console.log(filaBanco);

//Parte 2: Se agregan dos personas más al final de la fila: Sara y Agustín. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?
let dosMas = filaBanco.push('Sara', 'Agustín');
let llamadaCajero = filaBanco.shift();
console.log(filaBanco);

//Parte 3: Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila ¿Cómo es la fila?
let guardoLugar = filaBanco.splice(1,0,'Renata');
let nuevoEnLaFila = filaBanco.push('Elena');
console.log(filaBanco);