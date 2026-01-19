import GithubDark from '../../assets/icons/github-dark.svg';
import LinkedinDark from '../../assets/icons/linkedin-dark.svg';
import TwitterDark from '../../assets/icons/twitter-dark.svg';
import './styles.css';

function ContactSection() {

    return (
        <section>
            <div className="entre-em-contato borda-cima-baixo" id="id-entre-em-contato">
                <h1>Entre em Contato</h1>
                <div className="container-texto-links">
                    <p>
                        Eu adoraria escutar sobre seu trabalho atual e como eu poderia
                        ajudar. Atualmente estou procurando por um cargo e aberto para
                        várias oportunidades. Minha preferência é uma oportunidade em uma
                        empresa Britânica. Mas também estou feliz em escutar sobre
                        oportunidades remotas. Sou uma pessoa trabalhadora e positiva que
                        sempre fará as tasks com um senso de propósito e atenção aos
                        detalhes. Fique livre para checar meu perfis abaixo e entrar em
                        contato utilizando o formulário.
                    </p>
                    <div className="container-urls">
                        <a href="https://github.com/leonardonasccimento">
                            <img src={GithubDark} alt="Github" />
                        </a>
                        <a href="https://twitter.com/">
                            <img src={TwitterDark} alt="Twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/leonardo-nascimento-06037b218">
                            <img src={LinkedinDark} alt="Linkedin" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="contato-enviar">
                <h1>Contato</h1>
                <div className="enviar">
                    <label htmlFor="id-nome">
                        Nome
                        <input type="text" id="id-nome" />
                    </label>
                    <label htmlFor="id-email">
                        E-mail
                        <input type="email" id="id-email" />
                    </label>
                    <label htmlFor="id-mensagem">
                        Mensagem
                        <input
                            type="text"
                            id="id-mensagem"
                        />
                    </label>
                    <button type='button'>ENVIAR</button>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;