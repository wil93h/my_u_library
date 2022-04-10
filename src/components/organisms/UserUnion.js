import React from 'react'
import { UserPanel } from '../molecules/UserPanel'
import { AppBarCustom } from '../atoms/AppBarCustom';

export const UserUnion = ({handle, variables}) => {
    const {user} =variables;

    return (
        <div>
            <AppBarCustom
                user ={user}
            />
            <UserPanel
                handle = { handle }
                variables = { variables }
            />
        </div>
    )
}
