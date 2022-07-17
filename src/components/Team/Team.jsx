import React from "react";
import { useNav } from "../../customHooks/useNav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DATA from "./TeamDetails";
import "./Team.css"



const Team = () => {
  const teamRef = useNav("Team");

  return (
    <div ref={teamRef} id="teamContainer">
      <div className="container">
        <div className="section-header">
        <h3>Team</h3>
          <p className="section-text"><i>We believe that the way to success is by working together.</i></p>
        </div>

        <div className="row">
          {DATA.name.map((val, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <Card lg={{ maxWidth:240 }} className="team-content">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={DATA.imgURL[index]}
                      alt="team_member"
                    />
                    <CardContent className="team-name">
                      <Typography gutterBottom variant="h5" component="div" >
                        {val} 
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div" >
                       {DATA.designation[index]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      <div className="social" >
                    <a target="_blank" href={DATA.LinkedinURL[index]}><i className="fab fa-linkedin" style={{marginRight:"1rem"}}></i></a>
                    <a target="_blank" href={DATA.GithubURL[index]}><i className="fab fa-github "></i></a>
                  </div>
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

export default Team;
