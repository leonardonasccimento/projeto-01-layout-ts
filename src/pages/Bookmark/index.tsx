import BookmarkSection from '../../components/BookmarkSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

function Bookmark() {

    return (
        <div className="container-home">
            <Header />
            <BookmarkSection />
            <Footer />
        </div>
    );
}

export default Bookmark;