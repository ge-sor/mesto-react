import React from "react";
import Card from "./Card";

export default function Main({
  currentUser,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar}>
          <img
            className="profile__pic"
            src={currentUser.avatar}
            alt="фото профиля"
          />
        </div>
        <h1 className="profile__title">{currentUser.name}</h1>
        <p className="profile__subtitle">{currentUser.about}</p>
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
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              currentUser={currentUser}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
