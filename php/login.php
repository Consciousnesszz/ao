<?php
	$account = $_POST["account"];
	$password = $_POST["password"];

	$con = mysql_connect("localhost", "root", "ZJHdmm954");
	if (!$con) {
		die("false");
	}
	mysql_select_db("userdata");

	$sql = "SELECT COUNT(*) FROM users WHERE account = '$account' AND password = '$password'";
	$result = mysql_query($sql, $con);

	if($row = mysql_fetch_array($result)){
		if ($row[0] >= 1) {
			echo '{"status":1, "message":"success", "userinfo": "exsist"}';
		}else{
			echo '{"status":0, "message":"'. mysql_error() .'", "user": "not exsist"}';
		}
	}

	mysql_close($con);
?>