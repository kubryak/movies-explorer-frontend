import { HashLink as Link } from "react-router-hash-link";
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__list-item'>
          <Link className='link nav-tab__link' smooth to='#about-project'>
            О проекте
          </Link>
        </li>
        <li className='nav-tab__list-item'>
          <Link className='link nav-tab__link' smooth to='#techs'>
            Технологии
          </Link>
        </li>
        <li className='nav-tab__list-item'>
          <Link className='link nav-tab__link' smooth to='#about-me'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};
