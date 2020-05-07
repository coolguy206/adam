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

  <form action="form.js" method="post">
    <div className="form_grp">
      <label>Name</label>
      <input type="text" name="name" required />
    </div>
    <div className="form_grp">
      <label>Email</label>
      <input type="text" name="email" required />
    </div>
    <div className="form_grp">
      <label>Services</label>
      <select name="services" required>
        <option value="" selected disabled>please select an option...</option>
        <option value="corporate workshops">Corporate Workshops Team Building</option>
        <option value="improv classNamees">Improv classNamees</option>
        <option value="tv film production">TV/Film Production</option>
        <option value="acting">Acting</option>
      </select>
    </div>
    <div className="form_grp_txtarea">
      <label>Message</label>
      <textarea type="text" name="message" required></textarea>
    </div>
    <div className="form_grp">
      <button className="link_btns">Send</button>
    </div>
  </form>

</section>
        );
    }

}