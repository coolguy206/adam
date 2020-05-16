import React from "react";
import {AboutContent} from "./AboutContent";
import {Api} from "./Api";
import axios from "axios";
import parse from 'html-react-parser';

export class About extends React.Component {

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

                console.log('from about.js');
                console.log(reactState.state);
            })
            .catch(function(error) {
                // handle error
                console.log('error axios');
                console.log(error);
            });


    }

    render() {

        var Content = function(h3, content){
            return {
                h3: h3,
                content: content,
            }
        }

        var entrepreneur = new Content(
            `Entrepreneur`,
            `<p>
                this is the entrepreneur description.
            </p>`
            );

        var producer = new Content(
            `Producer`, 
            `<p>
                this is the producer description.
            </p>`
            );

        var acting = new Content(
            `Actor`, 
            `<p>
                this is the actor description.
            </p>`
            );

        var imgArr = this.state.images;
         // console.log(imgArr);

        imgArr.map(function(val,i){
            // console.log(val);
            switch(val.name){
                case `about-actor`:
                    acting.img = val.images[0].source;
                    break;
                case `about-producer`:
                    producer.img = val.images[0].source;
                    break;
                case `about-entrepreneur`:
                    entrepreneur.img = val.images[0].source;
                    break;
            }
        });

        return (
            <section id="about_section">
                <span id="about_anchor" className="anchors"></span>
                <h2>About</h2>
                <AboutContent h3={entrepreneur.h3} content={parse(entrepreneur.content)} img={entrepreneur.img} />

                <AboutContent h3={producer.h3} content={parse(producer.content)} img={producer.img} />

                <AboutContent h3={acting.h3} content={parse(acting.content)} img={acting.img} />

            </section>
        );
    }

}