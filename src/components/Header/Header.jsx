import { HashLink as Link } from "react-router-hash-link";
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({ isLoggedIn }) {
  return (
    <header className='header'>
      <Link className='link logo' to='/' />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
};
