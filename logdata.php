<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $input_str = file_get_contents("php://input");
  
  $data = json_decode($input_str, true);
  if (is_null($data)) {
    print("JSON cannot be decoded");
  } else {
      $player_id = $data['player_id'];
      
      if (ctype_alnum($player_id) && strlen($player_id) < 50) {
        $filename = "logisafedata/". $player_id .".json.". time();
        file_put_contents($filename, $input_str);
        print($filename);
      } else {
        print("player_id too long or non-alphanumeric.");
      }
  }

} else {
    print("Cannot handle such request.");
}

?>
