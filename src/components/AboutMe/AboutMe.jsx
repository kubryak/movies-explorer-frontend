import './AboutMe.css';
import photo from '../../images/kubryak.jpg';

export default function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>
        Студент
      </h2>
      <div className='about-me__info'>
        <div className='about-me__info-text'>
          <h3 className='about-me__name'>
            Александр
          </h3>
          <p className='about-me__job'>
            Фронтенд-разработчик, 24 года
          </p>
          <p className='about-me__description'>
            Я закончил магистратуру по направлению "Прикладная математика и информатика".
            На данный момент обучаюсь в аспирантуре на факультете математического моделирования и
            параллельно изучаю frontend-разработку.
            Стараюсь ходить в зал и правильно питаться, но это не мешает мне есть чипсы и пить лимонад.
            Люблю собак, хочу завести шоколадного лабрадора.
          </p>
          <a
            className='link about-me__link'
            href='https://github.com/kubryak'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__image' src={photo} alt='Фотография студента' />
      </div>
    </section>
  );
};
