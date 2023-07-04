import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeSection from '../../components/HomeSection';
import './styles.css';

function Home() {
  return (
    <div className="container-home">
      <Header />
      <HomeSection />
      <Footer />
    </div>
  );
}

export default Home;
