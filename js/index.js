function slider(container,delay){
	var turIndex=0,//当前索引
		prev=container.getElementsByClassName('prev')[0],//左按钮
		next=container.getElementsByClassName('next')[0],//右按钮
		items=container.getElementsByClassName('item'),//图片
		group=container.getElementsByClassName('slider-group')[0],
		width=items[0].clientWidth,
		circle =container.querySelectorAll('.subs span');
	
	//点击事件
	prev.onclick=function(){
		stopAuto();
		setTimeout(function(){
			startAuto();
		},300);
		if(turIndex==0){//无缝切换
			group.style.transition='none';
			switchTo(items.length-1);
			setTimeout(function(){
				switchTo(items.length-2);
				group.style.transition='.3s ease';
			},1);
		}else switchTo(turIndex - 1);
	}
	next.onclick=function(){
		stopAuto();
		setTimeout(function(){
			startAuto();
		},300);
		if(turIndex==items.length-1){//无缝切换
			group.style.transition='none';
			switchTo(0);
			setTimeout(function(){
				switchTo(1);
				group.style.transition='.3s ease';
			},1);
		}else switchTo(turIndex+1);
	}
	
	//索引
	function switchTo(index){
		group.style.transform="translate("+-index * width + "px)";
		
		turIndex=index;
		//circle
		if(index==items.length-1){
			var active=container.querySelector('.subs .active');
			active.classList.remove('active');
			circle[0].classList.add('active');
		}else circleIndex();
	}
	
	//circle点击事件
	
	for(let i = 0;i<circle.length;i++){
		circle[i].onclick=function(){
			stopAuto();
			setTimeout(function(){
				startAuto();
			},300);
			switchTo(i);
		}
	}
	//circle位置
	function circleIndex(){
		var active=document.querySelector('.subs .active');
		active.classList.remove('active');
		circle[turIndex].classList.add('active');
	}
	//自动循环
	var timer;
	//开始
	function startAuto(){
		if(!timer){
		timer=setInterval(function(){
			if(turIndex==items.length-1){//无缝切换
				group.style.transition='none';
				switchTo(0);
				setTimeout(function(){
					switchTo(1);
					group.style.transition='.3s ease';
				},50);
			}else switchTo(turIndex+1);
		},delay);
		}
	}
	//停止
	function stopAuto(){
		if(timer)
		clearInterval(timer);
		timer=null;
	}
	startAuto();
};

window.onload=function(){
	
	(function(){
		// banner Slider
		var	container = document.getElementById('banner'),
			delay = 3000;
		slider(container,delay);
	}());
	
	
	
	// // 元素出现动画
	// (function(){
		
	// 	var bj = document.getElementById('bj'),
	// 		ln = document.getElementById('ln'),
	// 		xcp = document.getElementById('xcp'),
	// 		dhEle = [...document.querySelectorAll(".animate")];
		
	// 	addShow(bj);
	// 	addShow(ln);
	// 	addShow(xcp);
	// 	dhEle.forEach(function(index,item){
	// 		console.log(item,index);
	// 	});
		
	// }());
	
}