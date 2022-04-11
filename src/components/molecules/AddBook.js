import React from 'react'
import { TextFieldCustom } from '../atoms/TextFieldCustom'

export const AddBook = ({handle,values,errors}) => {
    const {title,author,publishedYear,genre} = values;
    return (
        <div>
            <div>
                <TextFieldCustom
                    id = { 'title' }
                    name = { 'title' }
                    value = { title }
                    label ='Title'
                    onChange = { handle }
                    min = '250px' 
                    max = '250px'
                    errors = { errors['title'] }
                />
            </div>
            <div>
                <TextFieldCustom
                    id = { 'author' }
                    name = { 'author' }
                    value = { author }
                    label ='Author'
                    onChange = { handle }
                    min = '350px' 
                    max = '400px'
                    errors = { errors['author'] }
                />
            </div>
            <div>
                <TextFieldCustom
                    id = { 'publishedYear' }
                    name = { 'publishedYear' }
                    value = { publishedYear }
                    label ='Published Year'
                    onChange = { handle }
                    min = '150px' 
                    max = '175px'
                    errors = { errors['publishedYear'] }
                />
            </div>
            <div>
                <TextFieldCustom
                    id = { 'genre' }
                    name = { 'genre' }
                    value = { genre }
                    label ='Genre'
                    onChange = { handle }
                    min = '150px' 
                    max = '175px'
                    errors = { errors['genre'] }
                />
            </div>
        </div>

    )
}
