let mesaj = document.querySelector("#msg");

function hesapla() {
    let yas = document.querySelector("#yas").value;
    let fiyat = document.querySelector("#fiyat").value;

    let indirimliFiyat = 0;

    yas >= 65 && (indirimliFiyat = fiyat * 0.5);
    yas < 65 && (indirimliFiyat = fiyat * 0.9);
    mesaj.innerHTML = `indirimli fiyat: ${indirimliFiyat}`;

}