import React from "react";


export class AboutContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        // console.log(this.props);

        return (
            <React.Fragment>
                <div>
                    <img src={this.props.img} alt={this.props.h3} />
                    <h3>{this.props.h3}</h3>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </React.Fragment>

        );
    }

}