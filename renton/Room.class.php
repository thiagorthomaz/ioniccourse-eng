<?php

/**
 * Description of Room
 *
 * @author thiago
 */
class Room {
  
  public $id;
  public $price;
  public $image;
  public $title;
  public $address;
  
  function __construct($id, $price, $image, $title, $address) {
    $this->id = $id;
    $this->price = $price;
    $this->image = $image;
    $this->title = $title;
    $this->address = $address;
  }

  
  
}
