import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LoggingUnion } from '../organisms/LoggingUnion'
import { admins, users } from '../../utils/variables'

export const LoggingTemplate = () => {
    const [ errors, setErrors ] = useState({errors:''});
    const history = useHistory();

    const handleViewAdmin = (id,name) => {
        history.push(`/admin/${name}/${id}`)
        console.log(id,'id')
    }
    const handleViewUser = (id,name) => {
        history.push(`/user/${name}/${id}`)
    }

    const variables = {
        errors, setErrors,
        users,admins
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
