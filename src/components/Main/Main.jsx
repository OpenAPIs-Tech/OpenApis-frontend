import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Users from '../Users/Users';
import Team from '../Team/Team';
import Services  from '../Services/Services';
import Footer  from '../Footer/Footer'
import  Nav  from '../Nav/Nav';


const Main = () => (
	<main>
		<Nav/>
		<Home />
		<About />
		<Services />
		<Users />
		<Team />
		<Footer/>
	</main>
);

export default Main;