class ejercicios
arregloacadena(convertir){
    let variable=["12","13","14","15"];
console.log(variable);
let via = variable.join(" ");
console.log(via);
}

isbuscaArreglo(arreglo,buscar){
    let pos = 0, enc = false
    while (pos < arreglo.length && enc == false) {
        if (arreglo[pos] == buscar) {
            enc = true
        } else {
            pos++
        }
    }
    if (enc == true) {
        return pos
    } else {
        return -1
    }
}
Insertararreglo(){
let d = '16,43,23,56';
let e = d.split(','); 
console.log(e);
}


