// 添加元素出现动画
function addShow(ele){
	// 初始化隐藏
	ele.style.opacity=0;
	ele.style.transform="translate(0,100px)";
	
	
	// 滚动到指定位置出现
	function scrollShow(){
		// console.log(window.scrollY);
		if(window.scrollY>ele.getBoundingClientRect().y){
			// 元素出现
			ele.classList.add('show');
			//执行一次后删除事件
			window.removeEventListener('scroll',scrollShow);
		}
	}
	window.addEventListener('scroll',scrollShow);
	scrollShow();
}

var ele = [...document.querySelectorAll('.animate'),...document.querySelectorAll('.item:not(.slider-group>.item)')];
ele.forEach(function(item,index){
	addShow(item);
});