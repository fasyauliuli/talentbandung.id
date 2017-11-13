$.get('https://ariona.net/talentbandung/', function(data, status) {
    var listTaman = $('#list-taman');

    for (i=0; i < data.length; i++){
        console.log(data);
        var tamanItem = '<li class="taman">' + '<img src=' + data[i].image.thumbnail + '>'
         + " " + data[i].nama + '</li>';
        listTaman.append(tamanItem);
    }

    var search = $('#filter');
    search.keyup(filterTaman);

    function filterTaman() {
        var list = $('.taman');
        for (var i=0; i < list.length; i++) {
            var daftarTaman = $(list[i]).text().toLowerCase();
            if (daftarTaman.indexOf(search.val().toLowerCase()) != -1) {
                $(list[i]).slideDown();
            }
            else {
                $(list[i]).slideUp();
            }
        }
    }
} );