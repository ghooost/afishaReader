<?php
$f=fopen("data.json","w");
fputs($f,$_REQUEST['data']);
fclose($f);
?>
