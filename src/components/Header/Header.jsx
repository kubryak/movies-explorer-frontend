import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import Popup from '../Popup/Popup';
import './Header.css';

export default function Header({ isLoggedIn, onClose, isOpen, onPopupClick }) {
  return (
    <>
      <header className='header'>
        <Logo />
        <Navigation isLoggedIn={isLoggedIn} onClick={onPopupClick} />
      </header>
      <Popup isOpen={isOpen} onClose={onClose} />
    </>
  );
};
