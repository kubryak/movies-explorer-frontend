import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import './Header.css';

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handlePopupClick() {
    setIsOpen(true);
    document.body.classList.add('no-scroll');
  }

  function closePopup() {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closePopup()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', close)
    }
    return () => {
      document.removeEventListener('keydown', close)
    }
  }, [isOpen])

  return (
    <>
      <header className='header'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} onClose={handlePopupClick} />
      </header>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </>
  );
};
