import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AdminUnion } from '../organisms/AdminUnion'
import { getAdmin } from '../../utils/variables'
import { useForm } from '../../hooks/useForm'
import { useFormAutoComplete } from '../../hooks/useFromAutoComplete'

const inputNames = {
    //user
    firstName:'',
    lastName:'',
    email:'',
    role:'',
    //book
    title:'',
    author:'',
    publishedYear:'',
    genre:'',

}
const autoCompleteInputs = {
    searchUser:'',

}

export const AdminTemplate = ({params}) => {
    const [ errors, setErrors ] = useState({errors:''});
    const [ values, handleInputChange, setValue ] = useForm(inputNames);
    const [ valuesAC, handleInputChangeAC, setValueAC ] = useFormAutoComplete(autoCompleteInputs);
    const [admin, setAdmin] = useState()

    const {id,firstName} = params;
    const history = useHistory();

    useEffect(() => {
        let adminView = getAdmin(id);
        if(adminView?.role === 'admin') {
            return setAdmin(adminView);
        }else{
            return history.push(`/`)
        }
    })

    const handleSaveUser = (user) => {
        console.log(values)
    }
    const handleSaveBook = (book) => {
        console.log(values)
    }
    const handleFindUserBook = (user) => {
        console.log(valuesAC)
    }
    const handle = {
        handleSaveUser,
        handleSaveBook,
        handleFindUserBook,
        handleInputChange,
        handleInputChangeAC,
    }
    const variables = {
        values, 
        valuesAC,
        admin, setAdmin,
        errors, 
    }
    return (
        <AdminUnion
            handle = { handle }
            variables = { variables } 
        />
    )
}
