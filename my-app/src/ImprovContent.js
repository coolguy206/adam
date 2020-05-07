import React from "react";


export class ImprovContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        console.log(this.props);

        return (
              <React.Fragment>

                     <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.img} alt={this.props.title} />
                    </a> 

                    <h3>{ this.props.title }</h3> 
                    
                    <ul>
                        {this.props.li}
                    </ul>
                    <h3>Location</h3>
                    <h4>{this.props.locationName}</h4>
                    <p>
                        {this.props.locationAddress}<br />
                        {this.props.locationCity}, {this.props.locationCountry} {this.props.locationZip}
                    </p>
                    <a className = "link_btns improv_btns" id={this.props.id1} href={ this.props.url } target="_blank" rel="noopener noreferrer">{this.props.cta1}</a>

        <a href="https://www.facebook.com/AdamImprovClub/" className="link_btns improv_links" target="_blank" rel="noopener noreferrer" id={this.props.id2} >{this.props.cta2}</a>

    
          </React.Fragment>

        );
    }

}