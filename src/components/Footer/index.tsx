import { Link } from 'react-router-dom';
import GithubLight from '../../assets/icons/github-light.svg';
import LinkedinLight from '../../assets/icons/linkedin-light.svg';
import TwitterLight from '../../assets/icons/twitter-light.svg';
import LogoLight from '../../assets/logo-light.svg';
import './styles.css';


function Footer() {

    return (
        <footer>
            <div className="container-footer">
                <div className="container-logo-links" id="id-final">
                    <a href="#id-inicio">
                        <img src={LogoLight} alt="Logo" />
                    </a>
                    <div className="container-links link-color">
                        <Link to="/">HOME</Link>
                        <Link to="/portfolio">PORTIFÓLIO</Link>
                        <Link to="/contact">CONTATO</Link>
                    </div>
                </div>
                <div className="container-urls">
                    <a href="https://github.com/">
                        <img src={GithubLight} alt="Github" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src={TwitterLight} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={LinkedinLight} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;