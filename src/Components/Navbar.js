import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Pocetna</Link></li>
                <li><Link to="/about">O nama</Link></li>
                <li><Link to="/usluge">Usluge</Link></li>
                <li><Link to="/galery">Portfolio</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
            </ul>

        </nav>
    );
}

export default Navbar;