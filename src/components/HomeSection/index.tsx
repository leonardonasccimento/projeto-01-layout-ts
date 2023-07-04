import { Link } from 'react-router-dom';
import ImageHomepageHero from '../../assets/home/image-homepage-hero.jpg';
import ImageHomepageProfile from '../../assets/home/image-homepage-profile.jpg';
import DownArrows from '../../assets/icons/down-arrows.svg';
import ContainerContact from '../ContainerContact';
import './styles.css';

function HomeSection() {

    return (
        <section>
            <div
                className="apresentacao-imagem imagem"
                style={{
                    backgroundImage: `url(${ImageHomepageHero})`
                }}
                id="id-apresentacao"
            >
                <div className="apresentacao-texto">
                    <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
                </div>
                <a href="#id-sobre">
                    <button type='button'>
                        <img src={DownArrows} alt="Para baixo" />
                        <span>SOBRE MIM</span>
                    </button>
                </a>
            </div>
            <div className="perfil-imagem imagem">
                <div
                    className="imagem"
                    style={{
                        backgroundImage: `url(${ImageHomepageProfile})`,
                        width: '45%'
                    }}
                ></div>
                <div className="perfil-descricao">
                    <h1 id="id-sobre">Sobre mim</h1>
                    <p>
                        Sou um desenvolvedor front-end júnior procurando por uma
                        oportunidade. Eu foco em escrever HTML acessível, usando práticas
                        modernas de CSS e escrevendo um JavaScript limpo. Quando estou
                        escrevendo código JavaScript, na maioria das vezes estou usando
                        React, mas posso me adaptar para qualquer ferramenta se necessário.
                        Moro em Londres, UK, mas também seria feliz trabalhando remotamente
                        e tenho experiência em times remotos. Quando não estou codando,
                        poderá me achar fora de casa. Eu adoro estar próximo a natureza seja
                        para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma
                        olhada no meu trabalho.
                    </p>
                    <Link to="/portfolio"><button>IR PARA PORTFOLIO</button></Link>
                </div>
            </div>
            <ContainerContact />
        </section>
    );
}

export default HomeSection;