import React from "react";
import { Videos } from "./Videos";
import { Photos } from "./Photos";
import $ from 'jquery';
import lity from 'lity';

export class Gallery extends React.Component {

    componentDidMount() {
        // console.log('from photos.js')
        // console.log($);

        $(document).on('click', '[data-lightbox]', lity);
    }

    render() {

        return (
            <section id="gallery_section">
  <span id="gallery_anchor" className="anchors"></span>
  <h2>Gallery</h2>
  <Videos />
  <Photos />
</section>
        );
    }

}