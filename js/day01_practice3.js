function ustAl(){
    const tabanEl=document.querySelector("#taban").value;
    const ustEl=document.querySelector("#ust").value;
    const sonucEl=document.querySelector(".sonuc")
    const sonuc=tabanEl**ustEl;

    sonucEl.classList.add('ekle')

    sonucEl.innerHTML=`<b>${tabanEl} <sup>${ustEl}</sup> = ${sonuc}</b>`
}