import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';

const errorInput = {firstName:'', lastName:'',color:'#000000'}
export const AppBarCustom = ({user=errorInput}) => {
    const history = useHistory();

    const {firstName, lastName,color} = user;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor:'#406d96'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit"
                            startIcon = {<HomeIcon/>}
                            onClick = {() => history.push("/")}
                        >Home</Button>
                    </Typography>
                    <Tooltip title="Work in Progress">
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" sx = {{bgcolor:color}} >{`${firstName?.substr(0,1).toUpperCase() || ''}${lastName?.substr(0,1).toUpperCase() || ''}`}</Avatar>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
