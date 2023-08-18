import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "../standard/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'home',
        to: '/',
        active: 'standard'
    },
    {
        name: 'portfolio', 
        to: '/projects/',
        active: 'projects'
    }, 
    {
        name: 'high noon', 
        to: '/highnoon',
        active: 'highnoon'
    },
    {
        name: 'resume', 
        to: '/resume',
        active: 'resume'
    },
    // {
    //     name: 'proj 2', 
    //     to: '/projects/cabinfever',
    //     active: 'cabinfever'
    // },
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'standard' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                        sx={{ borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}