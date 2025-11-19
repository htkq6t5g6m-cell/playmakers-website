import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClubBar from './components/ClubBar';
import AboutSection from './components/AboutSection';
import CoachesSection from './components/CoachesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import SessionsSection from './components/SessionsSection';
import VideoGallery from './components/VideoGallery';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <ClubBar />
        <AboutSection />
        <CoachesSection />
        <WhyChooseUsSection />
        <SessionsSection />
        <VideoGallery />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
