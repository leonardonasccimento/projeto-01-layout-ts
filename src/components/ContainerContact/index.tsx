import { Link } from 'react-router-dom';
import './styles.css';

function ContainerContact() {

    return (
        <div className="container-contato">
            <h1>Interessado em fazer projetos comigo?</h1>
            <Link to="/contact"><button type='button'>CONTATO</button></Link>
        </div>
    );
}

export default ContainerContact;