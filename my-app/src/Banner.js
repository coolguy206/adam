import React from "react";
import $ from 'jquery';
import {BannerContent} from "./BannerContent";
import {Api} from "./Api";
import axios from "axios";
import parse from 'html-react-parser';

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

        let pageId = Api.Fb.id;

        let params = `fields=id,images,link,name,picture,webp_images,album`;

        let url = `https://graph.facebook.com/${Api.Fb.albumId}/photos?access_token=${token}&${params}`;

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
                console.log('error axios');
                console.log(error);
            });


    }

    render() {

        var Content = function(url, h2,content, class2){
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

         imgArr.map(function(val,i){
            // console.log(val);
            switch(val.name){
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



        return (
            <section>
                <span id="top_anchor" className="anchors"></span>
                <div className="slider banner_slick">

                    <BannerContent url={improvShows.url} h2={improvShows.h2} content={parse(improvShows.content)} img={improvShows.img} class2={improvShows.class2}  />
        
                    <BannerContent url={improvClasses.url} h2={improvClasses.h2} content={parse(improvClasses.content)} img={improvClasses.img} class2={improvClasses.class2}  />

                    <BannerContent url={workshops.url} h2={workshops.h2} content={parse(workshops.content)} img={workshops.img} class2={workshops.class2}  />
                </div>
            </section>
        );
    }

}