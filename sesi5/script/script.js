var buah = ['apel', 'anggur','semangka', 'rambutan', 'durian'];

var listBuah = document.getElementById('buah');

for (i=0; i < buah.length; i++) {
    var buahItem = document.createElement('li');
    buahItem.classList.add('buah');
    buahItem.textContent = buah[i];
    listBuah.appendChild(buahItem);
}

var search = document.getElementById('filter');
search.addEventListener('keyup', filterBuah);

function filterBuah() {
    var list = document.getElementsByClassName('buah');
    for (j=0; j < list.length; j++) {
        var cari = search.value;
        var daftarBuah = list[j].textContent;
        if (daftarBuah.indexOf(cari) != -1) {
            list[j].style.display = 'block';
        }
        else {
            list[j].style.display = 'none';
        }
    }
}