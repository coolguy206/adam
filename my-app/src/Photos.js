import React from "react";
import axios from 'axios';
import parse from 'html-react-parser';
import {
  Api
} from './Api';
import Slider from "react-slick";

export class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    // this.getPost = this.getPost.bind(this);

  }

  componentDidMount() {

    let access_token = Api.Instagram.access_token;
    // let client_id = Api.Instagram.client_id;
    // let client_secret = Api.Instagram.client_secret;

    // console.log(api_key);

    var reactState = this;
    // console.log(reactState.setState);

    //refresh access_token
    axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${access_token}`)
      .then(function(data){
        // console.log('success axis photos');
        // console.log(data);
      })
      .catch(function(err){
        // handle error
        console.log('error axios photos');
        console.log(err);
      });

    //get media
      axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,permalink,thumbnail_url,media_url&access_token=${access_token}`)
        .then(function(res) {
          // handle success

          // console.log('success axios photos');
          // console.log(res.data.data);
          reactState.setState({
            items: res.data.data
          });

          // console.log(reactState.state);
        })
        .catch(function(error) {
          // handle error
          console.log('error axios photos');
          console.log(error);
        })
  }

  render() {
    var li = ``;
    var items = this.state.items;
    // console.log('photos items');
    // console.log(items);

    items.forEach(function(val, i) {
      // console.log(val.snippet.thumbnails.high.url);
      // console.log(val.snippet.thumbnails.standard.url);

      if(val.media_type === "IMAGE"){
        li = li + `
          <li>
            <a href="${val.media_url}" target="_blank" data-lity="" rel="noopener noreferrer">
              <img src="${val.media_url}" alt="${val.caption}" />
            </a>
          </li>`;
      }
      else if(val.media_type === "VIDEO") {
        li = li + `
          <li>
            <video controls  poster="${val.thumbnail_url}">
              <source src="${val.media_url}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </li>`;
      }

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

    // console.log('photos done');

    return (
      <div className ="gallery_thumbnails">
        <h3>Photos</h3>
        <ul>
          <Slider {...settings}>
            { parse(li)}
          </Slider>
        </ul >
        <a className = "more_media_link" href = "https://www.instagram.com/dow206/" rel = "noopener noreferrer" target = "_blank" >See More Photos</a>
      </div>
    );
  }

}
