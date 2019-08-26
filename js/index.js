// index页面的js文件

$(function(){
    $('.content-body').load('./pages/home.html');
    $('.categroyes li').click(function(){
        var title = $(this).text();
        switch(title){
            case '首页':
                $('.content-body').load('./pages/home.html');
                break;
            case '栏目管理':
                $('.content-body').load('./pages/category.html');
                break;
            case '资讯管理':
                $('.content-body').load('./pages/info.html');
                break;
            case '用户管理':
                $('.content-body').load('./pages/user.html');
                break;
            default:
                break;
        }
    });
});