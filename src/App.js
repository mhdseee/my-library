import {Link, Outlet} from 'react-router-dom'
const App = ()=>{
    return(
        <div>
            <h2 className='App'>My Library</h2>
        <nav>
            <Link to='/About'>About</Link>
            <Link to='/Books'>Books</Link>
        </nav>
        <Outlet/>
        </div>
    )
}
export default App
