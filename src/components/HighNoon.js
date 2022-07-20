import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';

class HighNoon extends React.Component {
    render(){
        return (
            <div>
        <html lang="en" class="highnoon">
        <head> 
            <link rel="stylesheet" type="text/css" href="style.css" />
            <link rel="icon" href="https://image.flaticon.com/icons/svg/252/252336.svg"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
            <title> High Noon Playable Demo </title>
        </head>
        
        <body>
        <h2> High Noon:</h2>  
        <p class="highnoon">
            <iframe frameborder="0" title="HighNoon" src="https://itch.io/embed-upload/5423185?color=333333" allowfullscreen="" width="1000" height="700">
                <a href="https://nickwar42.itch.io/high-noon">Play High Noon on itch.io</a>
            </iframe>
        </p>
        </body>
        </html>
        </div>
        );
    }
}

export default HighNoon;
