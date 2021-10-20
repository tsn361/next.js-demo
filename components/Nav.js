import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <nav className={navStyle}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
        
    )
}

export default Layout