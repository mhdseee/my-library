import {useParams} from "react-router-dom"
import {getBook}  from "../data/data"
import '../App.css'
const Book = ()=>{
    const params= useParams()
    const book= getBook(params.BookId)
    if(book){
        return(
            <div className='App'>
                <p>{book.name}</p>
                <p>{book.price}</p>
                <p>{book.author}</p>
                {/* <div>{book.Image}</div> */}
            </div>
        )
    }else{
        return(
            <div className="not">
                this book is not available
            </div>
        )
    }
}
export default Book