
let message = document.querySelector("#mesaj");
function gonder(){
  let name =  document.querySelector("#ad").value;
  let job =  document.querySelector("#meslek").value;
  message.classList.remove("dnone");

  if(!name || !job){
    message.innerHTML="Lutfen formu doldurunuz!";
  }else{
    message.innerHTML=`Sayin ${job} ${name}, Hosgeldiniz :)`
  }

  function sil(){
    message.classList.remove("mesaj");
    message.classList.add("dnone");
  }
}