import React from "react";
import {
  BannerContent
} from "./BannerContent";
import {
  Api
} from "./Api";
import axios from "axios";
import parse from 'html-react-parser';
import Slider from "react-slick";

export class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    // this.getPost = this.getPost.bind(this);

  }


  componentDidMount() {
    let token = Api.Fb.key;

    // let pageId = Api.Fb.id;

    let params = `fields=id,images,link,name,picture,webp_images,album`;

    let url = `https://graph.facebook.com/${Api.Fb.albumId}/photos?access_token=${token}&${params}`;
    // console.log(url);

    var reactState = this;

    axios.get(url)
      .then(function(res) {
        // handle success
        // console.log('after ajax axios')
        // console.log(res.data.data);

        // console.log('services after ajax')
        // console.log(res.data);

        reactState.setState({
          images: res.data.data
        });

        // console.log(reactState.state);
      })
      .catch(function(error) {
        // handle error
        console.log('error axios banner');
        console.log(error);
      });


  }

  render() {

    var Content = function(url, h2, content, class2) {
      return {
        url: url,
        h2: h2,
        content: content,
        class2: class2
      }
    }

    var improvShows = new Content(
      `#improv_anchor`,
      `Improv Shows`,
      `<p>
                this is the improv shows slide content.
            </p>`,
      ``
    );

    var improvClasses = new Content(
      `#improv_anchor`,
      `Improv Classes`,
      `<p>
                this is the improv classes slide content.
            </p>`,
      ` slide2`
    );

    var workshops = new Content(
      `#services_anchor`,
      `Corporate Workshop Team Building`,
      `<p>
                this is the Corporate Workshop Team Building slide content.
            </p>`,
      ``
    );

    var imgArr = this.state.images;
    // console.log(imgArr);

    imgArr.map(function(val, i) {
      // console.log(val);
      switch (val.name) {
        case `banner-shows`:
          improvShows.img = val.images[0].source;
          break;
        case `banner-classes`:
          improvClasses.img = val.images[0].source;
          break;
        case `banner-workshops`:
          workshops.img = val.images[0].source;
          break;
      }
    });


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
      prevArrow: < PrevArrow / > ,
      nextArrow: < NextArrow / >
    };


    return (
      <section>
        <span id ="top_anchor" className ="anchors"></span>
        <div className ="slider banner_slick">
          <Slider {...settings} >
            <BannerContent url = {improvShows.url} h2 = {improvShows.h2} content = {parse(improvShows.content)} img = {improvShows.img} class2 = {improvShows.class2}  id="banner-slide1"/>

            <BannerContent url = {improvClasses.url} h2 = {improvClasses.h2} content = {parse(improvClasses.content)} img = {improvClasses.img} class2 = {improvClasses.class2}  id="banner-slide2"/>

            <BannerContent url = {workshops.url} h2 = {workshops.h2} content = {parse(workshops.content)} img = {workshops.img} class2 = {workshops.class2} id="banner-slide3"/>
          </Slider >
        </div>
      </section>
    );
  }

}
