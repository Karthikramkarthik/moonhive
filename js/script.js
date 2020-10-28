(function($) {
    'use strict';

    // Preloader js    
    $(window).on('load', function() {
        $('.preloader').fadeOut(700);
    });




    // hero slider
    $(window).on('load', function() {
        var menu = [];
        jQuery('.slide-item').each(function(index) {
            menu.push(jQuery(this).find('.slide-inner').attr('data-text'));
        });

        var interleaveOffset = 0.5;
        var swiperOptions = {
            grabCursor: true,
            loop: true,
            speed: 1000,
            parallax: true,
            autoplay: {
                delay: 6500,
                disableOnInteraction: false
            },
            watchSlidesProgress: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            on: {
                progress: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector('.slide-inner').style.transform =
                            'translate3d(' + innerTranslate + 'px, 0, 0)';
                    }
                },

                touchStart: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = '';
                    }
                },

                setTransition: function(speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + 'ms';
                        swiper.slides[i].querySelector('.main-sider-inner').style.transition =
                            speed + 'ms';
                    }
                }
            }
        };

        var swiper = new Swiper('.swiper-container-horizontal', swiperOptions);



        // Testimonial Slider
        var myswiper = new Swiper('#secound_sec', {

            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 5000
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 2,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                }
            }
        });
        var myswiper = new Swiper('#testi', {

            slidesPerView: 1,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
           
            autoplay: {
                delay: 5000
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    navigation: false
                },
                // when window width is >= 480px
                480: {
                    navigation: false
                },
                // when window width is >= 640px
                640: {
                    navigation: false
                }
            }
        });
    });

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $('.slide-bg-image');
    sliderBgSetting.each(function(indx) {
        if ($(this).attr('data-background')) {
            $(this).css('background-image', 'url(' + $(this).data('background') + ')');
        }
    });





    // touchpin
    $("input[name='quantity']").TouchSpin();

    // animate on scroll
    AOS.init({
        once: true
    });

})(jQuery);


function scrolling() {
    var sticky = $('#main-nav'),
        scroll = $(window).scrollTop();

    if (scroll >= 70) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
};
scrolling();
$(window).scroll(scrolling);

$(function myFunction() {

    $("form[name='registration']").validate({

        rules: {


            email: {
                required: true,
                email: true
            },
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            location: {
                required: true
            },
            message: {
                required: true
            },
        },

        messages: {

            firstname: {
                required: "Please provide a firstname"
            },
            lastname: {
                required: "Please provide a lastname"
            },
            location: {
                required: "Please provide a location"
            },
            message: {
                required: "Please provide a message"
            },
            email: "Please enter a valid email address"
        },

        submitHandler: function(form) {
            $("#alertmsg").show();
            var a = document.getElementById('display').innerHTML = document.getElementById("fname").value;
            // alert(a);
            form.submit();
        }
    });
});



$(document).ready(function() {
  
    $('.tooltips').mouseenter(function(e) {
        $(this).css("background-color", "#D45050");
        $('#menu-dropdown').stop().show();
       
        $('#menu-dropdown').show();
     }, function() {
        $(this).css("background-color", "#D45050");
        $('#menu-dropdown').stop().show();
        var x=this.id; 
        console.log("test"); 
         console.log(x); 
         if(x=='maths'){
           $('#content').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
         }
         if(x=='english'){
            $('#content').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
         }
         if(x=='physics'){
            $('#content').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
         }
         if(x=='chemistry'){
            $('#content').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='computer'){
             $('#content').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='history'){
             $('#content').text("his");
          }
    });
    $(".tooltips, #menu-dropdown").mouseleave(function() {
        $(this).css("background-color", "");
        if (!$('#menu-dropdown').is(':hover')) {
            $('#menu-dropdown').hide();
        };
    });



   
});



$(document).ready(function() {



    $('.secoundtooltips').mouseenter(function(e) {
        
        $(this).css("background-color", "#D45050");
        $('#orangediv').stop().show();
       
        $('#orangediv').show();
     }, function() {
        $(this).css("background-color", "#D45050");
        $('#orangediv').stop().show();
        var x=this.id; 
        console.log("test"); 
         console.log(x); 
        
         if(x=='chemistry'){
            $('#tooltips').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='computer'){
             $('#tooltips').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='history'){
            $('#tooltips').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
    });
    $(".secoundtooltips, #orangediv").mouseleave(function() {
        $(this).css("background-color", "");
        if (!$('#orangediv').is(':hover')) {
            $('#orangediv').hide();
        };
    });
});






$(document).ready(function() {



    $('.thirdtooltips').mouseenter(function(e) {
        
        $(this).css("background-color", "#D45050");
        $('#orangediv2').stop().show();
       
        $('#orangediv2').show();
     }, function() {
        $(this).css("background-color", "#D45050");
        $('#orangediv2').stop().show();
        var x=this.id; 
        console.log("test"); 
         console.log(x); 
        
         if(x=='psycho'){
            $('#thirdtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='geo'){
             $('#thirdtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='eco'){
            $('#thirdtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
    });
    $(".thirdtooltips, #orangediv2").mouseleave(function() {
        $(this).css("background-color", "");
        if (!$('#orangediv2').is(':hover')) {
            $('#orangediv2').hide();
        };
    });
});


$(document).ready(function() {



    $('.fourtooltips').mouseenter(function(e) {
        
        $(this).css("background-color", "#D45050");
        $('#orangediv3').stop().show();
       
        $('#orangediv3').show();
     }, function() {
        $(this).css("background-color", "#D45050");
        $('#orangediv3').stop().show();
        var x=this.id; 
        console.log("test"); 
         console.log(x); 
        
         if(x=='typo'){
            $('#fourtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='painting'){
             $('#fourtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
          if(x=='language'){
            $('#fourtool').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos eius alias ratione. Repellat aliquid possimus consequatur quia totam vel, facere esse tempora suscipit debitis obcaecati magni quas nulla provident!");
          }
    });
    $(".fourtooltips, #orangediv3").mouseleave(function() {
        $(this).css("background-color", "");
        if (!$('#orangediv3').is(':hover')) {
            $('#orangediv3').hide();
        };
    });
});