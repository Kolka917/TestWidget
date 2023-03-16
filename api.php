<?
$db_host = 'p452056.mysql.ihc.ru';
$db_user = 'p452056_intgrtns';
$db_password = 'weSNp39D4k';
$db_base = 'p452056_intgrtns';

$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
$mysqli->set_charset('utf8');

if ( $mysqli->connect_error ) {
  die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$post = json_decode(file_get_contents('php://input'),true);

$type = $post['type'];
$client = $post['client'];
$message = trim($post['message']);
$message = ($message) ? "'$message'" : "NULL";

if ( $type == 'search_client' ) {
	$client_mysqli = $mysqli->query("
    SELECT * FROM 
      `message_client` 
    WHERE 
      `client` = $client
      AND 
      `delete_at` is NULL
	");

	$client_object = $client_mysqli->fetch_object()->message;

	echo json_encode(['client_object' => $client_object ], JSON_UNESCAPED_UNICODE);
}

if ( $type == 'send_message' ) {
	$client_mysqli = $mysqli->query("
    SELECT * FROM 
      `message_client` 
    WHERE 
      `client` = $client
      AND 
      `delete_at` is NULL
	");
	if ( $client_mysqli->num_rows ) {
		$mysqli->query("
      UPDATE 
        `message_client` 
      SET 
        `message` = $message 
      WHERE 
        `client` = $client
  	");
	} else {
		$mysqli->query("
      INSERT INTO 
        `message_client` 
      (
        client,
        message
      ) 
        VALUES 
      (
        $client,
        $message
      )
    ");
	}
}
