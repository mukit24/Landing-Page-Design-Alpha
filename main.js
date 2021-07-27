$(document).ready(function () {

    $(window).on('scroll',function(){
        if($(this).scrollTop()>90){
            $('.navbar').addClass('navbar-shrink');
        }else{
            $('.navbar').removeClass('navbar-shrink');
        }
    })

    const videoSrc = $('#player-1').attr('src');
    $(".play-video,#close-popup").click(function () { 
        if ($('.video-popup').hasClass('open-popup')){
            $('.video-popup').removeClass('open-popup');
            $('#player-1').attr('src','');
        }else{
            $('.video-popup').addClass('open-popup');
            if ($('#player-1').attr('src')==''){
                $('#player-1').attr('src',videoSrc);
            }
        }
    });

    //owl carousel

    $('.feature-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
});