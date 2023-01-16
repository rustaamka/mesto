//добавляем ошибку
function showInputError(formElement, inputElement, config) {
  //находим ошибки (инпуты)
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  //добовляем спаны 
  errorElement.classList.add(config.errorClass);
  //добавляем дефолтно-браузерный текст ошибки
  errorElement.textContent = inputElement.validationMessage;
  //добавляем инпуту красную обводку
  inputElement.classList.add(config.inputErrorClass);
}

//убираем ошибку
function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
}


// проверка инпутув на валидацию
function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

//поиск валидности по всем инпутам
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
}

//блок кнопки
function disabledBtnPopup(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

//добавление обработчика на инпут
function setEventListeners(formElement, config) {
  //поиск инпутов
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

//блокировка кнопки Save
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    disabledBtnPopup(formElement, config)
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//добавление обработчика
inputList.forEach((inputElement) => {
  inputElement.addEventListener("input", () => {
    checkInputValidity(formElement, inputElement, config);
    toggleButtonState(inputList, buttonElement, config);
  })
})
}

function enableValidation(config) {
  //поиск формы
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  //поиск по массиву
  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}