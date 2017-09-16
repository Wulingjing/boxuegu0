<?php
header('content-type:text/html;charset=utf8');
	// include('./header.html');
	// echo '<div>测试</div>'
	// include('./footer.html');
	// 通过URL区分用户想要访问的页面
	// include在主页面嵌入子页面
	// 路由：根据URL的不同得到不同的页面
	// array_key_exists(key,search)
	// 默认目录名称
	$dir='main';
	// 默认文件名称
	$filename="index";
	// 处理URL路径
	if(array_key_exists('PATH_INFO', $_SERVER)){
		// 判断PATH_INFO属性存在
		// 获取请求路径
		$path=$_SERVER['PATH_INFO'];//   /main/index
		// 去掉第一个斜杠
		$str=substr($path, 1);
		// 字符串分割，与js中split很像；
		$ret=explode('/', $str);//$path按照/来分，看能分几部分
		// count(shuzi),PHP中判断长度
		if(count($ret)==2){
			// 路由有两层
			$dir= $ret[0];//覆盖目录
			$filename=$ret[1];//覆盖文件名字
		}else{
			$filename='login';
		}

	};
	// include('./views/main/index.html');
	
	// echo $path;
	include('./views/'.$dir.'/'.$filename.'.html');






?>
