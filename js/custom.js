// custome js
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  // fix on scroll
  $(window).scroll(function() {
    let position    =   $(this).scrollTop();
      if (position >= 500) {
        $('.navbarOnScroll').addClass('stickyTop');
      } else {
        $('.navbarOnScroll').removeClass('stickyTop');
      }
  });

// products 
$('#productSlide').owlCarousel({
  autoplay: true,
  items: 2,
  margin:20,
  lazyLoad: true,
  dots:false,
  nav: true,
  loop: true,
  autoPlayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:2,
    },
    1000:{
      items:2,
    }
  }
});

// products 
$('#testSlides').owlCarousel({
  autoplay: true,
  items: 2,
  margin:0,
  lazyLoad: true,
  dots:false,
  nav: true,
  loop: true,
  autoPlayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
  }
});


