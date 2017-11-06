<?php
require 'defs.php';
include_once SNARKDEN.'/tools/db.php';
include_once SNARKDEN.'/tools/templates.php';

$cls="afisha";

$table=snark_db_tabname($cls);
$uid=intval($_REQUEST['uid']);
$agenda=$_REQUEST['agenda'];

$table=snark_db_tabname($cls);
$tableActual=snark_db_tabname('actual_'.$cls);

compileAgenda($uid,$agenda,$tableActual,$table);

echo <<<EOT
done!
EOT;


function compileAgenda($id,$str,$tableActual,$table){
	$uid=snark_uid($id);

	$str=preg_replace("/\s+/","",$str);
	$data=json_decode('[{'.stripslashes($str).'}]',true);

  $sql='update '.$table.' set agenda="'.snark_db_encode('{'.stripslashes($str).'}').'" where id='.$id;
  $result = mysql_query ($sql, DBLINK);

	if(!$data){
		echo("Can't compile? ".$str);
	} else {
    $sql="delete from $tableActual where sid=$uid";
    $result = mysql_query ($sql, DBLINK);

		$daySec=24*3600;
		$week=array('sun'=>1,'mon'=>2,'tue'=>3,'wed'=>4,'thu'=>5,'fri'=>6,'sat'=>7);

		$openingDates=array();

		foreach($data as $key=>$value){
			$ranges=array();
			$dropranges=array();

			$dates=array();
			$drop=array();
			$wdays=array();

			$curDateRange="";

			foreach($value as $k=>$v){

        $bufTimes=array();
				$bufTimesStr=array();
				$bufOpening=0;

				if(preg_match_all('/(\d+):(\d+)/',$v,$vars))
					foreach($vars[1] as $cnt=>$value){
						$bufTimes[]=intval($value)*3600+intval($vars[2][$cnt])*60;
						$bufTimesStr[]=$value.':'.$vars[2][$cnt].':00';
					};

				if(preg_match('/opening/i',$v)){
					$bufOpening=1;
				} else if(preg_match('/vip/i',$v)){
					$bufOpening=2;
				};

				if(preg_match('/(\d+)\.(\d+)\.(\d+)\-(\d+)\.(\d+)\.(\d+)/',$k,$vars)){
					$startDate=mktime(0,0,0,$vars[2],$vars[1],$vars[3]);
					$endDate=mktime(23,59,59,$vars[5],$vars[4],$vars[6])+1;
					$curDateRange="sdate>FROM_UNIXTIME($startDate) and sdate<FROM_UNIXTIME($endDate)";
					if($bufOpening){
						$openingDates[]=array('start'=>$startDate,'end'=>$endDate,'mode'=>$bufOpening);
					} else {
            $sql="delete from $tableActual where sid=$uid and ".$curDateRange;
            ////echo $sql."<br>";
						$result = mysql_query ($sql, DBLINK);
						if(count($bufTimes))
							for($cnt=$startDate;$cnt<$endDate;$cnt+=$daySec)
								foreach($bufTimes as $theTime){
									$theTime+=$cnt;
									$sql="insert into $tableActual (sid, sdate) values ($uid,FROM_UNIXTIME($theTime))";
                  //echo $sql."<br>";
									$result = mysql_query ($sql, DBLINK);
								};

					};

				} else 	if(preg_match('/(\d+)\.(\d+)\.(\d+)/',$k,$vars)){
					$startDate=mktime(0,0,0,$vars[2],$vars[1],$vars[3]);
					$endDate=mktime(23,59,59,$vars[2],$vars[1],$vars[3])+1;
					if($bufOpening){
						$openingDates[]=array('start'=>$startDate,'end'=>$endDate,'mode'=>$bufOpening);
					} else {
						$sql="delete from $tableActual where sid=$uid and sdate>FROM_UNIXTIME($startDate) and sdate<FROM_UNIXTIME($endDate)";
            //echo $sql."<br>";
						$result = mysql_query ($sql, DBLINK);
						if(count($bufTimes))
							foreach($bufTimes as $theTime){
								$theTime+=$startDate;
								$sql="insert into $tableActual (sid, sdate) values ($uid,FROM_UNIXTIME($theTime))";
                //echo $sql."<br>";
								$result = mysql_query ($sql, DBLINK);
							};
					};
				} else if(preg_match('/^(sun|mon|tue|wed|thu|fri|sat)/i',$k,$vars) && $curDateRange){
					$dayOfWeek=$week[$vars[1]];

					if(!$bufOpening)
					if(!count($bufTimes)){
						$sql="delete from $tableActual where sid=$uid and DAYOFWEEK(sdate)=".$dayOfWeek." and ".$curDateRange;
            //echo $sql."<br>";
						$result = mysql_query ($sql, DBLINK);
					} else {
						$days=array();
						$sql="select DATE_FORMAT(sdate,'%Y-%m-%e') as sd from $tableActual where sid=$uid and DAYOFWEEK(sdate)=".$dayOfWeek." and $curDateRange group by sd";
						if($result = mysql_query ($sql, DBLINK))
							while($row = mysql_fetch_array ($result,MYSQL_ASSOC))
								$days[]=$row['sd'];

						$sql="delete from $tableActual where sid=$uid and DAYOFWEEK(sdate)=".$dayOfWeek." and ".$curDateRange;
            //echo $sql."<br>";
						$result = mysql_query ($sql, DBLINK);


						foreach($days as $cnt)
							foreach($bufTimesStr as $theTime){
								$sql="insert into $tableActual (sid, sdate) values ($uid,'".$cnt." ".$theTime."')";
                //echo $sql."<br>";
								$result = mysql_query ($sql, DBLINK);
							};

					};
				};
			};
		};
		$sql="update $tableActual set opening=0 where sid=$uid";
    //echo $sql."<br>";
		$result = mysql_query ($sql, DBLINK);

		if(@count($openingDates))
			foreach($openingDates as $value){
				$sql="update $tableActual set opening=$value[mode] where sdate>FROM_UNIXTIME($value[start]) and sdate<FROM_UNIXTIME($value[end]) and sid=$uid";
        //echo $sql."<br>";
				$result = mysql_query ($sql, DBLINK);
			};

	};
}
?>
