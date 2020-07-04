import React from "react";
import {ServicesContent} from "./ServicesContent";
import {Api} from "./Api";
import axios from "axios";
import parse from 'html-react-parser';

export class Services extends React.Component {

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

        var Content = function(h3,content, link){
            return {
                h3: h3,
                content: content,
                link: link
            }
        }

        var workshops = new Content(
            `Corporate Workshop<br /> Team Building`,
            `<h4>How It Works</h4>
            <p>
                this is the workshops services "how it works" description.
            </p>
            <h4>Outcome</h4>
            <p>
                this is the workshops services outcome description.
            </p>`,
            `request quote`
            );

        var improv = new Content(
            `Improv classes`,
            `<h4>How It Works</h4>
            <p>
                this is the improv services "how it works" description.
            </p>
            <h4>Outcome</h4>
            <p>
                this is the improv services outcome description.
            </p>`,
            `sign up`
            );

         var tv = new Content(
            `TV/Film Production`,
            `<h4>How It Works</h4>
            <p>
                this is the tv services "how it works" description.
            </p>
            <h4>Outcome</h4>
            <p>
                this is the tv services outcome description.
            </p>`,
            `contact me`
            );

         var acting = new Content(
            `Acting`,
            `<p>
                this is the acting services description.
            </p>`,
            `contact me`
            );

         var imgArr = this.state.images;
         // console.log(imgArr);

         imgArr.map(function(val,i){
            // console.log(val);
            switch(val.name){
                case `services-acting`:
                    acting.img = val.images[0].source;
                    break;
                case `services-improv`:
                    improv.img = val.images[0].source;
                    break;
                case `services-tv`:
                    tv.img = val.images[0].source;
                    break;
                case `services-workshops`:
                    workshops.img = val.images[0].source;
                    break;
            }
         });

         // console.log(workshops, improv, tv, acting);

        return (
            <section id="services_section">
                <span id="services_anchor" className="anchors"></span>
                <h2>Services</h2>

                <ServicesContent img={workshops.img} h3={parse(workshops.h3)} content={parse(workshops.content)} link={workshops.link} />

                <ServicesContent img={improv.img} h3={parse(improv.h3)} content={parse(improv.content)} link={improv.link} />

                <ServicesContent img={tv.img} h3={parse(tv.h3)} content={parse(tv.content)} link={tv.link} />

                <ServicesContent img={acting.img} h3={parse(acting.h3)} content={parse(acting.content)} link={acting.link} />
            </section>
        );
    }

}
