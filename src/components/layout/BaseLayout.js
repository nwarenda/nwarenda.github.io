import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "../standard/Home";
import Space from "../space/Home";
import Retro from "../space/Home";
import Responsive from "../responsive/Home";
import HighNoon from "../portfolio/HighNoon";
import CabinFever from "../portfolio/CabinFever";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/space'} element={<Space/>}/>
                  <Route exact path={'/retro'} element={<Retro/>}/>
                  <Route exact path={'/responsive'} element={<Responsive/>}/>
                  <Route exact path={'/highnoon'} element={<HighNoon/>}/>
                  <Route exact path={'/cabinfever'} element={<CabinFever/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>Nicholas Warenda - Last Updated April 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

