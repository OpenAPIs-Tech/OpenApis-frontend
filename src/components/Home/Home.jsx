import React from 'react';
import { useNav } from '../../customHooks/useNav';
import '../Page.css';
import './Home.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Home = () => {


	const homeRef = useNav('Home');
	

	return (
		<section ref={homeRef} id='homeContainer'>

        {/* <ParticlesBg type="circle" bg={true} /> */}
      
      <div className='row banner'>
      <div className='banner-text'>
        <h1>
      <span>Level up your </span>
        <span className='highlight'>Development skills </span>
        <span> with OpenAPIs.</span>
        </h1>
        <p>An Open Source Platform. For the Developers, By the developers</p>
      </div>
      <Stack direction="row" spacing={2} className="button-component" >
      <Button variant="contained" style={{borderRadius:"0.5rem"}} href='https://github.com/OpenAPIs-Tech' className='button-text'>Get Started Now</Button>
      <Button variant="contained" style={{borderRadius:"0.5rem",backgroundColor:"#E6E4E4"}} href='https://www.linkedin.com/company/openapis' className='button-text' >
        Connect with Us
      </Button>
    </Stack>
     
      </div>
    
		</section>
	);
};

export default Home;