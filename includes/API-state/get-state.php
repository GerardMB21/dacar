<?php

include_once '../db.php';

class Datos extends DB{

    function obtenerData(){
        $query = $this->connect()->query('SELECT * FROM state');

        return $query;
    }

}

?>