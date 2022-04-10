import React from 'react'
import { useParams } from 'react-router-dom'
import { UserTemplate } from '../components/templates/UserTemplate'

export const UserView = () => {
    const params = useParams();
    return (
        <div>
            <UserTemplate
                params = { params }
            />
        </div>
    )
}
