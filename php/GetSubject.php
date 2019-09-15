<?php
    require 'Origin.php';
    require 'CUMySQL.php';

    if(!CUMySQL_connect()){
        echo "Server ERROR";
        exit();
    }
    $Return  = array(
        array('Code' => 0, 'Message' => "请求失败,参数没有填写完整"),
        array('Code' => 1, 'Count' => null, 'Data' => null),
        array('Code' => 2, 'Message' => "没有题目!")
    );
    if(isset($_POST['Count'])){
        $POST_Count = $_POST['Count'];
        $Counted = 0;
        $ResultList = array();
        $RandList = array();
        if(isset($_POST['Class']) && !empty($_POST['Class'])){
            $SQL = "SELECT * FROM tkdatalist WHERE Tm_Class=?1";
        }else{
            $SQL = "SELECT * FROM tkdatalist";
        }
        $Result = CUMySQL_execute($SQL);
        $Result_Count = Count($Result);
        if($Result){
            for($i=0;$i < $Result_Count && $Counted < $POST_Count;$i++){
                do{
                    $RandNub = rand(1,$Result_Count) - 1;
                }while(isset($RandList[$RandNub]));
                $RandList[$RandNub] = $RandNub;
                $ResultList[$Counted] = $Result[$RandNub];
                $ResultList[$Counted]["Tm_Data"] = json_decode($ResultList[$Counted]["Tm_Data"]);
                $ResultList[$Counted]["Tm_Selec"] = "";
                $Counted++;
            }
            $Return[1]['Count'] = $Counted;
            $Return[1]['Data'] = $ResultList;
            echo json_encode($Return[1]);
        }else{
            echo json_encode($Return[2]);
        }
    }else{
        echo json_encode($Return[0]);
    }
?>