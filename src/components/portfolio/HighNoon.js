import React from 'react';
import {Box} from "@mui/material";
import './highnoonStyle.css';

export default function HighNoon() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2rem'} class="highnoon">
      <div>
        <link rel="stylesheet" type="text/css" href="highnoonStyle.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <title> High Noon Playable Demo </title>
        <p style={{textAlign: 'center'}}>
          <iframe title="HighNoon" frameBorder={0} src="https://itch.io/embed-upload/5423185?color=333333" allowFullScreen width={1000} height={700}>
            &lt;a href="https://nickwar42.itch.io/high-noon"&gt;Play High Noon on itch.io&lt;/a&gt;
          </iframe>
        </p>
      </div>
        </Box>
    );
};