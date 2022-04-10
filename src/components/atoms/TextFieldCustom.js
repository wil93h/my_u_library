import React from 'react'
import TextField  from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const primaryColor = '#432e41';
const secondColor = '#21bc6f';

const TextFieldCss = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(1),
    // minWidth: 80,
    // maxWidth: 120,
    color: primaryColor,

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
    "& .MuiFormHelperText-root" :{
        color: '#e45446 !important',
        fontSize:'21px'
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{
        borderColor: secondColor,
    },
    "& .Mui-disabled":{
        color: secondColor,
    }
}));

export const TextFieldCustom = ({id, name,value, label='not found', type, onChange, refT ,min = '80px' , max = '120px', disabled, errors}) => {
    
        return (
            <div>
                <TextFieldCss 
                    variant="outlined"
                    id={id}
                    name = {name}
                    value={value}
                    label={label}
                    type={type}
                    inputRef = {refT}
                    sx={{ minWidth:min,maxWidth: max}}
                    onChange = {onChange}
                    helperText = {errors}
                    disabled = {disabled}
                /> 
            </div>
        )
}
