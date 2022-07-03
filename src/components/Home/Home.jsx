import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';
import './Home.css';
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');
	

	return (
		<section ref={homeRef} id='homeContainer'>
			 <header id="home">
        <ParticlesBg type="circle" bg={true} />

      
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">OpenAPIs</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>An Open Source Platform.</h3>
			  <h3>For the Developers, By the developers</h3>
            </Fade>
            <hr />
           
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    
		</section>
	);
};

export default Home;