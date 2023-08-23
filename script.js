"use strict"

const mainNav = document.querySelector(".main-nav");
const header = document.querySelector(".header")

//event propagation
document.querySelector(".main-nav-list").addEventListener("click", 
function(e){
    e.preventDefault();
    if (e.target.classList.contains("main-nav-link")){
        // console.log(e.target.getAttribute("href"));
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({behavior: "smooth"})
    }
})

// menu fade

const handleHover = function(e, opacity){
    if (e.target.classList.contains("main-nav-link")){

        const link = e.target;
        const sibling = link.closest(".main-nav").querySelectorAll(".main-nav-link");
        const logo = document.querySelector(".logo");

        sibling.forEach(el => {
            if (el !== link){
                el.style.opacity = opacity;
                logo.style.opacity = opacity;
            }
        });
       };
}

mainNav.addEventListener("mouseover", function(e){
   handleHover(e, 0.5);
})

mainNav.addEventListener("mouseout", function(e){
    handleHover(e, 1);
})

// stiky nav
const sectionIntro = document.querySelector(".intro");

const sticky = function(entries){
    const [entry] = entries
    //console.log(entry);
    if(!entry.isIntersecting) {
        header.classList.add("sticky");
        sectionIntro.classList.add("sticky");
    }

    if(entry.isIntersecting) {
        header.classList.remove("sticky");
        sectionIntro.classList.remove("sticky");
    }
}

const sectionIntroObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0,
    rootMargin: "-110px"
})

sectionIntroObserver.observe(sectionIntro);

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function(entries, observe){
    const [entry] = entries;
    
    if(!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observe.unobserve(entry.target);
}

const allSectionsObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
});

allSections.forEach(section => {
    allSectionsObserver.observe(section);
    section.classList.add("section--hidden");
})

//closest
// document.querySelector(".main-nav-list").addEventListener("click", 
// function(e){
//     const clicked = e.target.closest(".main-nav-link");
//     console.log(clicked);
// })


// CP
// const time = function(str){
//     let type = str.slice(str.length-2);
//     let hour = str.slice(0, 2);
//     let rest = str.slice(2, str.length-2);
//     let intHour = parseInt(hour);

//     if (type == "PM"){
//         if (intHour === 12) return intHour+rest;
//         intHour = intHour + 12;
//         return intHour+rest;
//     } else if (type == "AM"){
//         if (intHour === 12){
//             intHour = 0;
//             return intHour+"0"+rest;
//         } else return "0"+intHour+rest;
//     } 

// }

// let str = "07:01:00AM";
// let type = str.slice(str.length-2);
// let hour = str.slice(0, 2);
// let rest = str.slice(2, str.length-2);
// let intHour = parseInt(hour);
// console.log(time(str));


