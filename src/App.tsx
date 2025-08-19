import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set initial dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Auto-hide preloader after 3 seconds if it gets stuck
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [darkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <AnimatePresence mode='wait'>
        <Preloader 
          isLoading={isLoading} 
          onComplete={() => setIsLoading(false)} 
        />
      </AnimatePresence>
      
      <div className="bg-cream-50 dark:bg-gray-900 text-brown-800 dark:text-cream-100 transition-colors duration-300">
        <Navigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
        <MobileBottomNav 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;