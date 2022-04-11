import { ConstructionOutlined } from '@mui/icons-material';
import React from 'react'
import { CardCustom } from '../atoms/CardCustom'

export const BookList = ({handle,books,errors}) => {
    const {addBook, removeBook} = handle;
    return (
            <div className="user-book-list">
                {books.length > 0?
                    books?.map((book) =>{
                        console.log(book.title)
                        return(
                        <div key = { book.id}>
                            <CardCustom
                                title = { book.title }
                                author = { book.author }
                                publishedYear = { book.publishedYear }
                                genre = { book.genre }
                                qty = { book.qty } 
                                addBook = { addBook } 
                                removeBook = { removeBook } 
                            />
                        </div>
                        )}
                    )
                    :
                    null

                }

                
            </div>
    )
}
