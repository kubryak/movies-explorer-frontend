import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__block'>
          <h3 className='about-project__block-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__block-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__block'>
          <h3 className='about-project__block-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__block-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__stages'>
        <p className='about-project__weeks'>
          1 неделя
        </p>
        <p className='about-project__weeks about-project__weeks_frontend'>
          4 недели
        </p>
        <span className='about-project__span'>
          Back-end
        </span>
        <span className='about-project__span'>
          Front-end
        </span>
      </div>
    </section>
  );
};
