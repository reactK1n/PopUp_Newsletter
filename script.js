let popUp = document.querySelector(".popUp");
let main = document.querySelector("main");
let cancel = document.querySelector(".cancel");

// The pop up should display when the system is loading
window.addEventListener("load", ()=>{
    popUp.style.transform=" translateY(0px)";
});

// The pop up should disappear when icon cancel is clicked
cancel.addEventListener("click", ()=>{
    popUp.style.display="none";
});


// The pop up should disappear when this options true met
main.addEventListener("click", (e)=>{
if (e.target == main) {
    popUp.style.display="none";
}
});