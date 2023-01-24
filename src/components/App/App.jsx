import Header from '../Header/Header';
import About from '../About/About';
import '../../resources/styles/App.css';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Hobbies from '../Hobbies/Hobbies';

export default function App() {
  // TODO: Add projects section, include website, black sheep barkeep and client scheduler?
  


  return (
    <div className='App light'>
      <Header />
      <div>
        <About />
        <Experience />
        <Hobbies />
      </div>
      <Footer />
    </div>
  );
}
