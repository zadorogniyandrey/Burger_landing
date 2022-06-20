

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


let aniItems = document.querySelectorAll('._anim-items');

if(aniItems.length > 0){
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll () {
		for(let index = 0; index < aniItems.length; index++){
			const animItem = aniItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + window.innerHeight)) {
					animItem.classList.add('_active')
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect();
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll ();
}