import { Link } from 'react-router-dom';
import LogoDark from '../../assets/logo-dark.svg';
import './styles.css';

function Header() {

    return (
        <header id="id-inicio">
            <div className='container-header' >
                <a href="#id-final">
                    <img src={LogoDark} alt="Logo" />
                </a>
                <div className='container-links'>
                    <Link to="/">HOME</Link>
                    <Link to="/portfolio">PORTIFÓLIO</Link>
                    <Link to="/contact">CONTATO</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;