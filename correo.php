<?php
    $destinatario = 'sebasgomez1099@gmail.com';
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $descrip = $_POST['descrip'];

    $header = "Enviado desde pagina web woolfwp";
    $mensajeCompleto = $descrip . "\nAtentamente: " . $name;

    mail($destinatario, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>