Vue.component('taman',{
    props:['listTaman'],
    template: '#taman'
});
var app = new Vue({
    el: '.site-content',
    data: {
        daftarTaman: []
    },
    created: function() {
        this.getData();
    },
    computed: {
        getData: function() {
            var _this = this;
            $get('https://ariona.net/talentbandung/', function(data) {
                _this.daftarTaman = data;
            });
        }
    }
})

// $.get('https://ariona.net/talentbandung/', function(data, status) {
//     var listTaman = $('.daftar-taman');

//     for (i=0; i < data.length; i++){
//         console.log(data);
//         var tamanItem = '<div class="grid-item"><div class="taman"><figure><a href="single.html"><img src=' + data[i].image.thumbnail + '>' + '</a></figure><div class="taman-detail"><h2><a href = "single.html"><span class ="subtitle">' + "Taman" + '</span><span class="title">' + data[i].nama + '</a></h2><p>' + data[i].alamat + '</p></div></div></div>';
//         listTaman.append(tamanItem);
//     }

//     var search = $('#filter');
//     search.keyup(filterTaman);

//     function filterTaman() {
//         var list = $('.taman');
//         for (var i=0; i < list.length; i++) {
//             var daftarTaman = $(list[i]).text().toLowerCase();
//             if (daftarTaman.indexOf(search.val().toLowerCase()) != -1) {
//                 $(list[i]).slideDown();
//             }
//             else {
//                 $(list[i]).slideUp();
//             }
//         }
//     }
// } );