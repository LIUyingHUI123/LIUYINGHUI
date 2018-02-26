<?php
	header('Content-Type:text/html;charset=utf-8');
	$con=mysqli_connect('localhost','root','','data');
	mysqli_query($con,'set names utf8');

	$username=$_REQUEST['username'];
	



	// $sql="select username from data1 where username = $_GET['username']";
	$sql="select username from data1 where username='$username'";
   
	$query=mysqli_query($con,$sql);
	// print_r($query);
			

	if($query && mysqli_num_rows($query)){
		while($row = mysqli_fetch_assoc($query)){
			$arr[] = $row;
		}
		echo json_encode($arr);
		echo $username.'({"code":"0","data" : '. json_encode($arr) .' })';
		echo '<script> setTimeout(function(){ window.location.href="../html/login.html"},1000)</script>';
	}
	else{
		echo $username.'({"code":"1","message":"没有数据"})';
	}
?>