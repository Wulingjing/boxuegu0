define(['jquery','template','cookie'],function($){

	// cookie是一个插件，直接插在$上，所以function里面不需要参数

	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 实现退出功能
	$('#logoutBtn').click(function(){
		console.log(123);
		$.ajax({
			url : '/api/logout',
            type : 'post',
			success:function(data){
				console.log(data);
				if(data.code==200){
					// 重新跳到登录页
					// 登录成功的标志就是sessionＩＤ是否存在
					// 不能不登录就通过地址栏直接进入系统
					location.href='/main/login';
				}
			}
		})
	});



	// 检测用户是否登陆
	var flag=$.cookie('PHPSESSID');
	if(!flag &&location.pathname != '/main/login'){
		// 如果cookie不存在跳到登陆页
		location.href="/main/login";
		
	};

// 设置用户头像信息；
	// console.log(cookie('loginInfo'));
	var loginInfo=$.cookie('loginInfo');
	loginInfo=loginInfo&&JSON.parse(loginInfo);

	// 设置用户头像信息
	// $('.aside .profile img').attr('src',loginInfo.tc_avatar);
	// $('.aside .profile h4').html(loginInfo.tc_name);

	var tpl='<div class="avatar img-circle"><img src="{{tc_avatar}}">
            </div><h4>{{tc_name}}</h4>';
            var html=template.render(tpl,loginInfo);
            $('.aside .profile').html(html);

})
	