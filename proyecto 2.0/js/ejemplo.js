class ejemplo{
    base(){
        let n1=0, resp, r=0,n2=0
        n1=parseInt(document.getElementById("a").value)
        resp=document.getElementById("resp")
        while (n1 > 0) {
            r = n1 % n2;
            n1 = Math.floor(n1 / n2);
            resp.innerHTML+=`${r}`
        }
    }
}
op=new ejemplo
function encontrarMaximo(arr) {
    if (arr.length === 0) {
      // Manejar el caso de un arreglo vacío según tus necesidades
      return undefined; // O cualquier otro valor que desees devolver
    }
  
    let maximo = arr[0]; // Suponemos que el primer elemento es el máximo inicialmente
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximo) {
        maximo = arr[i]; // Actualizamos el máximo si encontramos un valor mayor
      }
    }
  
    return maximo;
  }
  function n(){
     let numeros = document.getElementById("a").value,resp
     resp=document.getElementById("resp")
  let maximo = encontrarMaximo(numeros);
  resp.innerHTML=`${maximo}`
  }
 