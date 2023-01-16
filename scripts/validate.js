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

  //добавление обработчика
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  })
}

//блокировка кнопки Save
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

function enableValidation(config) {
  //поиск формы
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  //поиск по массиву
  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
  })
}






























/*function showInputError(formList, inputList, config) {
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
}*/