<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Composer autoload

$mail = new PHPMailer(true);

try {

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    // Your Gmail
    $mail->Username   = 'siyagodbole@gmail.com';

    // Gmail App Password
    $mail->Password   = 'agrd qgtp gdis gdbf';

    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender
    $mail->setFrom('siyagodbolegmail@gmail.com', 'Contact Form');

    // Receiver
    $mail->addAddress('strawberry098098@gmail.com');

    // Get Form Data
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $message = $_POST['message'];

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Message';

    $mail->Body = "
        <h3>Contact Form Details</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Email:</b> $email</p>
        <p><b>Message:</b><br>$message</p>
    ";

    $mail->send();

    echo "Email Sent Successfully";

} catch (Exception $e) {

    echo "Email Failed: {$mail->ErrorInfo}";
}

?>