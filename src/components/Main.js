import React from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCardsInfo()
    .then((cards) => { setCards(cards) })
    .catch((err) => { console.log(err) });

    api.getUserInfo()
    .then((user) => { 
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar)
     })
    .catch((err) => { console.log(err) });
  }, []);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__pic" src={userAvatar} alt="фото профиля" />
        </div>
        <h1 className="profile__title">{userName}</h1>
        <p className="profile__subtitle">{userDescription}</p>
        <button
          type="button"
          onClick={onEditProfile}
          className="button profile__edit-btn"
        ></button>
        <button
          type="button"
          onClick={onAddPlace}
          className="button profile__post-btn"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
