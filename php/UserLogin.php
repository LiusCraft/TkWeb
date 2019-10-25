<?php
    require "CUMySQL.php";
    if(!CUMySQL_connect()){
        echo "MySQL Server ERROR";
        exit();
    }
    $Return = array(
        array('Code'=> 0, 'Message'=> "请求失败,参数没有填写完整"),
        array('Code'=> 1, 'Message'=> "登录成功!", 'Data'=> null),
        array('Code'=> 2, 'Message'=> "验证码失效"),
        array('Code'=> 3, 'Message'=> "账号或密码错误")
    );
    /**
     * 请求参数: Code, UserName, PassWord
     * Code: 验证码,从GetCode.php 中生成
     * UserName: 用户名
     * PassWord: 密 码
     */
    session_start();
    if(isset($_GET['Code'])&&isset($_GET['UserName'])&&isset($_GET['PassWord'])){
        $Code = $_GET['Code'];
        $UserName = $_GET['UserName'];
        $PassWord = $_GET['PassWord'];
        if(isset($_SESSION['Code'])&&$_SESSION['Code'] == $Code){
            $_SESSION['Code'] = null;
            $Result = CUMySQL_execute("SELECT User_Name FROM user WHERE User_Name=?1 AND User_Password=?2",$UserName,$PassWord,false);
            if($Result){
                $Return[1]['Data'] = mysqli_fetch_assoc($Result);
                echo json_encode($Return[1]);
            }else{
                echo json_encode($Return[3]);
            }
        }else{
            echo json_encode($Return[2]);
        }
    }else{
        echo json_encode($Return[0]);
    }
?>