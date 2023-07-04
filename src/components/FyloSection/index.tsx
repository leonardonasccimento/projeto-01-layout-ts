import { Link } from 'react-router-dom';
import ArrowLeft from '../../assets/icons/arrow-left.svg';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import ImageFyloHero from '../../assets/portfolio/fylo/image-fylo-hero.jpg';
import ImageFyloPreview1 from '../../assets/portfolio/fylo/image-fylo-preview-1.jpg';
import ImageFyloPreview2 from '../../assets/portfolio/fylo/image-fylo-preview-2.jpg';
import ContainerContact from '../ContainerContact';
import './styles.css';

function FyloSection() {

    return (
        <section>
            <div
                style={{
                    backgroundImage: `url(${ImageFyloHero})`
                }}
                className="gerir-imagem imagem"
            ></div>
            <div className="container-gerir">
                <div
                    style={{
                        width: '35%'
                    }}
                    className="container-manage borda-cima-baixo"
                >
                    <h1>Fylo</h1>
                    <p>
                        Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop
                        para construir, então ele foi totalmente responsivo. Eu tomei um caminho
                        mobile-first e usei CSS moderno como Flexbox e Grid para criar o layout.
                    </p>
                    <div className="container-habilidades">
                        <span>Interaction Design / Front End Development</span><br /><br />
                        <span>HTML / CSS / JS</span>
                    </div>
                    <button type='button'>VISITAR</button>
                </div>
                <div
                    style={{
                        width: '60%'
                    }}
                    className="visualizacoes-estaticas"
                >
                    <h2>Projeto</h2>
                    <p>
                        Este projeto foi um desafio de front-end do
                        <b> Frontend Mentor</b>. É uma plataforma que te faz práticar
                        construindo websites a partir de um design e casos de usuário. Cada
                        desafio contém designs mobile e desktop para ilustrar como o website
                        seria em diferentes tamanhos de tela. Criar esses projetos me ajudou
                        a refinar meu fluxo de trabalho e resolver problemas de código da
                        vida real. Eu aprendi algo novo com cada projeto, me ajudando a
                        melhorar e adaptar meu estilo.
                    </p>
                    <div className="visualizacoes-imagem">
                        <h2>Previews Estáticos</h2>
                        <div
                            style={{
                                backgroundImage: `url(${ImageFyloPreview1})`
                            }}
                            className="imagem"
                        ></div>
                        <div
                            style={{
                                backgroundImage: `url(${ImageFyloPreview2})`
                            }}
                            className="imagem"
                        ></div>
                    </div>
                </div>
            </div>
            <div className="container-carrossel borda-cima-baixo">
                <div className="proximo-esquerda filo-marca-paginas">
                    <Link
                        to="/insure"
                    >
                        <img
                            className='seta-esquerda'
                            src={ArrowLeft}
                            alt="Esquerda"
                        />
                        <div className="item-filo">
                            <h2>Insure</h2>
                            <span>Projeto Anterior</span>
                        </div>
                    </Link>
                </div>
                <div className="proximo-direita filo-marca-paginas">
                    <Link to="/manage">
                        <div className="item-marca-paginas">
                            <h2>Manage</h2>
                            <span>Próximo Projeto</span>
                        </div>
                        <img
                            src={ArrowRight}
                            alt="Direita"
                        />
                    </Link>
                </div>
            </div>
            <ContainerContact />
        </section>
    );
}

export default FyloSection;