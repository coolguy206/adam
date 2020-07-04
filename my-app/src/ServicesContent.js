import React from "react";


export class ServicesContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        // console.log(this.props.h3);

        return (
           <div>
              <div>
                <a href="/#contact_anchor">
                  <img src={this.props.img} alt={this.props.h3} />
                </a>
                <h3>{this.props.h3}</h3>
                    {this.props.content}
              </div>
              <a href="/#contact_anchor" className="link_btns bordered_btns">{this.props.link}</a>
            </div>
        );
    }

}
