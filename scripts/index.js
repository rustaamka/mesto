const profileButton = document.querySelector('.profile__button');
const profilePopup = document.querySelector('.popup-profile');
const profileCloseButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__form');
const namePopup = document.querySelector('.popup__input_value_name');
const jobPopup = document.querySelector('.popup__input_value_job');
const popupMain = document.querySelectorAll('.popup');

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc)
};

profileButton.addEventListener('click', () => {
  openPopup(profilePopup);
  namePopup.value = profileName.textContent
  jobPopup.value = profileJob.textContent
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

profileCloseButton.addEventListener('click', () => {
  closePopup(profilePopup);
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = namePopup.value;
  profileJob.textContent = jobPopup.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

//5
const buttonAddCardPopup = document.querySelector('.profile__button-rectangle');
const popupAddCard = document.querySelector('.popup-add');
const popupAddCardName = document.querySelector('.popup__input_value_text');
const popupAddCardLink = document.querySelector('.popup__input_value_link');
const popupImage = document.querySelector('.popup-image');
const popupInputImgText = document.querySelector('.popup-image__text');
const popupImageOpen = document.querySelector('.popup-image__open');
const popupCloseAddCard = document.querySelector('.popup__close_add');
const popupCloseImg = document.querySelector('.popup-image__close');
const popupFormAdd = document.querySelector('.popup__add-form');
const btnSubmitFormAddCard = popupFormAdd.querySelector('.popup__save');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//открытие попапа для добавления карточки
buttonAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddCard);
  disabledBtnPopup(popupAddCard, validationConfig);
});

//закрытие попапа добавления карточки
popupCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});

//закрытие попапа картинки
popupCloseImg.addEventListener('click', () => {
  closePopup(popupImage);
});


//добавление лайка
const toggleLike = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

const openBigImg = (img, text) => {
  openPopup(popupImage);
  popupImageOpen.src = img;
  popupImageOpen.alt = text;
  popupInputImgText.textContent = text;
};


//создание карточки
const elementContainer = document.querySelector('.elements');
const templateElements = document.querySelector('#template-elements');

//открытие картинки
const createCard = (name, link) => {
  const newCardAdd = templateElements.content.querySelector('.element').cloneNode(true);
  
  const elementCardImage = newCardAdd.querySelector('.element__image');
  
  newCardAdd.querySelector('.element__text').textContent = name;
  elementCardImage.src = link;
  elementCardImage.alt = name;


  //like
  newCardAdd.querySelector('.element__like').addEventListener('click', toggleLike);

  //deleteCard
  const deleteCard = newCardAdd.querySelector('.element__delete');
  deleteCard.addEventListener('click', () => {
    newCardAdd.remove();
  });

  //большая картинка
  elementCardImage.addEventListener('click', () => {
    openBigImg(link, name);
  });

  return newCardAdd;
};

//добавление карты
const addNewCard = (name, link) => {
  elementContainer.prepend(createCard(name, link));
};

//вставка из массива
initialCards.forEach ((element) => {
  addNewCard(element.name, element.link);
});

//добавление в галерею
const handleCardSave = (evt) => {
  evt.preventDefault();
  addNewCard(popupAddCardName.value, popupAddCardLink.value);
  closePopup(popupAddCard);
  popupFormAdd.reset();
};

popupFormAdd.addEventListener('submit', handleCardSave);

//6 практическая
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//закрытие попапа на Esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    //поиск попапа
    const popupCurrent = document.querySelector(".popup_opened");
    //удаление
    closePopup(popupCurrent);
  }
}

//закрытие на оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//добавляем слушатель на каждый попап
popupMain.forEach((popup) => {
  popup.addEventListener("click", closePopupOverlay);
})

enableValidation(validationConfig);


