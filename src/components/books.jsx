import {getBooks} from '../data/data'
import {NavLink, Outlet} from 'react-router-dom'
import "../App.css"
const Books = ()=>{
    let books = getBooks()
    return(
        <div>
            <div className="list">
                {
                    books.map(book =>(
                        <NavLink 
                        style={({isActive})=>{
                            return{
                                color : isActive ? 'seagreen' : ''
                            }
                        }}
                        to={book.id} key={book.id}>
                            {book.name}
                        </NavLink>
                    ))
                }
            </div> 
            <Outlet/>
        </div>
    )
}
export default Books