import React from "react";
import { ContactInfo } from "./ContactInfo";

export class Footer extends React.Component {

    render() {

        let date = new Date();
        let year = date.getFullYear();

        return (
            <footer>
          <div id="footer_nav">
            <a href="#improv_anchor">Improv</a>
            <a href="#services_anchor">Services</a>
            <a href="#gallery_anchor">Gallery</a>
            <a href="#about_anchor">About</a>
            <a href="#contact_anchor">Contact</a>
          </div>
          <div id="footer_socialmedia">
            <a href="https://www.facebook.com/AdamImprovClub/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/dow206/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCbGCuGMYDYC8uF4apjJr0cg?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/adam-dow-a3206a8/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="contact_info">
            <p>copyright &copy; <span id="copyright">{year}</span></p>
          </div>
      </footer>
        );
    }

}
