const inputLoupe = document.querySelector('.fa-search')
const inputX = document.querySelector('[data-input-x-ico=""]')
const mobileInputDiv = document.querySelector('[data-divinput=""]')
const mobileInput = document.querySelector('[data-input=""]')
const barsIco = document.querySelector('.fa-bars')
const barsDiv = document.querySelector('[data-bars=""]')
const barsLinks = document.querySelectorAll('[data-link=""]')
const barsLine = document.querySelector('[data-line=""]')
const btnX = document.querySelector('[data-btnx=""]')
const btnXIco = document.querySelector('[data-btnx-ico=""]')
const btnBars = document.querySelector('[data-btnbars=""]')

// nav
const addSearch = () => {
	mobileInputDiv.classList.add('inputdiv-active')
	mobileInput.classList.add('inputdiv-active--input')
	inputX.classList.add('input-x-ico')
	mobileInputDiv.classList.remove('nav-mobile__inputdiv')
}

const closeSearch = () => {
	mobileInputDiv.classList.remove('inputdiv-active')
	mobileInput.classList.remove('inputdiv-active--input')
	inputX.classList.remove('input-x-ico')
	mobileInputDiv.classList.add('nav-mobile__inputdiv')
}


const barsInfo = () => {
	barsDiv.classList.add('nav-mobile-bars-active')
	barsLinks.forEach(link => link.classList.add('nav-mobile-bars-active--link'))
	barsLine.classList.add('nav-mobile-bars-active--line')
	barsDiv.classList.remove('nav-mobile-bars')
	btnX.classList.add('nav-mobile__icons--x-active')
	btnX.classList.remove('nav-mobile__icons--x')
	btnXIco.classList.add('fa-x-active')
	btnXIco.classList.remove('bars-x')
	btnXIco.classList.add('fa-solid-active')
	btnBars.classList.add('nav-mobile__icons--btnbars')

	barsLinks.forEach(link => {
		link.addEventListener('click', () => {
			barsDiv.classList.add('nav-mobile-bars')
			btnX.classList.add('nav-mobile__icons--x')
			btnXIco.classList.add('bars-x')
			link.classList.remove('nav-mobile-bars-active--link')
			barsDiv.classList.remove('nav-mobile-bars-active')
			barsLine.classList.remove('nav-mobile-bars-active--line')
			btnX.classList.remove('nav-mobile__icons--x-active')
			btnXIco.classList.remove('fa-x-active')
			btnXIco.classList.remove('fa-solid-active')
			btnBars.classList.remove('nav-mobile__icons--btnbars')
		})
	})
}

const barsInfoClose = () => {
	barsDiv.classList.remove('nav-mobile-bars-active')
	barsLinks.forEach(link => link.classList.remove('nav-mobile-bars-active--link'))
	barsLine.classList.remove('nav-mobile-bars-active--line')
	barsDiv.classList.add('nav-mobile-bars')
	btnX.classList.remove('nav-mobile__icons--x-active')
	btnX.classList.add('nav-mobile__icons--x')
	btnXIco.classList.remove('fa-x-active')
	btnXIco.classList.add('bars-x')
	btnXIco.classList.remove('fa-solid-active')
	btnBars.classList.remove('nav-mobile__icons--btnbars')
}


inputLoupe.addEventListener('click', addSearch)
inputX.addEventListener('click', closeSearch)
barsIco.addEventListener('click', barsInfo)
btnX.addEventListener('click', barsInfoClose)