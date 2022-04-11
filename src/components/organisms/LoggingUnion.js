import React from 'react'
import { AdministratorArea } from '../molecules/AdministratorArea'
import { UserArea } from '../molecules/UserArea'

export const LoggingUnion = ({handle ,variables}) => {
    const {handleViewAdmin,handleViewUser} = handle;
    const {students,admins} = variables;
    return (
        <div>
            <div  className="logging-container">
                <AdministratorArea
                    handle = { handleViewAdmin }
                    admins = { admins } 
                />
            </div>
            <div className="logging-container">
                <UserArea
                    handle = { handleViewUser }
                    students = { students }
                />
            </div>
        </div>
    )
}
