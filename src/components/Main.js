import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [cards, setData] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    api.getCardsInfo()
    .then((cards) => { setData(cards) })
    .catch((err) => { console.log(err) });
  }, []);

  useEffect(() => {
    api.getUserInfo()
    .then((user) => { setUser(user) })
    .catch((err) => { console.log(err) });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img className="profile__pic" src={user.avatar} alt="фото профиля" />
        </div>
        <h1 className="profile__title">{user.name}</h1>
        <p className="profile__subtitle">{user.about}</p>
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
          {cards.map((card, i) => (
            <Card key={i} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
