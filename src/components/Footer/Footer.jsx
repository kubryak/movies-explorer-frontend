import './Footer.css';

export default function Footer() {
  return (
    <section className='footer' id='footer'>
      <p className='footer__authors'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copy'>&copy; {(new Date().getFullYear())}</p>
        <ul className='footer__links'>
          <li className='footer_links-item'>
            <a
              className='link footer__link'
              href='https://practicum.yandex.ru'
              target='_blank'
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer_links-item'>
            <a
              className='link footer__link'
              href='https://github.com/kubryak'
              target='_blank'
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
