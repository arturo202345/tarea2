class ejemplo{
    base(){
        let n1=0, resp, r=0,n2=0
        n1=parseInt(document.getElementById("a").value)
        resp=document.getElementById("resp")
        while (n1 > 0) {
            // Obtén el residuo al dividir por 2
            r = n1 % n2;
            // Agrega el residuo al principio del resultado
            // Divide el número por 2 para la siguiente iteración
            n1 = Math.floor(n1 / n2);
            resp.innerHTML+=`${r}`
        }
    }
}
op=new ejemplo
