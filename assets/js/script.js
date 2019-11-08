// Appel du Jquery aprés chargement de la page
$(function(){
  $('#button1').click(function(){
    $('#rectangle').css('height', $('#rectangle').height() + 10);
    // si height depasse 100 il reviendra a 10px
    if ($('#rectangle').height() > 100) {
      $('#rectangle').css('height', '10px')
    }
  });
  // change la couleur de fond en vert
  $('#button2').click(function(){
    $('#rectangle').css('background', 'green')
  });
  // remet la couleur par défaut
  $('#button3').click(function(){
    $('#rectangle').css('background', 'inherit');
  });
  // cacher l'élément
  $('#button4').click(function(){
    $('#rectangle').hide();
  });
  // afficher l'élément
  $('#button5').click(function(){
    $('#rectangle').show();
  });
});
