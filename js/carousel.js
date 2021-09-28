function switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
      document.getElementById('gallery').classList.add("custom");
      document.getElementById('exampleModal').classList.add("custom");
    } else {
      document.getElementById('gallery').classList.remove("custom");
      document.getElementById('exampleModal').classList.remove("custom");
    }
  }

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll>300){
        $(".nav").css("background", "blue");
        $(".nav").css("height", "50px");
        $(".nav").css("top", "0px");
      }
      else{
        $(".nav").css("background", "#0000");
        $(".nav").css("height", "50px");
        $(".nav").css("top", "70px");
      }
    })
  })
  $('vedio').mediaelement();
function topFunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}