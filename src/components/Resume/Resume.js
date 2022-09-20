import React from 'react';
import {Box, Grid} from "@mui/material";
import PDF from './Resume-Nicholas-Warenda.pdf';


export default function Resume() {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2rem'}>
             <embed
            src={PDF}
            type="application/pdf"
            height={1000}
            width={750}
  />
        </Box>
    );
};