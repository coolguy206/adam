export function gallery() {
  // $('.gallery_thumbnails ul').slick({
  $('.gallery_thumbnails ul').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    infinite: true,
    dots: true,
    responsive: [{
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
};