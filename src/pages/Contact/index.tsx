import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

function Contact() {

    return (
        <div className="container-home">
            <Header />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Contact;