import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoggingUnion } from '../organisms/LoggingUnion'
import { users } from '../../utils/variables'

export const LoggingTemplate = () => {
    const [ errors, setErrors ] = useState({errors:''});
    const [students, setStudents] = useState([]);
    const [admins, setAdmins] = useState([])
    const history = useHistory();
    useEffect(() => {
        users()
        .then((result) => {
            setAdmins(result.admins);
            setStudents(result.students);
        })
    }, [])
    
    const handleViewAdmin = (id,name) => {
        history.push(`/admin/${name}/${id}`)
    }
    const handleViewUser = (id,name) => {
        history.push(`/user/${name}/${id}`)
    }
    const variables = {
        errors, setErrors,
        students,admins
    }
    const handle = {
        handleViewAdmin,
        handleViewUser
    }

    return (
        <div>
            <LoggingUnion
                handle = { handle }
                variables = { variables }
            />
        </div>
    )
}
