<?php

$to = "test@test.ru"; //Куда буду приходить письма
$siteName = "Impex group";
$from = "test@test.ru"; //От кого вставлять, чтоб в спам не попало

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заказан звонок \"$siteName\"";
$headers = "";
$headers .= "From: $from <$from> \r\n";
$headers .= "Reply-To:" . $from . "\r\n" ."X-Mailer: PHP/" . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=uft-8' . "\r\n";

mail($to,$pagetitle,$message,$headers);

?>