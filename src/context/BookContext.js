import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(
        [
            { title: 'aku mantap', id: 1 },
            { title: 'memang mantap', id: 2 },
            { title: 'aku hebat', id: 3 }
        ]
    )


    const gantiTitle = (id, textTitle) => {
        console.log("ganti mantap", id)
        books.map(book => {
            return book.id === id ? book.title = textTitle : ''
        })
        setBooks([...books])
    }



return (
    <BookContext.Provider value={{ books, gantiTitle }}>
        {props.children}
    </BookContext.Provider>
)
}

export default BookContextProvider
