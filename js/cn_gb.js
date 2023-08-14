window.onload = function() {
	var ele = [...document.querySelectorAll("section")];
	var wh = document.documentElement.clientHeight;
	var bodyh = 0;
	ele.map(function(item, index) {
		item.style.opacity = index * 1 + 1;

	});
	bodyh = ele[ele.length - 1].style.opacity * wh;

	// 设置高度会跑页底去，0.1秒后回页顶
	document.body.style.height = bodyh + 'px';
	setTimeout(function() {
		window.scrollTo(0, 0);
	}, 100);

	var timer = null; //页面贴合
	window.addEventListener("scroll", function(e) {
		var scrollTop = document.documentElement.scrollTop;
		ele.map(function(item, index) {
			var equation = index * 1 + 1 - scrollTop / wh;
			item.style.opacity = equation;

			// 解决页面遮挡问题
			if (item.style.opacity < 0) {
				item.style.pointerEvents = "none";
			} else {
				item.style.pointerEvents = "auto";
			}

			// 页面贴合
			clearTimeout(timer);
			timer = null;
			timer = setTimeout(function() {
				if (scrollTop % wh < 250) {
					window.scrollTo(0, parseInt(scrollTop / wh) * wh);
				} else if (scrollTop % wh > wh - 250) {
					window.scrollTo(0, parseInt(scrollTop / wh + 1) * wh);
				}
			}, 500);

		});

	});
}