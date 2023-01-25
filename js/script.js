$('.book_part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    lazyLoad: 'ondemand',
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow">	&#8592; </button>',
    nextArrow: '<button class="slide-arrow next-arrow">&#8594</button>',
    arrows:true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.banner_full_width').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    speed: 3000,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand',
    fade: true,
    asNavFor: '.banner_nav'
  });
  $('.banner_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 2000,
    asNavFor: '.banner_full_width',
    dots: false,
    prevArrow: '<button class="slide-arrow prev-arrow">	&#8592; </button>',
    nextArrow: '<button class="slide-arrow next-arrow">&#8594</button>',
    centerMode: false,
    autoplay:true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
       responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });