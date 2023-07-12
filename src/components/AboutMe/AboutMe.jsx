import './AboutMe.css';
import photo from '../../images/kubryak.jpg';

export default function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='about-me__info'>
        <h2 className='about-me__title'>
          Студент
        </h2>
        <h3 className='about-me__name'>
          Александр
        </h3>
        <p className='about-me__job'>
          Фронтенд-разработчик, 24 года
        </p>
        <p className='about-me__description'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className='link about-me__link'
          href='https://github.com/kubryak'
          target='_blank'
          rel="noreferrer"
        >
          Github
        </a>
        <img className='about-me__image' src={photo} alt='Фотография' />
      </div>
    </section>
  );
};
