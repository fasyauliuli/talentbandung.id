$.get('https://fasyauliuli.github.io/talentbandung.id/ebandy/assets/script/tempat.json', function(data) {
    var listKeluarga = $('.museum-list')
    
        for (i=5; i < 8; i++){
            var keluargaItem = '<div class="col-md-4"><div class="museum"><figure><a href=' + data[i].sublink + '><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = ' + data[i].sublink + '>' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            listKeluarga.append(keluargaItem);
        }
    
    var keluargaList = $('.travel-list-2')

        for (i=8; i < 10; i++){
            var itemKeluarga = '<div class="col-md-6"><div class="museum"><figure><a href=' + data[i].sublink + '><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = ' + data[i].sublink + '>' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            keluargaList.append(itemKeluarga);
        }
} );