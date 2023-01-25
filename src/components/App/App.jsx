import React, { useState } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import '../../resources/styles/App.css';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';

export default function App() {
  // TODO: Add projects section, include website, black sheep barkeep and client scheduler?
  // TODO: Add light/dark toggle
  // TODO: Finish hobbies! 
  // TODO: Figure out responsive desktop layout!
  // TODO: Resume redirect component to refresh on mount

  const [isLightUI, setIsLightUI] = useState(true);

  return (
    <div className={ isLightUI ? 'light' : 'dark' }>
      <Header isLightUI={ isLightUI } setIsLightUI={ setIsLightUI } />
      <div>
        <About />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}
