/*window.onload = alert("Hello");
window.onload = myMain;
function myMain()
{
	document.getElementById("div1").style.backgroundColor = "black";
}*/



/*let galleryImages = document.querySelectorAll(".imagini-galerie");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if(galleryImages)
{
	alert(galleryImages.length());
}*/



// let x = document.getElementById("div1");
// x.style.backgroundColor = "black";

// let galleryImages = document.querySelectorAll(".imagini img");

// let body = document.getElementsByTagName("body");

// for(let i = 0; i<galleryImages.length; i++)
// galleryImages[i].addEventListener('click', e => {
// 	console.log(e.target)
// })

let popGalery = document.createElement('div');
popGalery.classList.add("galerie");

let xBox = document.createElement('div');
xBox.classList.add("x-box");
xBox.innerText = "X";
popGalery.appendChild(xBox);

let nextImg = document.createElement('div');
nextImg.classList.add('next-img');
nextImg.innerText = ">";
popGalery.appendChild(nextImg);

let prevImg = document.createElement('div');
prevImg.classList.add('prev-img');
prevImg.innerText = "<";
popGalery.appendChild(prevImg);

let boxImagine = document.createElement('div');
boxImagine.classList.add("galerie-box-img");
popGalery.appendChild(boxImagine);

let imagineGal = document.createElement('img');
popGalery.appendChild(imagineGal);

let galleryImages = document.querySelectorAll(".imagini img");
let imagineCurenta;

let globalImageIndex = 0;

galleryImages.forEach(function (imagine, index) {
	imagine.onclick = function () {
		globalImageIndex = index;
		imagineGal.src = imagine.src;
		document.body.appendChild(popGalery);
	}

})

xBox.addEventListener('click', e => {
	e.stopPropagation();
	document.body.removeChild(popGalery);
})

nextImg.addEventListener('click', e => {
	e.stopPropagation();
	globalImageIndex += 1;
	if(globalImageIndex == galleryImages.length) globalImageIndex = 0;
	imagineGal.src = galleryImages[globalImageIndex].src;
})

prevImg.addEventListener('click', e => {
	e.stopPropagation();
	globalImageIndex -= 1;
	if(globalImageIndex == -1) globalImageIndex = galleryImages.length - 1;
	imagineGal.src = galleryImages[globalImageIndex].src;
})

let randomColor = Math.floor(Math.random()*16777215).toString(16);
let randomColorBox = document.getElementById("RdmClr");
console.log(randomColorBox);
randomColorBox.style.backgroundColor = '#' + randomColor;