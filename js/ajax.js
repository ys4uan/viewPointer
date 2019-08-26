// ajax封装

var basePath = 'http://134.175.154.93:8099'
function getAjax(url,method,data,successFun,errorFun){
    $.ajax({
        url: basePath + url,
        method: method,
        data: data,
        success: successFun,
        error: errorFun
    });
}

