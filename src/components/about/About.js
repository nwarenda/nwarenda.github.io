import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import PDF from '../Resume-Nicholas-Warenda.pdf';

export default function About() {

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <embed
            src={PDF}
            type="application/pdf"
            height={1000}
            width={750}
  />
        </Box>
    )
}