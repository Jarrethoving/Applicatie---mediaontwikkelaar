$(document).ready(function(){
  $( ".balletjes" ).mouseover(function() {
    $( ".balletjes" ).css("animation-play-state", paused);
    $( ".kleineballetjes" ).css("animation-play-state", paused);
    $( ".miniballetjes" ).css("animation-play-state", paused);
  });
  $( ".balletjes" ).mouseleave(function() {
    $( ".balletjes" ).css("animation-play-state", running);
    $( ".kleineballetjes" ).css("animation-play-state", running);
    $( ".miniballetjes" ).css("animation-play-state", running);
  });
});
