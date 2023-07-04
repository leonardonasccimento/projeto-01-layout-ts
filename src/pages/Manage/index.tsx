import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ManageSection from '../../components/ManageSection';
import './styles.css';

function Manage() {

    return (
        <div className="container-home">
            <Header />
            <ManageSection />
            <Footer />
        </div>
    );
}

export default Manage;