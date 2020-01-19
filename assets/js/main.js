$(document).ready(function(){
    $('.header-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
          {
              breakpoint: 769,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 380,
              settings: {
                arrows: false,
                dots: true,
               
              }
            }
        ],
        nextArrow:'<button class="slider-next slick-arrow"><img src="../assets/img/arrow-right.png"></button>',
        prevArrow:'<button class="slider-prev slick-arrow"><img src="../assets/img/arrow-left.png"></button>'
    });
    $('.slider-rooms').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,  
        centerPadding: '100px',
        speed: 1000,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              arrows: false
            }
          }
        ],
        accessibility: true,
        nextArrow: $('.slick-next'),
        prevArrow: $('.slick-prev')
    });
    $('.advantages-slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: true,
        dots: false,
        accessibility: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true
                }
              },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1
              }
            }
          ],
        nextArrow:'<button class="slick-next slick-arrow"><img src="../assets/img/arrow-rightb.png"></button>',
        prevArrow:'<button class="slick-prev slick-arrow"><img src="../assets/img/arrow-leftb.png"></button>'
    });
    //inputs
    (function($){
        function floatLabel(inputType){
            $(inputType).each(function(){
                var $this = $(this);
                $this.focus(function(){
                    $this.next().addClass("active");
                });
                $this.blur(function(){
                    if($this.val() === '' || $this.val() === 'blank'){
                        $this.next().removeClass();
                    }
                });
            });
        }

        floatLabel(".floatLabel");
    })(jQuery);

    $('.video').click(function(event){
      event.preventDefault();
      $('#popup-header').addClass("is-visible").animate({display: 'block', opacity: 1}, 200);
      $('.overlay').addClass('is-visible');
      $("body").css("overflow","hidden"); 
    
    });
    $('.overlay').click(function(event){
        event.preventDefault();
         $('#popup-header').removeClass('is-visible');
         $('.overlay').removeClass('is-visible');
         $("body").css("overflow","auto"); 
      });
    $('.close').click(function(event){
        event.preventDefault();
        console.log(333)
        $('#popup-header').removeClass('is-visible');
        $('.overlay').removeClass('is-visible');
        $("body").css("overflow","auto"); 
    });

    //menu fixed
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            $('.main-nav').addClass('fixed');
           
        } else {
            $('.main-nav').removeClass('fixed');
        }
        scrollPrev = scrolled;
        });

    //mob menu
    var $btn = document.getElementById('show');
    var $nav = document.getElementById('nav');
    var $body = document.querySelector('body');
    $btn.addEventListener('click', function() {
        $nav.classList.toggle('active-nav');
        $body.classList.toggle('overflow');
        })
   
    //bar
    var toggles = document.querySelectorAll(".toggle-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
   
      
   
});


  