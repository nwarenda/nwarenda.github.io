import React from 'react';
import './retro.module.scss';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Grid} from "@mui/material";
import {info} from "../info/Info";
import PortfolioBlock from '../portfolio/PortfolioBlock';
import PDF from '../Resume/Resume-Nicholas-Warenda.pdf';

export default function Home() {

   return (
      <>
      <Box component={'main'} display={'flex'} 
            flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 500px)'} >
        
         <Box>
            <h1>Hey! I'm Nicholas,</h1> <h2>and I'm a Software Developer.</h2>
            
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}  mt={'0.5rem'} >
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
        
         
      </Box>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
         <h2 style={{borderBottom: "2px solid"}}>Current & Past Personal Projects:</h2>
         
            <Grid container display={'flex'} justifyContent={'center'} mt={'2rem'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} >
        <h2 style={{borderBottom: "2px solid"}} >My Resume:</h2>
        <br/>
             <embed
            src={PDF}
            type="application/pdf"
            height={1000}
            width={750}
            
  />
        </Box>
       
        </>
   )
}