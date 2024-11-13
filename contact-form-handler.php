<?php
  function strip_crlf($string)
  {
      return str_replace("\r\n", "", $string);
  }

  if (! empty($_POST["send"])) {
      $name = $_POST["name"];
      $email = $_POST["email"];
      $phone = $_POST["phone"];
      $subject = $_POST["subject"];
      $content = $_POST["message"];

      $toEmail = "fields.elysian@gmail.com";
      // CRLF Injection attack protection
      $name = strip_crlf($name);
      $email = strip_crlf($email);
      if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo "The email address is invalid.";
      } else {
          // appending \r\n at the end of mailheaders for end
          $mailHeaders = "From: " . $name . "<" . $email . " " . $phone . ">\r\n";
          if (mail($toEmail, $subject, $content, $mailHeaders)) {
              $message = "Your contact information is received successfully.";
              $type = "success";
          }
      }
  }
  require_once "contact-view.php";
?>