/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone-input");

  // Инициализация intlTelInput
  const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true, // Отдельно отображать код страны
    onlyCountries: ["jp", "kr", "ru", "kz", "us"], // Список разрешенных стран
    initialCountry: "ru", // Изначально выбранная страна
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js", // Путь к утилитам
  });

  // Обработчик события для изменения выбранной страны
  iti.promise.then(function () {
    phoneInput.addEventListener("countrychange", function () {
      const selectedCountry = iti.getSelectedCountryData();
      console.log("Выбранная страна: ", selectedCountry);
    });
  });

  // Обработка введенных данных в поле ввода
  phoneInput.addEventListener("input", function () {
    // Здесь вы можете добавить свой код для обработки введенных данных
    const phoneNumber = phoneInput.value;
    console.log("Введенный номер телефона: ", phoneNumber);
  });
});
