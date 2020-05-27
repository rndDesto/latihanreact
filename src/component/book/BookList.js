import React, { useContext, useState, useEffect } from 'react'
import { BookContext } from '../../context/BookContext'

const BookList = () => {
    const { books, gantiTitle } = useContext(BookContext)

    let newBooks = books.map(book => {
        return {
            ...book,
            toggle: false
        }
    })

    const [newBook, setNewBook] = useState(newBooks)

    useEffect(() => {
        console.log('newBook = ', newBook)
        console.log('books = ', books)
    })

    const showGanti = (id) => {
        console.log('ss = ', id)
        newBook.map(data => {
            return data.id === id ? data.toggle = true : data.toggle = false
        })
        setNewBook([...newBook])
    }

    const textIsUpdating = (id, textTitle) =>{
        newBook.map(book => {
            return book.id === id ? book.title = textTitle : ''
        })
        setNewBook([...newBook])
    }

    const confirmUpdate = (id) =>{
        newBook.map(data => {
            if(data.id === id){
                gantiTitle(id, data.title)
                data.toggle = false
            }
            
        })
       

    }
    let BookLists;

    if (books.length === 0) {
        BookLists = <p>kosong</p>
    }
    else {
        BookLists = newBook.map(book => {

            if(book.toggle){
                return (<React.Fragment key={book.id}>
                    <input type="text" defaultValue={book.title} onChange={(e) => textIsUpdating(book.id, e.target.value)} />
                    <button onClick={() => confirmUpdate(book.id)}>update</button>
                </React.Fragment>
                )
            }
            else{
                return(
                <p key={book.id} onClick={() => showGanti(book.id)}>{book.title}</p>
                )
            }
            
            // return (
            //     <React.Fragment key={book.id}>
            //         <input className={[book.toggle ? '':'dn','sss'].join(' ')} type="text" defaultValue={book.title} onChange={(e) => updateTitla(book.id, e.target.value)} />
                    
                    
            //         <p className={book.toggle ? 'dn':''} onClick={() => showGanti(book.id)}>{book.title}</p>
                    
                    
            //     </React.Fragment>
            // )
        })
    }
    return (
        <React.Fragment>
            {BookLists}
        </React.Fragment>
    )
}

export default BookList
