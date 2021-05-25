import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name="edit-profile"
        title="Редактировать&nbsp;профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          noValidate
          className="form form_type_profile"
          id="form-profile"
          name="form-profile"
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                id="profile-name-input"
                type="text"
                className="form__input form__input_type_name"
                name="name"
                required
                minLength="2"
                maxLength="40"
                placeholder="Имя"
              />
              <span className="profile-name-input-error form__input-error"></span>
            </label>
            <label className="form__field">
              <input
                id="profile-caption-input"
                type="text"
                className="form__input form__input_type_caption"
                name="caption"
                required
                minLength="2"
                maxLength="200"
                placeholder="О себе"
              />
              <span className="profile-caption-input-error form__input-error"></span>
            </label>
            <button
              type="submit"
              className="form__submit button popup__save-btn popup__save-btn_type_profile-save"
            >
              Сохранить
            </button>
          </fieldset>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="new-post"
        title="Новое&nbsp;место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          noValidate
          className="form form_type_new-post"
          id="form-newpost"
          name="form-newpost"
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                id="card-name-input"
                type="text"
                className="form__input form__input_type_place-name"
                name="name"
                required
                minLength="2"
                maxLength="30"
                placeholder="Название"
              />
              <span className="card-name-input-error form__input-error"></span>
            </label>
            <label className="form__field">
              <input
                id="url-input"
                type="url"
                className="form__input form__input_type_pic"
                name="link"
                required
                placeholder="Ссылка на картинку"
              />
              <span className="url-input-error form__input-error"></span>
            </label>
            <button
              type="submit"
              className="form__submit button popup__save-btn popup__save-btn_type_place-save"
            >
              Сохранить
            </button>
          </fieldset>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить&nbsp;аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form
          noValidate
          className="form form_type_avatar"
          id="form-avatar"
          name="form-avatar"
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                id="avatar-input"
                type="url"
                className="form__input form__input_type_avatar"
                name="link"
                required
                placeholder="Ссылка на аватар"
              />
              <span className="avatar-input-error form__input-error"></span>
            </label>

            <button
              type="submit"
              className="form__submit button popup__save-btn popup__save-btn_type_avatar-save"
            >
              Сохранить
            </button>
          </fieldset>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы&nbsp;уверены?"
      >
        <form
          noValidate
          className="form form_type_confirm"
          id="form-confirm"
          name="form-confirm"
        >
          <button
            type="submit"
            className="form__submit button popup__save-btn popup__save-btn_type_confirm"
          >
            Да
          </button>
        </form>
      </PopupWithForm>
    </div>
  );
}
