import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';

const primaryColor = '#432e41';
const secondColor = '#21bc6f';
const tertiaryColor = '#e45446';


const CssFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    // minWidth: 150,
    color: primaryColor,
    menuPaper: {
        backgroundColor: primaryColor
      },
    '& label': {
        color: secondColor
    },
    '& label.Mui-focused': {
        color: secondColor,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: primaryColor,
    },
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: primaryColor,
    },
    '&:hover fieldset': {
        borderColor: primaryColor,
    },
    '&.Mui-focused fieldset': {
        borderColor: primaryColor,
    },
    },
    '& .MuiInputBase-root': {
        color:primaryColor 
    },
    '& .MuiSvgIcon-root': {
        color:primaryColor 
    },
    "& .MuiFormHelperText-root" :{
        color: '#e45446 !important',
        fontSize:'21px'
    },

  }));
  


export const SelectRow = ({name,value,onChange,min = '150px',max = '150px',label,map, errors}) => {
  
        return (
            <div>
                <CssFormControl >
                    <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
                    <Select
                        sx={{ minWidth:min,maxWidth: max}}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={value}
                        onChange={onChange}

                        label={label}
                        name = {name}
                    >
                    {map? map.map((data,index) => {
                        if ( index => 0){ return(
                            <MenuItem  key = {data.id} value={data.id}>{data.name}</MenuItem>
                        )}
                    }):''}
                    </Select>
                    <FormHelperText style={{ color: tertiaryColor }} >{errors}</FormHelperText>
                </CssFormControl>
            </div>
        );
    
}
