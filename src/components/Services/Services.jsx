import React from 'react';
import { useNav } from '../../customHooks/useNav';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DATA from "./ServicesDetails";
import "./Services.css"




const Services = () => {

	const servicesRef = useNav('Services');

	return (
		<div ref={servicesRef} id='servicesContainer'>
			  <div className="container">
        <div className="section-header">
        <h3>Our Open Source APIs</h3>
          <p className='section-text'><i>Take a look at some of our APIs. </i></p>
        </div>

        <div className="row">
          {DATA.service_name.map((val, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index} style={{marginBottom:"2rem"}}>
                <Card sx={{ maxWidth: 400 }} className="services-content"  >
                  <CardActionArea href={DATA.GithubURL[index]}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={DATA.imgURL[index]}
                      alt="api"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}} >
                        {val} 
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <p className='services-text' >
                   {DATA.text[index]}
                  </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
		</div>
	);
};

export default Services;