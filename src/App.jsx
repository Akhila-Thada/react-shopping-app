
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import FooterPage from './components/FooterPage';
import SignupLogin from './components/SignupLogin';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);  // state to manage modal visibility

  const handleOpenAuth = () => {
    setIsAuthOpen(true);
  };

  const handleCloseAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <>
      <Navbar />
      <Filter onOpenAuth={handleOpenAuth} />
      <FooterPage />

      
      {isAuthOpen && <SignupLogin onClose={handleCloseAuth} />}
    </>
  );
}

export default App;
