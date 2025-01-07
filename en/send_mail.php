<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $question = htmlspecialchars(trim($_POST['question']));

    // Check if all required fields are filled
    if (!empty($name) && !empty($email) && !empty($question)) {
        // Email settings
        $to = "contact@valeriiatranslator.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        $message = "Name: $name\n";
        $message .= "Email: $email\n";
        $message .= "Phone: $phone\n";
        $message .= "Question: $question\n";
        $headers = "From: $email";

        // Send email
        if (mail($to, $subject, $message, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again.";
        }
    } else {
        echo "Please fill in all required fields.";
    }
} else {
    echo "Invalid request method.";
}
?>
