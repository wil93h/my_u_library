import React from 'react'
import { SelectRow } from '../atoms/SelectRow';
import { TextFieldCustom } from '../atoms/TextFieldCustom'
import { getRole } from '../../utils/variables'

export const AddUser = ({handle,values,errors}) => {
    const {firstName,lastName,email,role} = values;
    
    return (
        <div className="admin-form-add-user mt-5">
            <div className="admin-form-name mb-5">
                <TextFieldCustom
                    id = { 'firstName' }
                    name = { 'firstName' }
                    value = { firstName }
                    label ='First Name'
                    onChange = { handle }
                    min = '150px' 
                    max = '175px'
                    errors = { errors['firstName'] }
                />
                <TextFieldCustom
                    id = { 'lastName' }
                    name = { 'lastName' }
                    value = { lastName }
                    label ='Last Name'
                    onChange = { handle }
                    min = '150px' 
                    max = '175px'
                    errors = { errors['lastName'] }
                />
            </div>
            <div className="mb-5">
                <TextFieldCustom
                    id = { 'email' }
                    name = { 'email' }
                    value = { email }
                    label ='Email'
                    onChange = { handle }
                    min = '300px' 
                    max = '425px'
                    errors = { errors['email'] }
                />
            </div>
            <div>
                <SelectRow
                    id = {'role'}
                    name = { 'role' }
                    value = { role }
                    onChange = { handle }
                    label = {'Role'}
                    map = { getRole }
                    errors = { errors['role'] }
                />
            </div>
        </div>
    )
}
