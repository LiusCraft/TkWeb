<?php
    session_start();
    $Code = rand(12345,54321);
    $_SESSION['Code'] = $Code;
    echo $Code;
?>