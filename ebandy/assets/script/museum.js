$.get('https://fasyauliuli.github.io/talentbandung.id/ebandy/assets/script/tempat.json', function(data) {
    var listMuseum = $('.museum-list')
    
        for (i=0; i < 3; i++){
            var museumItem = '<div class="col-md-4"><div class="museum"><figure><a href=' + data[i].sublink + '><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = ' + data[i].sublink + '>' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            listMuseum.append(museumItem);
        }
    
    var museumList = $('.travel-list-2')

        for (i=3; i < 5; i++){
            var itemMuseum = '<div class="col-md-6"><div class="museum"><figure><a href=' + data[i].sublink + '><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = ' + data[i].sublink + '>' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            museumList.append(itemMuseum);
        }
} );