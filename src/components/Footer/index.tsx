import { Link } from 'react-router-dom';
import GithubLight from '../../assets/icons/github-light.svg';
import LinkedinLight from '../../assets/icons/linkedin-light.svg';
import TwitterLight from '../../assets/icons/twitter-light.svg';
import LogoLight from '../../assets/logo-light.svg';
import './styles.css';


function Footer() {

    return (
        <footer id='id-final'>
            
            <div className="container-footer">
                <div className="container-logo" >
                    <a href="#id-inicio">
                        <img className='img-logo-light' src={LogoLight} alt="Logo" />
                    </a>
                    {/* <div className="container-links-footer link-color">
                        <Link to="/">HOME</Link>
                        <Link to="/portfolio">PORTIFÓLIO</Link>
                        <Link to="/contact">CONTATO</Link>
                    </div> */}
                </div>
                <div className="container-urls">
                    <a href="https://github.com/leonardonasccimento">
                        <img src={GithubLight} alt="Github" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src={TwitterLight} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-nascimento-06037b218">
                        <img src={LinkedinLight} alt="Linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;