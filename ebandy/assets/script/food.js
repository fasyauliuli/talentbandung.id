$.get('https://fasyauliuli.github.io/talentbandung.id/ebandy/assets/script/tempat.json', function(data) {
    var listFood = $('.museum-list')
    
        for (i=20; i < data.length; i++){
            var foodItem = '<div class="col-md-4"><div class="museum"><figure><a href="index.html"><img src=' + data[i].image + '></a></figure><div class = "travel-detail museum-detail"><h3><a href = "index.html">' + data[i].nama + '</a></h3><p>' + data[i].alamat + '</p></div></div></div>';
            listFood.append(foodItem);
        }
} );