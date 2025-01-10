function topInfo (){
	const topInfoBtn = document.querySelector('.top-info__btn');
	const topInfo = document.querySelector('.top-info');

	topInfoBtn.onclick = function () {
		topInfo.remove();
	}
}

export default topInfo;
