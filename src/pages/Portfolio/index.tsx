import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PortfolioSection from '../../components/PortfolioSection';
import './styles.css';

function Portfolio() {

    return (
        <div className="container-home">
            <Header />
            <PortfolioSection />
            <Footer />
        </div>
    );
}

export default Portfolio;