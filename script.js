const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
const card = document.querySelectorAll(".card");
const nav = document.querySelector("#nav");
const navHeading = document.querySelectorAll(".nav-heading");
const overlay = document.querySelectorAll(".overlay");
const page4H1 = document.querySelector("#page4-h1");
const page4Elem = document.querySelectorAll(".elem");
const arrowDiv = document.querySelector("#arrow-div");
const arrow = document.querySelector("#arrow");

document.addEventListener("mousemove", (dets) => {
    setTimeout(function () {
        cursor.style.left = `${dets.x}px`;
        cursor.style.top = `${dets.y}px`;
        cursorBlur.style.left = `${dets.x - 200}px`;
        cursorBlur.style.top = `${dets.y - 200}px`;
    }, 100);
});

gsap.to("#nav", {
    backgroundColor: "black",
    height: "105px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1,
    },
});

// gsap.from(".card", {
//     // scale: 0.4,
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.1,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         // markers: true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 1,
//     },
// });

gsap.from("#colon-1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#colon-2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});

gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 4,
    },
});

navHeading.forEach((h) => {
    h.addEventListener("mouseenter", () => {
        if (nav.style.backgroundColor === "black") {
            h.style.color = "#95C11E";
        } else {
            h.style.color = "black";
        }
    });
});

navHeading.forEach((h) => {
    h.addEventListener("mouseleave", () => {
        h.style.color = "white";
    });
});

page4Elem.forEach((e) => {
    e.addEventListener("mouseover", () => {
        console.log(e);
        page4H1.style["-webkit-text-stroke"] = "1px #95C11E";
    });
});

page4Elem.forEach((e) => {
    e.addEventListener("mouseleave", () => {
        console.log(e);
        page4H1.style["-webkit-text-stroke"] = "1px white";
    });
});

arrowDiv.addEventListener("mouseenter", () => {
    arrow.style.backgroundColor = "#95C11E";
    arrow.style.height = "55px";
    arrow.style.width = "55px";
    arrow.style.left = "30%";
    arrow.style.bottom = "32.5%";
});
arrowDiv.addEventListener("mouseleave", () => {
    arrow.style.backgroundColor = "transparent";
    arrow.style.height = "155px";
    arrow.style.width = "155px";
    arrow.style.left = "-3%";
    arrow.style.bottom = "0%";
});
