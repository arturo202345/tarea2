class tarea2{
    ejercicio1(num){
        let cont = 1, acu = 0, r = 0
        while (cont < num) {
            r = num % cont
            if (r == 0) {
                acu = acu + cont
            }
            cont = cont + 1
        }
        return acu
    }
    divisor(){
        debugger;
        let res,num = document.getElementById('numero').value;
        let resp = document.getElementById('resp');
        num = parseInt(num)
        res = this.ejercicio1(num)
        resp.innerHTML = res
    }
    ejercicio2() {
        let acud = 0
        let num = document.getElementById("numero").value
        let resp = document.getElementById("resp")
        num = parseInt(num)
        acud = this.ejercicio1(num)
        if (acud == num) {
            resp.innerHTML = `${num} es perfecto`
        } else {
            resp.innerHTML = `${num} no es perfecto`
        }
    }
    primo(num){
        let  a=1,r=[],i=0,e=0
        for(a=1; num > a; ++a){
            if(num % a == 0){
                r[i]=a
                e=r[i]+ e
                i=i+1
            }
        }
        return e
    }
    ejercicio3(){
        let  n=0,p=0,resp
        n=parseInt(document.getElementById("a").value)
        resp=document.getElementById("resp")
        p= this.primo(n)
            if(p+n == n+1){
                resp.innerHTML=`${n} si es un numero primo`
            }else{
                resp.innerHTML=`${n} no es un numero primo`
        }
    }
    Primos_Gemelos(num1, num2) {
        if (this.primo(num1) && this.primo(num2)) {
          let diferencia = num1 - num2;
          return diferencia === 2 || diferencia === -2;
        } else {
          return false;
        }
      }
    ejercicio4(){
        let num1 = parseInt(document.getElementById("a").value);
        let num2 = parseInt(document.getElementById("b").value);
        let resp = document.getElementById("resp");
    
        if (this.Primos_Gemelos(num1, num2)) {
          resp.innerHTML = `${num1} y ${num2} son primos gemelos`;
        } else {
          resp.innerHTML = `${num1} y ${num2} no son primos gemelos`;
        }
  
      }
    concantenar(a,b){
        let c=""
        c=a+" "+b
    return c
    }
    ejercicio5(){
        let ca="",t1="",t2="",resp
        t1=document.getElementById("a").value
        t2=document.getElementById("b").value
        resp=document.getElementById("resp")
            ca= this.concantenar(t1,t2)
            resp.innerHTML=`${ca}`
    }
    isbuscarCadena(cadena,buscado){
        let posAux = 0, posC = 0, posB = 0, lonC = 0, lonB = 0, enc = false
        lonC = cadena.length
        lonB = buscado.length
        while (posC < lonC && enc == false) {
            if (cadena[posC] == buscado[0]) {
                posAux = posC
                posB = 0
                while (posAux < lonC && posB < lonB && cadena[posAux] == buscado[posB]) {
                    posAux++
                    posB++
                }
                if (posB == lonB) {
                    enc = true
                } else {
                    posC = posC + 1
                }
            }
            else {
                posC = posC + 1
            }
        }
        if (enc == true) {
            return posC
        } else {
            return -1
        }
    }
    ejercicio6(){
        let pos
        let cadena = document.getElementById("a").value
        let buscado = document.getElementById("b").value
        let resp = document.getElementById("resp")
        //debugger;
        pos = this.isbuscarCadena(cadena,buscado)        
        if (pos >=0) {
            resp.innerHTML = `${buscado} se encontró en la posicion:${pos} de la cadena`
        } else {
            resp.innerHTML = `${buscado} No se encontró en la cadena`
        }
        
    }
    insertar(cadena, subcadena, posicion) { 
        let aux=""
            for (let i = 0; i < cadena.length; i++) { 
                if (i === posicion) { 
                    aux += " "+subcadena;         
                }
                aux += ""+cadena[i];     
            }
      
      
        return aux;
      }
    ejercicio7(){
        debugger;
        let cadena = document.getElementById("a").value;       
        let subcadena = document.getElementById("b").value;    
        let posicion = parseInt(document.getElementById("c").value); 
        let resp = document.getElementById("resp");
      
        if (!isNaN(posicion) && posicion >= 0 && posicion <= cadena.length) {  
            let aux = this.insertar(cadena, subcadena, posicion);
            resp.innerHTML = `Primer cadena: "${cadena}`
            resp.innerHTML += `<br>Segunda cadena: ${aux}`
        } else {
            resp.innerHTML = `Error intente nuevamente`
        }
        }
    deletesubcadena(palabra1, palabra2) {
            let res = palabra1.replace(palabra2, "");
            return res;
    }
    ejercicio8(){
        let palabra1 = document.getElementById("a").value;
        let palabra2 = document.getElementById("b").value;
        let resp = document.getElementById("resp");
        let resul = this.deletesubcadena(palabra1, palabra2);
        resp.innerHTML = resul;
    }
    ejercicio9(){
        let arreglo,resp
        let cadena = "";
        arreglo=document.getElementById("a").value
        arreglo=arreglo.split(";")
            for (let i = 0; i < arreglo.length; i++) {
                cadena += arreglo[i];
  
                if (i < arreglo.length - 1) {
                    cadena += " ";
                }
        resp=document.getElementById("resp")
        resp.innerHTML=`${cadena}`
        }
    }
    encontrarMaximo(arr) {
        if (arr.length === 0) {
          return undefined;
        }
      
        let maximo = arr[0];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > maximo) {
            maximo = arr[i]; 
          }
        }
      
        return maximo;
      }
    ejercicio10(){
        let numeros = document.getElementById("a").value,resp
        resp=document.getElementById("resp")
     let maximo = this.encontrarMaximo(numeros);
     resp.innerHTML=`${maximo}`
     }
    isbuscaArreglo(arreglo,buscado){
        let pos = 0, enc = false
        while (pos < arreglo.length && enc == false) {
            if (arreglo[pos] == buscado) {
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
    ejercicio11(){
        let arreglo = document.getElementById("a").value
        arreglo = arreglo.split(";")
        let buscado = document.getElementById("b").value
        let resp = document.getElementById("resp")
        let posi = this.isbuscaArreglo(arreglo, buscado)
        if (posi >=0) {
            resp.innerHTML = `${buscado} se encontró en la posicion:${posi} del arreglo`
        } else {
            resp.innerHTML = `${buscado} No se encontró en el arreglo`
        }
        
    }
    insert(arreglo1,arreglo2){
        arreglo1=arreglo1.split(";")
        arreglo2=arreglo2.split(";")
        for (let i = 0; i < arreglo2.length; i++) {
            arreglo1[arreglo1.length] = arreglo2[i];
    }
        return arreglo1
    }
    ejercicio12(){
        let resp,ret
        let a = document.getElementById("a").value
        let b = document.getElementById("b").value
        resp=document.getElementById("resp")
        ret= this.insert(a,b)
        resp.innerHTML=`${ret}`
    }
    eli(ar,l,pos){
        let a=ar.split(";"),i=0,o=[],p=0,u=0
    if(a[pos]==l){
        for(i=0;i<a.length;++i){
            if(i==pos){
                u=a[i]
            }else{
                console.log(i)
                o[p]= a[i]
                console.log(o[p])
                p=p+1
            }
           }
    }
    else{
          resp.innerHTML=`objetivo, no encontrado revise la posicion y la letra`
    }
        return o
    }
    ejercicio13(){
    let resp,ca,a,b,c
    a=document.getElementById("a").value
    b=document.getElementById("b").value
    c=document.getElementById("c").value
    resp=document.getElementById("resp")
    ca=this.eli(a,b,c)
    resp.innerHTML=`${ca}`
    }
    camb(c){
        let arreglo
        arreglo= c.split(", ")
        return c
    }
    ejercicio14(){
        let cadena,resp,arreglo1
        cadena=document.getElementById("a").value;
        resp=document.getElementById("resp")
        arreglo1=this.camb(cadena)
        resp.innerHTML=`[${arreglo1}]`
    }
    base(a,b){
        let r,resp
        resp=document.getElementById("resp")
        while (a > 0) {
                r = a % b;
                a = Math.floor(a / b);
                resp.innerHTML+=`${r}`
            }
    }
    ejercicio15(){
        let n1=0,n2=0,t
        n1=parseInt(document.getElementById("a").value)
        n2=parseInt(document.getElementById("b").value)
        this.base(n1,n2)
    }
    Base10abase16(valor) {
        let resultado = "";
    
        if (valor === 0) {
          resultado = "0";
        } else {
          valor = parseInt(valor, 10);
          const caracteresHexadecimales = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];
          while (valor > 0) {
            let digito = valor % 16;
            resultado = caracteresHexadecimales[digito] + resultado;
            valor = parseInt(valor / 16, 10);
          }
        }
    
        return resultado;
      }
    ejercicio17(){
        let valor = document.getElementById("a").value;
        let resultado = this.Base10abase16(valor);
        document.getElementById("resp").innerHTML = `Resultado Base 16: ${resultado}`;
      }
    Base2abase10(valor) {
        debugger;
        let resultado = "";
        let longitud = valor.length;
        for (let i = 0; i < longitud; i++) {
          resultado = resultado * 2 + parseInt(valor[i]);
        }
        return resultado;
      }
    ejercicio18(){
        let valor,valor2 
        valor = document.getElementById("a").value;
        let resultado = this.Base2abase10(valor);
        document.getElementById("resp").innerHTML = `Resultado Base 10: ${resultado}`;
      }
      binarioAOctal(numeroBinario) {
        let longitud = numeroBinario.length;
        let resultadoOctal = '';
        while (longitud % 3 !== 0) {
          numeroBinario = '0' + numeroBinario;
          longitud = numeroBinario.length;
        }
        for (let i = 0; i < longitud; i += 3) {
          let grupoBinario = numeroBinario.substring(i, i + 3);
          let grupoOctal = parseInt(grupoBinario, 2).toString(8);
          resultadoOctal += grupoOctal;
        }
        return resultadoOctal;
      }
    ejercicio19(){
        let numeroBinario = document.getElementById("a").value
        let numeroOctal,resp
        numeroOctal= this.binarioAOctal(numeroBinario)
        resp=document.getElementById("resp")
        resp.innerHTML=`Base 8: ${numeroOctal}`    
    }
    Base2abase16(valor) {
        let resultado = "";
        let longitud = valor.length;
    
        
        while (longitud % 4 !== 0) {
          valor = "0" + valor;
          longitud++;
        }
    
        for (let i = 0; i < longitud; i += 4) {
          let grupo_digitos = 0;
    
          for (let j = 0; j < 4; j++) {
            grupo_digitos = grupo_digitos * 2 + parseInt(valor[i + j]);
          }
    
          let letrasHexadecimales = "0123456789ABCDEF";
          let letra = letrasHexadecimales[grupo_digitos];
    
          resultado += letra;
        }
    
        return resultado;
      }
    ejercicio20(){
        let valor = document.getElementById("a").value;
        let resultado = this.Base2abase16(valor);
        document.getElementById("resp").innerHTML = `Resultado Base 16: ${resultado}`;
      }
}
op= new tarea2()