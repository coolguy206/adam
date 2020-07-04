import React from "react";


export class BannerContent extends React.Component {

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
                    <div className={"banner_container" +  this.props.class2}>
                        <a href={this.props.url}>
                          <img src={this.props.img} alt={this.props.h2} />
                        </a>
                        <div>
                            <h2>{this.props.h2}</h2>
                            {this.props.content}
                            <a href={this.props.url} className="link_btns bordered_btns">read more</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
