var http = require("http");
var fs = require("fs");

// var imgPath = "http://img.lexus.do2014.cn/images/es/car/spoke10a/Red_Mica_Crystal_Shine/";
var imgPath = "http://img.lexus.do2014.cn/images/es/car/spoke10a/Sonic_Quartz/";
imgPath = "http://img.lexus.do2014.cn/images/rx/car/spoke7/White_Nova_Glass_Flake/";

var dir = "./downloadImg3";
fs.mkdir(dir, (err) => {
	if(err && err.code != 'EEXIST') {
		console.log(err);
		console.log(err.code);
		return;
	}
	downloadImg();
});

function downloadImg() {
	for(var i=0; i<60; i++) {
		var url = imgPath+i+".jpg!t1024x450.jpg";
		((i) => {
			http.get(url, (res) => {
				var out = fs.createWriteStream(dir+"/"+i+'.jpg', {
					encoding: "binary"
				});
				res.on('data', (chunk) => {
					out.write(chunk);
				});
				res.on('end', (err)=> {
					console.log('image_'+i+" download complete");
					out.end("");
				});
			});
		})(i);	//创建一个函数并立即执行它，否则整个循环只会下载最后一张图片
	}
	// process.exit();	//待所有图片都异步下载完成后关闭进程
}