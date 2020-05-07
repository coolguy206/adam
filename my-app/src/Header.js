import React from 'react';

export class Header extends React.Component {

    render() {

        return (
            <header id='header'>
    			<nav id="nav_id" className='nav'>
        			<a href="#" id="hamburger_icon">
            			<i className="fa fa-bars"></i>
        			</a>
        			<a href='#top_anchor' id='brand'>Adam Dow</a>
        			<div>
            			<a href="#" id="hamburger_close">
                			<i className="far fa-times-circle fa-lg"></i>
            			</a>
            			<a href='#improv_anchor'>Improv</a>
            			<a href='#services_anchor'>Services</a>
            			<a href='#gallery_anchor'>Gallery</a>
            			<a href='#about_anchor'>About</a>
            			<a href='#contact_anchor'>Contact</a>
        			</div>
    			</nav>
			</header>
        );
    }

}