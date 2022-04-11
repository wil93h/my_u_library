import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { UserUnion } from '../organisms/UserUnion'
import { getUser,books as Books } from '../../utils/variables'
import { useForm } from '../../hooks/useForm'
import { useFormAutoComplete } from '../../hooks/useFromAutoComplete'

const inputNames = {
    
}
const autoCompleteInputs = {
    searchBook:'',
}
export const UserTemplate = ({params}) => {    
    const [ errors, setErrors ] = useState({errors:''});
    const [ values, handleInputChange, setValue ] = useForm(inputNames);
    const [ valuesAC, handleInputChangeAC, setValueAC ] = useFormAutoComplete(autoCompleteInputs);
    const [user, setUser] = useState([])
    const [books, setBooks] = useState([])
    const [changing, setChanging] = useState(false)
    const {id} = params;
    const history = useHistory();
    
    useEffect(() => {
        getUser(id)
        .then((result) =>{
            const { user } = result;
            if(user?.role === 'student') {
                setUser(user);
            }else{
                history.push(`/`)
            }
        })
    },[])
  
    useEffect(() => {
        setBooks(Books);
    },[])

    const handleAdd = () => {

    }
    const handleRemove = () => {

    }
    const handleSave = () => {

    }
    const handle = { 
        handleAdd, 
        handleRemove, 
        handleSave,
        handleInputChange,
        handleInputChangeAC
    }
    const variables = { 
        valuesAC,
        books, setBooks,
        errors, setErrors,
        user
    }
    return (
        <div>
            <UserUnion
                handle = { handle }
                variables = { variables } 
            />
        </div>
        )
}
