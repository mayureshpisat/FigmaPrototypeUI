import './NavBar.css'
import { useNavigate, Link } from 'react-router-dom'


export function NavBar(){
    let navigate = useNavigate();
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/" style={{color:"inherit", textDecoration: "none"}}>Home</Link></li>
                <li><Link to="/features" style={{color:'inherit', textDecoration: "none"}}> Features </Link></li>
                <li><Link to="/pricing" style={{color:'inherit', textDecoration: "none"}}> Pricing </Link></li>
                <li>Blogs</li>
            </ul>
        </nav>
    )

}
