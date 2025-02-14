document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const secondImage = document.getElementById("secondImage");
    const mainText = document.getElementById("mainText");
    const buttons = document.getElementById("buttons");

    // Анимация появления текста
    setTimeout(() => {
        mainText.classList.remove("hidden");
        mainText.classList.add("visible");
    }, 1500);

    // Анимация появления кнопок
    setTimeout(() => {
        buttons.classList.remove("hidden");
        buttons.classList.add("visible");
    }, 2500);

    // Обработка нажатия на кнопку "Да"
    document.getElementById("yesButton").addEventListener("click", function () {
        // Затухание первой картинки
        mainImage.style.animation = "fadeOut 1s forwards";

        // Появление второй картинки
        setTimeout(() => {
            secondImage.style.animation = "fadeIn 1s forwards";
        }, 1000); // Задержка для плавного перехода

        // Поднимаем текст вверх
        mainText.style.transform = "translateY(-50px)";

        // Исчезновение кнопок
        buttons.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            buttons.style.display = "none"; // Убираем кнопки из DOM
        }, 1000); // Ждем завершения анимации
    });

    // Обработка нажатия на кнопку "Нет"
    document.getElementById("noButton").addEventListener("click", function () {
        alert("Приложение будет удалено!");
        window.close(); // Закрываем приложение
    });
});
