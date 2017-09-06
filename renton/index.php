<?php


ini_set("display_errors", true);
error_reporting(E_ALL);

require_once './Room.class.php';

header("Access-Control-Allow-Origin: *");

session_start();

if (isset($_SESSION['renton'])) {
    $SESSION = $_SESSION['renton'];
} else {
    $_SESSION['renton'] = array();
    $SESSION = $_SESSION['renton'];
    init();
}
  
$action = filter_input(INPUT_GET, "a");
$id = filter_input(INPUT_GET, "id");
if (!is_null($action)) {
  
  switch ($action) {
    case "reset":
      session_destroy();
      break;
    case "all": 
      output();
      break;
  }
}

if (!is_null($id)) {
  $rooms = read();
  foreach ($rooms as $r) {
    if ($r->id == $id) {
      output($r);
      break;
    }
  }
  
}


function read() {
  return $_SESSION['renton'];
}

function write(Room $room){
  $_SESSION['renton'][] = $room;
}

function output(Room $room = null){
  if (!is_null($room)) {
    echo json_encode($room);
  } else {
    echo json_encode(read());
  }
}

function init() {
  
  write(new Room(1, 20.00, "http://localhost/renton/images/1.jpg", "Quarto na praia de Guaratuba", "Rua Blabla, numero 480"));
  write(new Room(2, 15.00, "http://localhost/renton/images/2.jpg", "Quarto na montanha", "Montanha Yosemite, numero 380"));
  write(new Room(3, 75.00, "http://localhost/renton/images/3.jpg", "Turismo na ilha", "Ilha de Pascoa"));
  write(new Room(4, 60.00, "http://localhost/renton/images/4.jpg", "Quarto no hotel fazenda", "Fazenda Boulevard, numero 340"));

}

function imagem(){
  $image_id = filter_input(INPUT_GET, "image");
}

