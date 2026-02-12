'use client';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
