frutas = ["Banana"];
frutas.push("Manzana");

frutas.unshift("Pera");
console.log(frutas);




function vertical(cant){
    for (let i=0; i<=cant-1; i++){
        console.log("X",i);
    }
}
x = prompt("Dame el numero de X a imprimir");
vertical(x);



function horizontal(y){
    lista = [];
    for (let i=0; i<=y-1; i++){
        lista.push("X");
    }
    console.log(lista);
}
z = prompt("Dame el numero de X a imprimir");
horizontal(z);



