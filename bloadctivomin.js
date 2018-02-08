function ventanaSecundaria(){
 t=12;
 timer=window.setInterval("contador()",1000);
   pop=window.open("http://ouo.io/Gz2ggF","ventana1","width=480,height=325,scrollbars=0")
}
function contador(){
  if(pop!=null){
    if(pop.closed){
      swal("No Cierres La Publicidad!", "Este sitio se mantiene gracias a eso!", "error");
      clearInterval(timer);
      t='.time.';
      document.getElementById("contador").value="Mostrar enlaces";
      return
    }
    if(pop.frames.length!=3){ 
   t=t-1;
   if(t<=0){
     clearInterval(timer);
 document.getElementById("hide").style.display="";
 t="Enlaces"}document.getElementById("contador").value=t;
 return false
 }}}
