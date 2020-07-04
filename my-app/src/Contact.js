import React from "react";
import { ContactInfo } from './ContactInfo';

export class Contact extends React.Component {

    render() {

        return (
          <section id="contact_section">
            <span id="contact_anchor" className="anchors"></span>
            <h2>Contact</h2>
            <div className="contact_info">
              <ContactInfo />
            </div>
          </section>
        );
    }

}
