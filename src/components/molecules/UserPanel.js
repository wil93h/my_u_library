import React from 'react'
import { BookList } from './BookList'

export const UserPanel = ({handle,variables}) => {
    const {handleAdd,handleRemove,} = handle;
    const { valuesAC,books, setBooks,errors, setErrors } = variables;
    return (
        <>
            <BookList
                handle = { handle }
                books = { books }
                errors = { errors.errors }
            />
        </>
    )
}
