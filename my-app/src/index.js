import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {Header} from './Header';
import {Banner} from './Banner';
import {Improv} from './Improv';
import {Services} from './Services';
import {Gallery} from './Gallery';
import {About} from './About';
import {Contact} from './Contact';
import {Footer} from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Improv />
    <Services />
    <Gallery />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
