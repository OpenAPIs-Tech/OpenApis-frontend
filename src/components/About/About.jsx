import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';
import './About.css';



const About = () => {

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
		<div class="container">
        <div class="row">
          <div class="col-lg-9 text-center text-lg-left">
            <h3 class="cta-title">About OpenAPIs</h3>
            <p class="cta-text"> Our initiative is to provide APIs for developers to leverage the build code and make new products out of it.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" target="_blank" href="https://github.com/OpenAPIs-Tech">Learn More</a>
          </div>
        </div>

      </div>
	

		</section>
	);
};

export default About;