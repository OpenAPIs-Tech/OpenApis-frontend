import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';

const Services = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const servicesRef = useNav('Services');

	return (
		<section ref={servicesRef} id='servicesContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>SERVICES</h3>
				<p>This is the sevices section</p>
			</div>
		</section>
	);
};

export default Services;