// Ждем загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const mainText = document.getElementById("mainText");
    const buttons = document.getElementById("buttons");

    // Анимация появления картинки и текста
    setTimeout(() => {
        mainImage.classList.remove("hidden");
        mainImage.classList.add("visible");
    }, 500);

    setTimeout(() => {
        mainText.classList.remove("hidden");
        mainText.classList.add("visible");
    }, 1500);

    setTimeout(() => {
        buttons.classList.remove("hidden");
        buttons.classList.add("visible");
    }, 2500);

    // Обработка нажатия на кнопку "Да"
    document.getElementById("yesButton").addEventListener("click", function () {
        mainImage.src = "image2.jpg"; // Меняем картинку
        mainText.textContent = "Ура! Ты сделал правильный выбор!"; // Меняем текст
        mainText.style.transform = "translateY(-50px)"; // Поднимаем текст вверх
    });

    // Обработка нажатия на кнопку "Нет"
    document.getElementById("noButton").addEventListener("click", function () {
        alert("Приложение будет удалено!");
        window.close(); // Закрываем приложение (в реальном Mini Apps используй Telegram WebApp.close())
    });
});