<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input");
$ojbData = json_decode($data);
@$word = $ojbData->scholar;
#echo $word;
#echo "hello";
$word_c = [$word, "test2", "test3"];
echo json_encode($word_c);

?>
