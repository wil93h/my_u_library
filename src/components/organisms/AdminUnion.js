import React from 'react'
import { AdministratorPanel } from '../molecules/AdministratorPanel';
import { AppBarCustom } from '../atoms/AppBarCustom';

export const AdminUnion = ({handle, variables}) => {
    const {admin} =variables;

    return (
        <div>
            <AppBarCustom
                user ={admin}
            />
            <AdministratorPanel
                handle = { handle }
                variables = { variables }

            />
        </div>

    )
}
