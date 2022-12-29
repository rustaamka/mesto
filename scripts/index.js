const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__form');
const namePopup = document.querySelector('.popup__input_value_name');
const jobPopup = document.querySelector('.popup__input_value_job');

profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('popup_opened');
  namePopup.value = profileName.textContent
  jobPopup.value = profileJob.textContent
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function valuesSave(evt) {
  evt.preventDefault();
  profileName.textContent = namePopup.value;
  profileJob.textContent = jobPopup.value;
  closePopup();
}

popupForm.addEventListener('submit', valuesSave);

//5
const buttonAddCardPopup = document.querySelector('.profile__button-rectangle');
const popupAddCard = document.querySelector('.popup__add-cards');
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
  popupAddCard.classList.add('popup_opened');
});

//закрытие попапа добавления карточки
popupCloseAddCard.addEventListener('click', () => {
  popupAddCard.classList.remove('popup_opened');
});

//добавление лайка
const likeAddClick = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

const openBigImg = (img, text) => {
  popupImage.classList.add('popup_opened');
  popupImageOpen.src = img;
  popupImageOpen.alt = text;
  popupInputImgText.textContent = text;
}


//создание карточки
const elementContainer = document.querySelector('.elements');
const templateElements = document.querySelector('#template-elements');

//открытие картинки
const openNewCard = (name, link) => {
  const newCardAdd = templateElements.content.querySelector('.element').cloneNode(true);

  newCardAdd.querySelector('.element__text').textContent = name;
  newCardAdd.querySelector('.element__image').alt = name;
  newCardAdd.querySelector('.element__image').src = link;
  

  //like
  newCardAdd.querySelector('.element__like').addEventListener('click', likeAddClick);

  //deleteCard
  const deleteCard = newCardAdd.querySelector('.element__delete');
  deleteCard.addEventListener('click', () => {
    newCardAdd.remove();
  });

  //большая картинка
  newCardAdd.querySelector('.element__image').addEventListener('click', () => {
    openBigImg(link, name);
  });

  return newCardAdd;
};

//добавление карты
const addNewCard = (name, link) => {
  elementContainer.prepend(openNewCard(name, link));
};

//вставка из массива
initialCards.forEach ((element) => {
  addNewCard(element.name, element.link);
});

//добавление в галерею

const cardsSave = (evt) => {
  evt.preventDefault();
  addNewCard(popupAddCardName.value, popupAddCardLink.value);
  popupAddCard.classList.remove('popup_opened');
  popupAddCard.classList.remove('popup__add-form');
  popupFormAdd.reset();
};

popupFormAdd.addEventListener('submit', cardsSave);

























