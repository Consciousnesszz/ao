<?php
	$account = $_POST["account"];
	$password = $_POST["password"];
	$email = $_POST["email"];

	$con = mysql_connect("localhost", "root", "ZJHdmm954");
	if (!$con) {
		die("false");
	}
	mysql_select_db("userdata");

	$sql = "INSERT INTO users VALUES(NULL, '$account', '$password', '$email', NULL, NULL)";
	$result = mysql_query($sql, $con);

	if ($result) {
		echo '{"status":1, "message":"success"}';
	}else{
		echo '{"status":0, "message":"'. mysql_error() .'"}';
	}

	mysql_close($con);
?>