import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
const primaryColor = '#432e41';
// const primaryColorNight = '#a8d0da';
const AutoCompleteRemastered = styled(Autocomplete)(({ theme }) => ({
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    // height:'70px',
    '& label': {
        color: primaryColor
      },
      '& label.Mui-focused': {
        color: primaryColor,
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
      }
}));

export const AutoCompleteCustom = ({id , name, value  , label  , setHandle , map ,min = '100px' , max = '250px', helper, disabled = false}) => {
    
    return (
      <div>
        <AutoCompleteRemastered
            disabled={disabled}
            clearOnBlur
            id = { id }
            name = { name }
            isOptionEqualToValue={(option, value) => option.id === value.id}
            variant="outlined"
            onChange = { (e,value) => {setHandle(e,value,name)} }
            options = { map }
            sx={{ minWidth:min,maxWidth: max}}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
        <FormControl>
        <FormHelperText style={{ color: primaryColor }}>{ helper }</FormHelperText>
      </FormControl>
      </div>
      );
}
