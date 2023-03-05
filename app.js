const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const offset = buttons.dataset.carouselButton === "next" ? 1 : -1;
		const slides = btn.closest("[data-carousel]").querySelector("[data-slides");

		const activeSlide = slides.querySelector("[data-active]");
	});
});
