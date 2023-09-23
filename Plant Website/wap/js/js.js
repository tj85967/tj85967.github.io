$(document).ready(()=>{
    $('.hamBar').click(function(){
        event.preventDefault();
        $('.navBar').slideToggle(600);
    });
})

$('.navBar li a').click(function(){
    $('.navBar').slideUp(600);
})

const swiper = new Swiper(".swiperTop", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    delay: 2000,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiperTwo = new Swiper(".swiperDown", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  AOS.init();

  $(document).ready(function () {
    //按鈕點擊觸發   
    $(".slideDown").click(function () {
        $("#lightbox-1 , #lightbox_lightboxbg").fadeIn(300);
        $("#lightbox-1").center();
      });
  
      $("a.lightbox_close").click(function () {
        $("#lightbox_lightboxbg, .lightbox").fadeOut(300);
      });
      
  });
  
  (function ($) {
    $.fn.extend({
        center: function (options) {
            var options = $.extend(
                {
                    // Default values
                    inside: window, // element, center into window
                    transition: 0, // millisecond, transition time
                    minX: 0, // pixel, minimum left element value
                    minY: 0, // pixel, minimum top element value
                    withScrolling: false, // booleen, take care of the scrollbar (scrollTop)
                    vertical: true, // booleen, center vertical
                    horizontal: true, // booleen, center horizontal
                },
                options
            );
            return this.each(function () {
                var props = {
                    position: "fixed",
                };
                if (options.vertical) {
                    var top =
                        ($(options.inside).height() - $(this).outerHeight()) / 2;
                    if (options.withScrolling)
                        top += $(options.inside).scrollTop() || 0;
                    top = top > options.minY ? top : options.minY;
                    $.extend(props, {
                        top: top + "px",
                    });
                }
                if (options.horizontal) {
                    var left =
                        ($(options.inside).width() - $(this).outerWidth()) / 2;
                    if (options.withScrolling)
                        left += $(options.inside).scrollLeft() || 0;
                    left = left > options.minX ? left : options.minX;
                    $.extend(props, {
                        left: left + "px",
                    });
                }
                if (options.transition > 0)
                    $(this).animate(props, options.transition);
                else $(this).css(props);
                return $(this);
            });
        },
    });
  })(jQuery);  
