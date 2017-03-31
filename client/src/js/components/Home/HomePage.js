import React from 'react';

import AboutUS from './AboutUs';
import Hero from './Hero';
import HowTo from './HowTo';
import Auth from '../Auth/index';
import Header from '../common/header';
import Footer from '../common/footer';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <AboutUS />
        <HowTo />
        <Footer />
      </div>
    );
  }
}

export default Home