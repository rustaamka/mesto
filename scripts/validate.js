function showInputError(formList, inputList, config) {
  //находим ошибки (инпуты)
  const errorElement = formList.querySelector(`.${inputList.id}-error`);

  //добовление спанов
  errorElement.classList.add(config.errorClass);
  //браузерный текст ошибки
  errorElement.textContent = inputList.validationMessage;
  //красная обводка
  inputList.classList.add(config.inputErrorClass);
}

//убираем ошибку
function hideInputError(formList, inputList, config) {
  const errorElement = formList.querySelector(`.${inputList.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
  inputList.classList.remove(config.inputErrorClass);
}

//
function hasInvalidInput(inputElement) {
  return inputElement.some((inputList) => !inputList.validity.valid);
}

// проверка на валидность
function checkInputValidity(formList, inputList, config) {
  if (inputList.validity.valid) {
    hideInputError(formList, inputList, config);
  } else {
    showInputError(formList, inputList, config);
  }
}

//добавление обработчиков
function setEventListeners(formList, config) {
  //поиск инпутов
  const inputElement = Array.from(formList.querySelectorAll(config.inputSelector));
  const buttonElement = formList.querySelector(config.submitButtonSelector);

//навешиваем обработчики событий на инпуты
inputElement.forEach((inputList) => {
  inputList.addEventListener('input', () => {
    checkInputValidity(formList, inputList, config);
    toggleButtonState(inputElement, buttonElement, config);
  })
})
}

//блокирует кнопку
function toggleButtonState(inputElement, buttonList, config) {
  if (hasInvalidInput(inputElement)) {
    buttonList.classList.add(config.inactiveButtonClass);
    buttonList.disabled = true;
  } else {
    buttonList.classList.remove(config.inactiveButtonClass);
    buttonList.disabled = false;
  }
}


function enableValidation(config) {
  //находим каждую форму 
  const formElement = Array.from(document.querySelectorAll(config.formSelector));
  //проходимся по массиву попапов
  formElement.forEach((formList) => {
    setEventListeners(formList, config)
  });
}

//функция для блокировки кнопки 
function disabledSubmitButton(formList, config) {
  const buttonElement = formList.querySelector(config.submitButtonSelector);
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}