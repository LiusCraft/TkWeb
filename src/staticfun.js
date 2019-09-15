export {
    checkValue,
    setCookie,
    getCookie,
    delCookie,
    formatTime,
    formatDate,
    copyText,
    getParam,
    getTimeStamp
}
/* 给时间,返回时间戳*/
function getTimeStamp(time, type) {
    var date = new Date(time); //实例一个时间对象；
    var year = date.getFullYear(); //获取系统的年；
    var month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    var day = date.getDate();
    if (type == 1) {
        var hour = "00"
        var minute = "00"
        var second = "00"
    } else if (type == 2) {
        var hour = "23"
        var minute = "59"
        var second = "59"
    }
    return Math.round(new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second) / 1000);
}

function checkValue() {
    for (var index = 0; index < arguments.length; index++) {
        if (arguments[index] == null) {
            return index + 1
        } else if (arguments[index] == "undefined") {
            return index + 1
        } else if (arguments[index] == "") {
            return index + 1
        }
    }
    return 0
}

function setCookie(name, value, time) {
    if (time != 'undefined') {
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    } else {
        var Days = 365;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
}

function getCookie(name, boolean) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else if (boolean == true)
        return false;
    else
        return '';
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
 */
function formatTime(number, format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}
//数据转化  
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}
function formatDate(value) {
    var secondTime = parseInt(value); // 秒
    var minuteTime = 0; // 分
    var hourTime = 0; // 时
    var dayTime = 0; // 天
    var monthTime = 0; //月
    if (secondTime >= 60) { //如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);       //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);       //如果分钟大于60，将分钟转换成小时
        if (minuteTime >= 60) {         //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);         //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
            if (hourTime >= 24) {
                dayTime = parseInt(hourTime / 24);
                hourTime = parseInt(hourTime % 24);
                if (dayTime >= 30) {
                    monthTime = parseInt(dayTime / 30);
                    dayTime = parseInt(dayTime % 30);
                }
            }
        }
    }
    var result = "";
    if (secondTime > 0) { result = "" + parseInt(secondTime) + "秒" }
    if (minuteTime > 0) { result = "" + parseInt(minuteTime) + "分" + result; }
    if (hourTime > 0) { result = "" + parseInt(hourTime) + "小时" + result; }
    if (dayTime > 0) { result = "" + parseInt(dayTime) + "天" + result; }
    if (monthTime > 0) { result = "" + parseInt(monthTime) + "月" + result; }
    return result;
}
/**
 * 复制指定内容到剪切板
 * @param text 下要复制的内容
 * @param callback 回调
 */
function copyText(text, callback) {
    var tag = document.createElement('input');
    tag.setAttribute('id', 'cp_hgz_input');
    tag.value = text;
    document.getElementsByTagName('body')[0].appendChild(tag);
    document.getElementById('cp_hgz_input').select();
    document.execCommand('copy');
    document.getElementById('cp_hgz_input').remove();
    if (callback) { callback(text) }
}

function getParam(paramName) {
    var paramValue = "",
        isFound = !1;
    if (window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) {
        var arrSource = unescape(window.location.search).substring(1, window.location.search.length).split("&"),
            i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}