<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$mail = new PHPMailer;
if(!empty($_POST['name'])) {

   $formName = $_POST['name'];  
} else {
    $formName = 'Не указано'; 
}


if(!empty($_POST['phone'])) 
{
   $formPhone = $_POST['phone'];  
} else {
    $formPhone = 'Не указан'; 
}

$emailBottomForm = $_POST['email-bottom-form'];
$message = $_POST['massage-bottom-form'];  


$title = "Письмо с сайта";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $formName<br>
<b>Телефон:</b> $formPhone<br>
<b>Электронная почта:</b> $emailBottomForm<br>
<b>Сообщение:</b> $message<br><br>
";

$mail->CharSet = "UTF-8";
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'ssl://smtp.mail.ru';
$mail->Port = 465;
$mail->Username = 'texgaz63@mail.ru';
$mail->Password = '7uE513d5eBRjcwGuinvS';
 
// От кого
$mail->setFrom('texgaz63@mail.ru', 'Tehgaz63.u');		
 
// Кому
$mail->addAddress('texgaz63@mail.ru', 'Tehgaz63.ru');
 
// Тема письма
$mail->Subject = $title;
 
// Тело письма
$mail->Body = $body; ;
$mail->msgHTML($body);

$mail->send();
