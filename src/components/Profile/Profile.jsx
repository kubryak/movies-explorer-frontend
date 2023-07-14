import './Profile.css';

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <label for="" className="profile__input-label">Имя</label>
          <input type="text" className="profile__input" value='Виталий'/>
        </div>
        <div className="profile__input-container">
          <label for="" className="profile__input-label">E-mail</label>
          <input type="text" className="profile__input" value='pochta@yandex.ru' />
        </div>
        <div className="profile__buttons">
          <button className="link profile__button profile__button_type_edit">Редактировать</button>
          <button className="link profile__button profile__button_type_exit">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
};
