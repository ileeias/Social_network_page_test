const registration = document.querySelector(".registration");
const regButton = document.querySelector("#openRegistration");
const closeReg = document.querySelector("#closeRegistration");

const login = document.querySelector(".login");
const logButton = document.querySelector("#openLogin");
const closeLog = document.querySelector("#closeLogin");

const body = document.querySelector("body");
body.addEventListener("click", function (event) {
   console.log(event.target); 
   if (event.target === regButton) {
    login.classList.add("hide");
    registration.classList.remove("hide");
   } 
   if (event.target === closeReg) {
    registration.classList.add("hide");
   }
   if (event.target === logButton) {
    login.classList.remove("hide");
    registration.classList.add("hide");
   }
   if (event.target === closeLog) {
    login.classList.add("hide");
   }
   
});

/* Posts */

const posts__list = document.querySelectorAll(".posts__list");
const post = document.querySelector(".posts__container");
const buttons = document.querySelectorAll(".button");
const offsetsize = post.offsetWidth
let slideIndex = 0;
let PostNumberIndex = 0;
function previousSlide () {
    const posts = posts__list[postAythorIndex].querySelectorAll(".post");
    if (slideIndex !== 0) {
        slideIndex--;
        PostNumberIndex--;
        posts__list[postAythorIndex].style.marginLeft = `-${800 * slideIndex}px`;
        previousPostComments(PostNumberIndex)
        comment.scrollTop = 0;
    }
}   
function nextSlide () {
    const posts = posts__list[postAythorIndex].querySelectorAll(".post");
    if (slideIndex !== posts.length - 1) {
        slideIndex++;
        PostNumberIndex++;
        posts__list[postAythorIndex].style.marginLeft = `-${800 * slideIndex}px`;
        nextPostComments(PostNumberIndex)
        comment.scrollTop = 0;
    }
}   


function previousProfilePost (count) {
    posts__list[0].style.marginTop = `-${posts__list[0].offsetHeight * count}px`;
}   
function nextProfilePost (count) {
    posts__list[0].style.marginTop = `-${posts__list[0].offsetHeight * count}px`;
}
function ProfileComments(num) {
    let quantityMargin = 0;
    if (num === 0) {
        return 0
    } else {
        for (let i = 0; i === num - 1; i++) {
            quantityMargin += posts__list[i].querySelectorAll(".post").length
            console.log(quantityMargin);
            return quantityMargin
        }
    }
}

/* Comments */

const comments__list = document.querySelectorAll(".comments__list");
const comment = document.querySelector(".comments__container");
// const buttons = document.querySelectorAll(".button");
const comments = document.querySelectorAll(".comment");
const offsetsize2 = comment.offsetHeight
let scrolIndex = 0;
function scrolUp () {
    if (scrolIndex !== 0) {
        scrolIndex--;
        comments__list[PostNumberIndex].style.marginTop = `-${300 * scrolIndex}px`;
    }
}   
function scrolDown () {
    const quantComments = comments__list[postAythorIndex].querySelectorAll(".comment")
    if (scrolIndex !== quantComments.length - 4) {
        scrolIndex++;
        comments__list[PostNumberIndex].style.marginTop = `-${300 * scrolIndex}px`;
    }
}   
buttons[2].addEventListener("click", scrolUp);
buttons[3].addEventListener("click", scrolDown);

comment.addEventListener("wheel", function (event) {
    event.preventDefault();
    comment.scrollTop += event.deltaY;
})
const comments_list_container = document.querySelector(".comments_list_container")
function previousPostComments(count) {
    comments_list_container.style.marginLeft = `-${comments__list[0].offsetWidth * count}px`;
}
function nextPostComments(count) {
    comments_list_container.style.marginLeft = `-${comments__list[0].offsetWidth * count}px`;
}

/* Profile */

const profile__list = document.querySelector(".profile__list");
const  profile = document.querySelector(".profile__container");
const button_profile = document.querySelectorAll(".button_profile");
const profiles = document.querySelectorAll(".profile");
const offsetsize_profile = profile.offsetWidth
let slideProfIndex = 0;
let postAythorIndex = 0;
function previousProfSlide () {
    slideIndex = 0;
    const posts = posts__list[postAythorIndex].querySelectorAll(".post");
    posts__list[postAythorIndex].style.marginLeft = "0px";
    if (slideProfIndex !== 0) {
        postAythorIndex--;
        slideProfIndex--;
        profile__list.style.marginLeft = `-${800 * slideProfIndex}px`;
        previousProfilePost(slideProfIndex)
        let IndexNextPostComments = ProfileComments(postAythorIndex)
        PostNumberIndex = 0;
        PostNumberIndex -= IndexNextPostComments;
        nextPostComments(IndexNextPostComments)
    }
}   
function nextProfSlide () {
    slideIndex = 0;
    const posts = posts__list[postAythorIndex].querySelectorAll(".post");
    posts__list[postAythorIndex].style.marginLeft = "0px";
    if (slideProfIndex !== profiles.length - 1) {
        postAythorIndex++;
        slideProfIndex++;
        profile__list.style.marginLeft = `-${800 * slideProfIndex}px`;
        nextProfilePost(slideProfIndex)
        let IndexNextPostComments = ProfileComments(postAythorIndex)
        PostNumberIndex = 0;
        PostNumberIndex += IndexNextPostComments;
        nextPostComments(IndexNextPostComments)
    }
}   
button_profile[0].addEventListener("click", previousProfSlide);
button_profile[1].addEventListener("click", nextProfSlide);
buttons[0].addEventListener("click", previousSlide);
buttons[1].addEventListener("click", nextSlide);