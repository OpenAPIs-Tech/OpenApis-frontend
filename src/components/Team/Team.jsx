import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';

const Team = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const teamRef = useNav('Team');

	return (
		<section ref={teamRef} id='teamContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>TEAM</h3>
				<p>This is the team section</p>
			</div>
		</section>
	);
};

export default Team;