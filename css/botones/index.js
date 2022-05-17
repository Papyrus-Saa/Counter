const incrementar = document.getElementById('incrementar')
const decrementar = document.getElementById('decrementar')
const resetear = document.getElementById('resetear')
const numero = document.getElementById('numero')

let a = 0;

  incrementar.addEventListener('click', ()=>{
   a++;
   numero.innerHTML = a;
   if(a > 0){
     numero.style.color='green'
   }
   
 })
  decrementar.addEventListener('click', ()=>{
   a--;
   numero.innerHTML = a;
   if(a < 0){
    numero.style.color='red'
  }
             
 })
  resetear.addEventListener('click', ()=>{
   a = 0;
   numero.innerHTML = a;
   numero.style.color=''
 })



