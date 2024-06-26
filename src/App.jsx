import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Slidar from './components/Slidar/Slidar';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Moto from './components/Moto/Moto';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';
import { I18nProvider } from './i18n/i18nProvider';





const App = () => {
  return (
    <I18nProvider>
      <NavBar />
      <section id="home">
        <Slidar />
        
      </section>
      <section id="about">
      <AboutUs />
        <Moto />
      </section>

      <section id="services">
        <Services />
        <Features />


      </section>

      <section id="locations">
      <ContactInfo />
      </section>


      <Footer />

    </I18nProvider>
  );
}

export default App;
