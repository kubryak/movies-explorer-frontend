import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className='header'>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
};
