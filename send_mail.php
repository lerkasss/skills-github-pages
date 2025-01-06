<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $question = htmlspecialchars($_POST['question']);

    // Адрес почты, на который будет отправлено письмо
    $to = "your-email@example.com";
    
    // Тема письма
    $subject = "Новый контактный запрос от $name";

    // Тело письма
    $message = "
    Имя: $name\n
    Email: $email\n
    Телефон: $phone\n
    Вопрос: $question
    ";

    // Заголовки письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
