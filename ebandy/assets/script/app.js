$('.js-anchor-link').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });

$('.logo').scrollClass({
  delay: 1000
});
$('.deskripsi').scrollClass({
  delay: 1000
});