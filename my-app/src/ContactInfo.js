import React from 'react';

export class ContactInfo extends React.Component {

    render() {

        return (
            <React.Fragment>
            	<a href='mailto:adamddow@gmail.com?Subject=Hi%20From%20Adams%20Site'>Email: adamddow@gmail.com</a> 
            	<a href ='tel:206-473-9211'>Phone USA: (206)473-9211</a> 
            	<a href ='tel:+919152730446'>Phone India: +919152730446</a>
            </React.Fragment>
        );
    }

}