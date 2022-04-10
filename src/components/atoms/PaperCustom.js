import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const PaperCustom = ({id,handle,firstName, lastName,color}) => {
    return (
        <Box
            sx={{
            display: 'block',
            textAlign: 'center',
            '& > :not(style)': {
                m: 3,
                width: 180,
                height: 180,
            },
            }}
        >
            <Paper 
                className="paper-first-last-name"
                onClick={()=>handle(id,firstName)}
                sx = {{bgcolor:color}}
            >
            <h1 >{`${firstName?.substr(0,1).toUpperCase() || ''} ${lastName?.substr(0,1).toUpperCase() || ''}`}</h1>
            </Paper>
            <h2 className="footer-admin-first-name">{firstName}</h2>
        </Box> 
    )
}
