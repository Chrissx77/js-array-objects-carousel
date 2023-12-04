
const images =
    [
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

let container = document.querySelector(".image-container");

images.forEach((el, index) => {
    let classImage = "item";
    if (index === 0) {
        classImage += " active";
    }
    container.innerHTML +=
        `<div class="${classImage}">
    <img src=${el.image} alt="" srcset="">
    <p class = "title">${el.title}</p>
    <p class = "text">${el.text}</p>
    </div>`
});

const item_colletion = document.getElementsByClassName("item");

let index = 0;
const btn_next = document.getElementById("next");
btn_next.addEventListener("click",
    function () {
        btn_previous.style.display = "block";
        if (index < item_colletion.length - 1) {
            item_colletion[index].classList.remove("active");
            index = (index + 1) % item_colletion.length;
            item_colletion[index].classList.add("active");
            if (index === item_colletion.length - 1) {
                btn_next.style.display = "none";
                index = 0;
            }
        }
    }
)


let i = item_colletion.length - 1;
const btn_previous = document.getElementById("previous");
btn_previous.addEventListener("click",
    function () {
        btn_next.style.display = "block";
        if (i >= 0) {
            item_colletion[i].classList.remove("active");
            i--;
            item_colletion[i].classList.add("active");
            if (i === 0) {
                btn_previous.style.display = "none";
                i = item_colletion.length - 1;
            }
        }
    }
)