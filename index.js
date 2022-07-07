const nav = document.getElementById('navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const subMenuToggle = document.querySelectorAll('.sub-menu-toggle');
const arrowDown = document.querySelectorAll('.arrow-down');
const overlay = document.querySelector('.overlay');

function handleNavToggleClick() {
	const visibility = nav.getAttribute('data-visible');
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
		overlay.style.backgroundColor = 'black';
	} else {
		nav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
		overlay.style.backgroundColor = 'transparent';
	}
	console.log(visibility);
}

function handleSubMenuToggleClick(e) {
	const arrow = e.currentTarget.children[1];
	const subMenu = e.currentTarget.nextElementSibling;
	const visibility = subMenu.getAttribute('aria-expanded');
	if (visibility === 'false') {
		subMenu.setAttribute('aria-expanded', true);
		arrow.classList.add('rotate');
	} else {
		subMenu.setAttribute('aria-expanded', false);
		arrow.classList.remove('rotate');
	}
}

navToggle.addEventListener('click', handleNavToggleClick);
subMenuToggle.forEach((menu) =>
	menu.addEventListener('click', handleSubMenuToggleClick)
);
