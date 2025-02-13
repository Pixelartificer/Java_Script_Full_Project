<?php

if($_SERVER["REQUEST_METHOD"] == 'POST'){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "lawrence1729@gmail.com";
    $subject = "New contact form submission";
    $headers = "From", $name . "<" . $email . ">\r\n";
    $headers . = "reply to: " . $email . "\r\n";
    $headers . = "Content-Type: text/plain; 
    charset=utf-8\r\n";



    if(mail($to, $subject, $message, $headers,  $headers)){
        http_response_code(200);
        echo "Email send successfully!";
        } else {         
            http_response_code(500);
        echo "Oops! Somthing went Wrong";
         }
       
        }else {         
            http_response_code(403);
        echo "Access denied";
         }

?>