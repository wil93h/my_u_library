import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Zoom from '@mui/material/Zoom';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import { AddUser } from './AddUser';
import { AddBook } from './AddBook';
import { AutoCompleteCustom } from '../atoms/AutoCompleteCustom';
import { getUsers } from '../../utils/variables'
import  {adapterUser}  from '../../adapters/createAdapterAutoComplete'

export const AdministratorPanel = ({handle, variables}) => {
    const {  values:valuesInput, valuesAC, admin, errors } = variables;
    const [student, setStudent] = useState([])
    const [value, setValue] = useState(0);
    const { handleInputChange, handleInputChangeAC, handleSaveUser, handleSaveBook, handleFindUserBook} = handle;

    let color = admin?.color ? admin.color : '#00000'
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
    
    };
    useEffect(() => {
        getUsers()
        .then(users => { 
            let studentsVar = '';
            users.students.map(student=>{ 
                return studentsVar=([adapterUser(student),...studentsVar])
            })
            setStudent(studentsVar);
        })
    }, [])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            key: 'primary',
            className: 'btn-admin-panel-fab',
            handle: handleFindUserBook,
            icon: <SearchIcon />,
            label: 'Add',
        },
        {
            key: 'secondary',
            className: 'btn-admin-panel-fab',
            handle: handleSaveBook,
            icon: <AddIcon />,
            label: 'Add',
        },
        {
            key: 'ternary',
            className: 'btn-admin-panel-fab',
            handle: handleSaveUser,
            icon: <AddIcon />,
            label: 'Add',
        },
        ];

    return (
        <div>
            <Box sx={style}>
                <Box sx={{ bgcolor: 'background.paper' }}>
                    <AppBar position="static" sx={{bgcolor:'#406d96'}}>
                        <Tabs
                            // orientation="vertical"
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            bgcolor = { '#406d96' }
                        >
                            <Tab label="Add User" {...a11yProps(1)} />
                            <Tab label="Add Book" {...a11yProps(2)} />
                            <Tab label="Return book to library" {...a11yProps(2)} />
                            </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChange}
                    >
                        <TabPanel value={value} index={0}>
                            <AddUser
                                handle = { handleInputChange }
                                values = { valuesInput }
                                errors = { errors.errors }
                            />  
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                                <AddBook
                                    handle = { handleInputChange }
                                    values = { valuesInput }
                                    errors = { errors.errors }
                                />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <AutoCompleteCustom
                                id = {'searchUser'}
                                name = {'searchUser'}
                                value = {valuesAC.searchUser}
                                label = {'User'}
                                setHandle = {handleInputChangeAC}
                                map ={ student }
                                min = '100px' 
                                max = '250px'
                                helper  = { errors.errors['searchUser'] }
                            />
                        </TabPanel>
                    </SwipeableViews>
                    <div className="btn-admin-panel">
                        {fabs.map((fab,index) => (
                            <Zoom
                            key={fab.key}
                            in={value === index}
                            timeout={transitionDuration}
                            style={{ 
                                transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                            }}
                            onClick={fab.handle}
                            unmountOnExit
                            >
                            <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                                {fab.icon}
                            </Fab>
                            </Zoom>
                        ))}
                    </div>
                </Box>
            </Box>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography component={'span'}>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
    
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
      
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

