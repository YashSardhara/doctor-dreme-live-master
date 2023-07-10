// review section slider js
$(document).ready(function () {
  
  $('.reviews_images').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// snooze section snooze_tabs js 
var snooze_tabs = document.querySelectorAll(".snooze_tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

snooze_tabs.forEach(function (tab, tab_index) {
  tab.addEventListener("click", function () {
    snooze_tabs.forEach(function (tab) {
      tab.classList.remove("active");
    })
    tab.classList.add("active");

    tab_wraps.forEach(function (content, content_index) {
      if (content_index == tab_index) {
        content.style.display = "block";
      }
      else {
        content.style.display = "none";
      }
    });
  });
});

// snooze zone audio js
$(function () {
  $('.audio_snooze').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause', 'progress'],
    audioVolume: 'horizontal',
    audioWidth: 600,
    audioHeight: 70,
    iPadUseNativeControls: true,
    iPhoneUseNativeControls: true,
    AndroidUseNativeControls: true
  });
});
$(document).ready(function () {
  $(".plypause_btn").click(function () {
    if ($(this).parent().is(".mejs-play") == true) {
      $(".play_btn").attr("src", 'https://cdn.shopify.com/s/files/1/0248/7766/2271/files/pause.svg?v=1665647200');
      $('.play_btn').addClass('play_button');
    }
    else if ($(this).parent().is(".mejs-play") == false) {
      $(".play_btn").attr("src", 'https://cdn.shopify.com/s/files/1/0248/7766/2271/files/play_button_without_stroke.svg?v=1665646876');
    }
  });
  $('.play_snooze').click(function () {
    var x = document.getElementById("audio_snooze");
    
    if ($(".play_btn").attr("src") == 'https://cdn.shopify.com/s/files/1/0248/7766/2271/files/play_button_without_stroke.svg?v=1665646876') {
      $(".play_btn").attr("src", 'https://cdn.shopify.com/s/files/1/0248/7766/2271/files/pause.svg?v=1665647200');
      $('.plypause_btn').parent().addClass("mejs-pause");
      $('.plypause_btn').parent().removeClass("mejs-play");
      x.play();
    } else {
      $(".play_btn").attr("src", 'https://cdn.shopify.com/s/files/1/0248/7766/2271/files/play_button_without_stroke.svg?v=1665646876');
      $('.plypause_btn').parent().removeClass("mejs-pause");
      $('.plypause_btn').parent().addClass("mejs-play");
      x.pause();
    }
  });

  //  sleep stories video section code in snooze section 
  $('#snooze_play_btn').click(function () {
    $("#snooze_dream_video")[0].src += "?autoplay=1";
    $('#snooze_dream_video').show();
    $('#snooze_video_cover').hide();
    $('#snooze_play_btn').hide();
  });


  // customer review section
  $('.shopify-app-block div:first-child').addClass('customer_review_container');
});

// page onload snooze zone video pause
function aud_play_pause() {
  var myAudio = document.getElementById("audio_snooze");
  if (myAudio.play) {
    myAudio.pause();
  } else {
    myAudio.pause();
  }
}





    // mejs-play
    // mejs-pause
