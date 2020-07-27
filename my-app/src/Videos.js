import React from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import {
  Api
} from './Api';
import Slider from "react-slick";

export class Videos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    // this.getPost = this.getPost.bind(this);

  }

  componentDidMount() {

    let api_key = Api.Youtube.key;

    let adam_playlist = Api.Youtube.playlist.adam;

    let params = `part=snippet&playlistId=${adam_playlist}&key=${api_key}&maxResults=20`

    let url = `https://www.googleapis.com/youtube/v3/playlistItems?${params}`;

    // console.log(url);

    var reactState = this;
    // console.log(reactState.setState);

    // console.log(axios);
    axios.get(url)
      .then(function(res) {
        // handle success

        // console.log('from videos.js after GET');
        // console.log(res);
        reactState.setState({
          items: res.data.items
        });

        // console.log(reactState.state);
      })
      .catch(function(error) {
        // handle error
        console.log('error axios');
        console.log(error);
      })

  }

  render() {
    var li = ``;
    var items = this.state.items;
    // console.log(items);

    items.forEach(function(val, i) {
      // console.log(val.snippet.thumbnails.high.url);
      // console.log(val.snippet.thumbnails.standard.url);

      li = li + `<li>
          <a href="https://www.youtube.com/watch?v=${val.snippet.resourceId.videoId}" target="_blank" data-lity="" rel="noopener noreferrer" id="youtube - ${val.snippet.title}">
            <img src="${val.snippet.thumbnails.high.url}" alt="${val.snippet.title}" />
          </a>
        </li>`;

    });

    // console.log(li);


    function PrevArrow(props) {
      const {
        onClick
      } = props;
      return ( <
        button onClick = {
          onClick
        }
        type = 'button'
        class = 'slick-prev pull-left' > < svg xmlns = 'http://www.w3.org/2000/svg'
        width = '50'
        height = '50'
        viewBox = '0 0 501.5 501.5' > < g > < path fill = 'red'
        d = 'M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z' / > < /g></svg > < /button>
      );
    }


    function NextArrow(props) {
      const {
        onClick
      } = props;
      return ( <
        button onClick = {
          onClick
        }
        type = 'button'
        class = 'slick-next pull-right' > < svg xmlns = 'http://www.w3.org/2000/svg'
        width = '50'
        height = '50'
        viewBox = '0 0 501.5 501.5' > < g > < path fill = 'red'
        d = 'M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z' / > < /g></svg > < /button>
      );
    }

    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      arrows: true,
      slidesToShow: 5,
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
      prevArrow: < PrevArrow / > ,
      nextArrow: < NextArrow / >
    };

    // console.log('video done');

    return (
      <div className = "gallery_thumbnails" >
        <h3> Videos </h3>
        <ul>
          <Slider {...settings}>
            {parse(li)}
          </Slider>
        </ul>

        <a className = "more_media_link" href = "https://www.youtube.com/channel/UCbGCuGMYDYC8uF4apjJr0cg?view_as=subscriber" rel = "noopener noreferrer" target = "_blank" id="youtube"> See More Videos </a>
      </div>
    );
  }

}
