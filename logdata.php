<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $input_str = file_get_contents("php://input");
  
  $data = json_decode($input_str, true);
  if (is_null($data)) {
    print("JSON cannot be decoded");
  } else {
      $player_id = $data['player_id'];
      
      if (strlen($player_id) < 50) {
        $escaped_player_id = preg_replace('/[^A-Za-z0-9_\-]/', '_', $player_id);
        $filename = "logisafedata/". $escaped_player_id .'.'. time() .".json";
        file_put_contents($filename, $input_str);
        
      } else {
        print("player_id too long");
      }
  }

} else {
    print("Cannot handle such request.");
}

?>
