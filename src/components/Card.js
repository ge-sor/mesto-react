import React from "react";

export default function Card({ card, onCardClick }) {
  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={(_) => onCardClick(card)}
      />
      <div className="card__caption">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__likes-container">
          <button type="button" className="button card__like-btn"></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="button card__delete-btn"></button>
    </li>
  );
}
