import { useState } from 'react';

export const useFormAutoCompleteMultiple = ( initialState = {} ) => {
    
    const [values1, setValues1] = useState(initialState);

    const setValue1 = (data = {}) => {
        setValues1(data);
    }

    const handleInputChange1 = ( e,newValue,name ) => {
        newValue?
        setValues1({
            ...values1,
            [ name ]: newValue 
        })
        :
        setValues1({
            ...values1,
            [ name ]: ""
        })
    }

    return [ values1, handleInputChange1, setValue1 ];

}
