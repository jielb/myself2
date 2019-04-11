<?php
$kew = $_GET("keywords");

$data = ["猜不猜","猜不","猜我猜不猜","猜你","猜我猜你猜不猜","猜","c","ca","cs"];

if(in_array($kew,$data)){
	echo "0";
} else {
	echo "1";
}


?>