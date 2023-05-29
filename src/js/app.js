const burgerMenu = document.querySelector(".burger__menu");
const navMenu = document.querySelector(".nav__menu");

burgerMenu.addEventListener("click", function () {
	if (!this.classList.contains("active")) {
		this.classList.add("active");		
		navMenu.classList.add("active__nav__menu");
	} else {
		this.classList.remove("active");
		navMenu.classList.remove("active__nav__menu");
	}
});