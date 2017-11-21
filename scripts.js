$(function() {

  // on focus or click show image

  $('.projectTitle')
  // .active(function(){
  //   $('.revealImage').fadeOut();
  //   var link = $(this)[0].hash.replace(/^#/, "");
  //   $('.' + link).fadeToggle();
  // })
  .click(function(){
    if (link !== link) {console.log('li')}
    var link = $(this)[0].hash.replace(/^#/, "");
    $('.revealImage').fadeOut();
    $('.' + link).fadeIn();
    // console.log(link);
  })
  // .mouseout(function(){
  //   var link = $(this)[0].hash.replace(/^#/, "");
  //   $('.' + link).fadeOut();
  // })
  ;


}); // end docready