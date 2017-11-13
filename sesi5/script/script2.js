var buah = ['apel', 'anggur','semangka', 'rambutan', 'durian'];
var listBuah = $('#buah');

for (i=0; i < buah.length; i++){
    //var buahItem = $('<li></li>').addClass('buah').text(buah[i]);
    //$('#buah').append(buahItem);
    var buahItem = '<li class="buah">'+ buah[i] +'</li>';
    listBuah.append(buahItem);
}

var search = $('#filter');
search.keyup(filterBuah);

function filterBuah() {
    var list = $('.buah');
    for (var j=0; j < list.length; j++) {
        var daftarBuah = $(list[j]).text();
        if (daftarBuah.indexOf(search.val()) != -1) {
            $(list[j]).slideDown();
        }
        else {
            $(list[j]).slideUp();
        }
    }
}

/*var search = $('#filter').val();
var buahItem = $('buah');

buahItem.each(function(){
    var buah = $(this)
    var namaBuah = buah.text();

    if(namaBuah.indexOf(search) != 1) {
        buah.slideDown();
    }
    else {
        buah.slideUp();
    }
});*/