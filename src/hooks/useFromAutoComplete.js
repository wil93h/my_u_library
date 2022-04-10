import { useState } from 'react';

export const useFormAutoComplete = ( initialState = {} ) => {
    
    const [values1, setValues1] = useState(initialState);
    const reset1 = (data = {}) => {
        setValues1( data );
    }

    const setValue1 = (data = {}) => {
        setValues1(data);
    }
    const handleInputChange1 = ( e,newValue,name ) => {
        newValue?
        setValues1({
            ...values1,
            [ name ]: newValue, 
        })
        :
        setValues1({
            ...values1,
            [ name ]: ""
        })

    }

    return [ values1, handleInputChange1, reset1, setValue1 ];

}