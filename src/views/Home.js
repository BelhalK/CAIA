import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Upcoming from '../components/sections/Upcoming';
import Sponsors from '../components/sections/Sponsors';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Upcoming topDivider/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Sponsors topDivider/>
      <Cta split />
    </>
  );
}

export default Home;