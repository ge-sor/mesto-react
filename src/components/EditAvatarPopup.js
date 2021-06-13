import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить&nbsp;аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        noValidate
        className="form form_type_avatar"
        id="form-avatar"
        name="form-avatar"
        onSubmit={handleSubmit}
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
              ref={avatarRef}
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
  );
}
