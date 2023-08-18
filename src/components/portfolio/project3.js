import React from 'react';
import { Box } from "@mui/material";
import './cabinfeverStyle.css';

export default function CabinFever() {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2rem'} class="cabinfever">
      <div>
        {/* <link rel="stylesheet" type="text/css" href="cabinfeverStyle.css" /> */}
        <h2 >This project is currently under construction. Please check back later. </h2>
        <hr />
        <h3> Inspiration/Direction for this project: </h3>
        <h3> - The Legend of Zelda: Spirit Tracks</h3>
        <h3> - Tiny Rails</h3>
        <h3> - Death Stranding</h3>

        {/* <div>
        <link rel="stylesheet" type="text/css" href="cabinfeverStyle.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <title> High Noon Playable Demo </title>
        <p style={{textAlign: 'center'}}>
          <iframe title="HighNoon" frameBorder={0} src="https://itch.io/embed-upload/5423185?color=333333" allowFullScreen width={1000} height={700}>
            &lt;a href="https://nickwar42.itch.io/high-noon"&gt;Play High Noon on itch.io&lt;/a&gt;
          </iframe>
        </p>
      </div> */}
      </div>
    </Box>
  );
};