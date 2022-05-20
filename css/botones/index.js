const incrementar = document.getElementById('incrementar')
const decrementar = document.getElementById('decrementar')
const resetear = document.getElementById('resetear')
const numero = document.getElementById('numero')


let a = 0;

  incrementar.addEventListener('click', ()=>{
   a++;
   numero.innerHTML = a;
   if(a >= 1){
     numero.style.color='green'
      }else if(a == 0){
        numero.style.color=''
      }
   })

  decrementar.addEventListener('click', ()=>{
   a--;
   numero.innerHTML = a;
   if(a <= -1){
    numero.style.color='red'
    }else if(a == 0){
      numero.style.color=''
    }
  })

  resetear.addEventListener('click', ()=>{
   a = 0;
   numero.innerText = a;
   numero.style.color='' 
 })

 