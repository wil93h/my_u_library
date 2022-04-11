import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { AdminUnion } from '../organisms/AdminUnion'
import { getUser } from '../../utils/variables'
import { useForm } from '../../hooks/useForm'
import { useFormAutoComplete } from '../../hooks/useFromAutoComplete'
import postData from '../../service/postData'

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
    const {firstName,lastName,email,role,title,author,publishedYear,genre} = values;
    const {id} = params;
    const history = useHistory();

    useEffect(() => {
        getUser(id)
        .then((result) =>{
            const { user } = result;
            if(user?.role === 'admin') {
                setAdmin(user);
            }else{
                history.push(`/`)
            }
        })
       
    },[])

    const handleSaveUser = async() => {
        let result = await postData('users',{firstName,lastName,email,role})
        if(result?.data?.success){
            alert(result.data.msg);
            setValue(inputNames);
        }
        console.log(result,'resultSaveUser');
    }
    const handleSaveBook = async() => {
        let result = await postData('books',{title,author,publishedYear,genre})
        if(result?.data?.success){
            alert(result.data.msg);
            setValue(inputNames);
        }
        console.log(result,'resultSaveUser');
    }
    const handleFindUserBook = () => {
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
