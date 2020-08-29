

$(document).ready(function() {
    $('.gallery-slider').slick({

        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });
});



$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $("#header").addClass("sticky");
      } else {
        $("#header").removeClass("sticky");
      }
     
    });
  });



  // hamburger menu //

// $(function() { //run when the DOM is ready
//     $(".top-menu-bar").click(function() { //use a class, since your ID gets mangled
//         $(this).toggleClass("active"); //add the class to the clicked element
//         $('.main-nav').toggleClass("open");
//         $('body').animate({ left: '285px' }, 500);
//         $('body').animate({ left: '0px' }, 500);
//     });
// });




// main pull menu //





var main = function() {
    $('.top-menu-bar').click(function() {
        $("body").addClass("overlay");

        $('#main-nav').animate({ left: '0px' }, 300);
        $('body').animate({ left: '285px' }, 300);
    });
    $('.top-menu-bar1').click(function() {
        $("body").removeClass("overlay");

        $('#main-nav').animate({ left: '-285px' }, 300);
        $('body').animate({ left: '0px' }, 300);

    });
};

$(document).ready(main);




$(document).ready(function() {
    $("#main-nav li a").click(function() {
            var link = $(this);
            var closest_ul = link.closest("ul");
            var parallel_active_links = closest_ul.find(".active")
            var closest_li = link.closest("li");
            var link_status = closest_li.hasClass("active");
            var count = 0;

            closest_ul.find("ul").slideUp(function() {
                    if (++count == closest_ul.find("ul").length)
                            parallel_active_links.removeClass("active");
            });

            if (!link_status) {
                    closest_li.children("ul").slideDown();
                    closest_li.addClass("active");
            }
    })
})




// scroll to top //

var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
