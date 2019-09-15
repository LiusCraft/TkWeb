<?php
    $origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';

    $allow_origin = array(
    'http://localhost:8080',
    'http://127.0.0.1:8080'
    );
    
    if(in_array($origin, $allow_origin)){
    header('Access-Control-Allow-Origin:'.$origin);
    }
?>