import React from 'react';
import $ from 'jquery';

export class Header extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
      console.log('toggle clicked');
      var div = $('#nav_id div');
      // console.log(div);
      if (div[0].className == "active") {
          div[0].className = "";
      } else {
          div[0].className = "active";
      }
  }


    render() {

        return (
            <header id='header'>
    			<nav id="nav_id" className='nav'>
        			<a href="#" id="hamburger_icon" onClick={this.toggle}>
            			<i className="fa fa-bars"></i>
        			</a>
        			<a href='#top_anchor' id='brand'>Adam Dow</a>
        			<div>
            			<a href="#" id="hamburger_close" onClick={this.toggle}>
                			<i className="far fa-times-circle fa-lg"></i>
            			</a>
            			<a href='#improv_anchor' onClick={this.toggle}>Improv</a>
            			<a href='#services_anchor' onClick={this.toggle}>Services</a>
            			<a href='#gallery_anchor' onClick={this.toggle}>Gallery</a>
            			<a href='#about_anchor' onClick={this.toggle}>About</a>
            			<a href='#contact_anchor' onClick={this.toggle}>Contact</a>
        			</div>
    			</nav>
			</header>
        );
    }

}
