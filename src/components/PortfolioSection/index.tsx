import { Link } from 'react-router-dom';
import ImagePortfolioBookmark from '../../assets/portfolio/bookmark/image-portfolio-bookmark.jpg';
import ImagePortfolioFylo from '../../assets/portfolio/fylo/image-portfolio-fylo.jpg';
import ImagePortfolioInsure from '../../assets/portfolio/insure/image-portfolio-insure.jpg';
import ImagePortfolioManage from '../../assets/portfolio/manage/image-portfolio-manage.jpg';
import ContainerContact from '../ContainerContact';
import './styles.css';

function PortfolioSection() {

    return (
        <section>
            <div
                className="container-projeto"
                id="id-ver-portifolios"
            >
                <div
                    className="imagem-gerir imagem"
                    style={{
                        backgroundImage: `url(${ImagePortfolioManage})`,
                        width: '55%'
                    }}
                ></div>
                <div className="texto-gerir borda-cima-baixo">
                    <h1>Manage</h1>
                    <p>
                        Esse projeto me fez criar uma landing page responsiza de acordo com
                        o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
                        interativas, como o slider de testimoniais.
                    </p>
                    <Link to="/manage"><button>VER PROJETO</button></Link>
                </div>
            </div>
            <div className="container-projeto">
                <div className="texto-gerir borda-cima-baixo">
                    <h1>Bookmark</h1>
                    <p>
                        Esse projeto me fez criar uma landing page responsiza de acordo com
                        o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas
                        interativas, como a área de Features.
                    </p>
                    <Link to="/bookmark"><button>VER PROJETO</button></Link>
                </div>
                <div
                    className="imagem-gerir imagem"
                    style={{
                        backgroundImage: `url(${ImagePortfolioBookmark})`,
                        width: '55%'
                    }}
                ></div>
            </div>
            <div className="container-projeto">
                <div
                    className="imagem-gerir imagem"
                    style={{
                        backgroundImage: `url(${ImagePortfolioInsure})`,
                        width: '55%'
                    }}
                ></div>
                <div className="texto-gerir borda-cima-baixo">
                    <h1>Insure</h1>
                    <p>
                        Este foi um projeto pequeno que consistiu em HTML e CSS
                        principalmente. Eu construí uma landing page totalmente responsiva.
                        O único JavaScript que usei foi para o menu de navegação mobile.
                    </p>
                    <Link to="/insure"><button>VER PROJETO</button></Link>
                </div>
            </div>
            <div className="container-projeto">
                <div className="texto-gerir borda-cima-baixo">
                    <h1>Fylo</h1>
                    <p>
                        Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e
                        desktop para construir, então ele foi totalmente responsivo. Eu
                        tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid
                        para criar o layout.
                    </p>
                    <Link to="/fylo"><button>VER PROJETO</button></Link>
                </div>
                <div
                    className="imagem-gerir imagem"
                    style={{
                        backgroundImage: `url(${ImagePortfolioFylo})`,
                        width: '55%'
                    }}
                ></div>
            </div>
            <div
                style={{
                    width: '91%'
                }}
            >
                <ContainerContact />
            </div>
        </section >
    );
}

export default PortfolioSection;