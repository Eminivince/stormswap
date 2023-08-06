import React from 'react';
import Footer from '../components/Footer';
import AboutUs from '../components/home/AboutUs';
import Blog from '../components/home/Blog';
import Intro from '../components/home/Intro';
import Roadmap from '../components/home/Roadmap';
import Supportedfeatures from '../components/home/Supportedfeatures';
import Trade from '../components/home/Trade';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <main className='pt-[120px] bg-gray-300 w-full'>
        <Navbar />
        <Intro />
        <Supportedfeatures />
        {/* <Trade />
        <AboutUs />
        <Roadmap />
        <Blog /> */}
        <Footer />
    </main>
  )
}

export default Home