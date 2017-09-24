define(['jquery','cookie'],function($){
	$('#loginBth').click(function(){
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginForm').serialize(),
            dataType:'json',
            success:function(data){
                console.log(data);
                if(data.code==200){
                    // 把用户的登陆信息储存在cookie中
                    // 方便跨页面共享数据
                    // 登陆成功跳转到主页面
                    $.cookie('loginInfo',JSON.stringify(data.result));
                    location.href='/main/index';
                }
            }
        });
        return false;//阻止按钮的默认提交行为，
    });	
})