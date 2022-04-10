import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminTemplate } from '../components/templates/AdminTemplate'

export const AdminView = () => {
    const params = useParams();
    return (
        <AdminTemplate
            params = { params }
        />
    )
}
