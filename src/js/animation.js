// Animation function
function addAnimation(element, animation) {
	document.addEventListener("scroll", function(){
		if (element.classList.contains("_watcher-view")) {
			element.classList.add(`${animation}`);
		}
	});
}

// Elements
const brandsContainer = document.querySelector(".brands__container");
const impressionsFirstImage = document.querySelector(".impressions__arrow-image");
const impressionsSecondImage = document.querySelector(".impressions__phones-image");
const impressionsTextBlock = document.querySelector(".impressions__content-block");
const scheduleImage = document.querySelector(".schedule__pc-image");
const scheduleTextBlock = document.querySelector(".schedule__content-block");
const performanceTextBlock = document.querySelector(".performance__title-block");
const performanceCardBlock = document.querySelector(".performance__cards-container");
const reviewsTextBlock = document.querySelector(".reviews__text-content");
const reviewsSlider = document.querySelector(".reviews__right-container");
const growContainer = document.querySelector(".grow__container");

addAnimation(brandsContainer, "left-text-animation");
addAnimation(impressionsFirstImage, "left-text-animation");
addAnimation(impressionsSecondImage, "left-text-animation");
addAnimation(impressionsTextBlock, "right-text-animation");
addAnimation(scheduleImage, "right-text-animation");
addAnimation(scheduleTextBlock, "left-text-animation");
addAnimation(performanceTextBlock, "right-text-animation");
addAnimation(performanceCardBlock, "left-text-animation");
addAnimation(reviewsTextBlock, "left-text-animation");
addAnimation(reviewsSlider, "right-text-animation");
addAnimation(growContainer, "right-text-animation");


