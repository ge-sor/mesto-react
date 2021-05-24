import React from "react";

export default function PopupWithForm({
  onClose,
  children,
  isOpen,
  name,
  title,
}) {
  return (
    <section
      id={`popup-${name}`}
      className={`popup popup_type_${name}  ${isOpen ? "popup_opened" : ""} `}
    >
      <div className="popup__container">
        <button
          type="button"
          className="button popup__close-btn"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
