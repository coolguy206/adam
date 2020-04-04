$(document).ready(function() {
    // #region slick carousel
    $('.banner_slick').slick({
        dots: false,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev pull-left'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>
          <g>
            <path fill='red'
              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />
          </g>
        </svg>
      </button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
          <g>
            <path fill="red"
              d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" />
          </g>
        </svg>
      </button>`
    });


    /*$('.gallery_responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev pull-left'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>
          <g>
            <path fill='red'
              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />
          </g>
        </svg>
      </button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
          <g>
            <path fill="red"
              d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" />
          </g>
        </svg>
      </button>`,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });*/

    // #endregion

    $('.gallery_thumbnails ul').slick({
        slidesToShow: 5,
        arrows: true,
        dots: true,
        responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
            }
        }, 
        ],
        prevArrow: `<button type='button' class='slick-prev pull-left'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>
          <g>
            <path fill='red'
              d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' />
          </g>
        </svg>
      </button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
          <g>
            <path fill="red"
              d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" />
          </g>
        </svg>
      </button>`

    });

    //lity lightbox
    $(document).on('click', '[data-lightbox]', lity);



    // #region hamburger menu
    function toggleHamburger() {
        var div = $('#nav_id div');
        // console.log(div);
        if (div[0].className == "active") {
            div[0].className = "";
        } else {
            div[0].className = "active";
        }
    }
    // #endregion

    // #region navbar sticky
    // sticky the horizontal navbar to the top after scroll to its div
    // window.onscroll = function() { fixedToTop() };

    const navLinks = document.getElementById("header");
    // let navLinksSticky = navLinks.offsetTop;

    // navbar sticks to top on scroll
    function fixedToTop() {
        if (window.pageYOffset > 1) {
            navLinks.classList.add("header_sticky");
        } else {
            navLinks.classList.remove("header_sticky");
        }
    }
    // #endregion

    // #region get current year
    let date = new Date();
    document.getElementById("copyright").textContent = date.getFullYear();
    // #endregion

});