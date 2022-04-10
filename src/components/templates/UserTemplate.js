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
    const {id,firstName} = params;
    const history = useHistory();
    
    useEffect(() => {
        let userView = getUser(id);
        if(userView?.role === 'student') {
            setUser(userView);
        }else{
            history.push(`/`)
        }
    })
    console.log(Books,'B')
    useEffect(() => {
        setBooks(Books);
    },[])
    console.log(books,'b')
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
