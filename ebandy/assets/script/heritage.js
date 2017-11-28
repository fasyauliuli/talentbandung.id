$.get('https://fasyauliuli.github.io/talentbandung.id/ebandy/assets/script/tempat.json', function(data) {
    var listHeritage = $('.museum-list')
    
        for (i=15; i < 18; i++){
            var heritageItem = '<div class="col-md-4"><div class="museum"><figure><a href="index.html"><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = "index.html">' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            listHeritage.append(heritageItem);
        }
    
    var heritageList = $('.travel-list-2')

        for (i=18; i < 20; i++){
            var itemHeritage = '<div class="col-md-6"><div class="museum"><figure><a href="index.html"><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = "index.html">' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            heritageList.append(itemHeritage);
        }
} );