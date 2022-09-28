let popUp = document.querySelector(".popUp");
let main = document.querySelector("main");
let cancel = document.querySelector(".cancel");

// The pop up should display when the system is loading
window.addEventListener("load", ()=>{
    popUp.style.transform=" translateY(0px)";

      // Clear error after 3 seconds
  setTimeout(clearPop, 3000);

});

// Clear error
function clearPop(){
  popUp.remove();
}

// The pop up should disappear when icon cancel is clicked
cancel.addEventListener("click", ()=>{
    popUp.style.display="none";
});


// The pop up should disappear when this options is true
main.addEventListener("click", (e)=>{
if (e.target == main) {
    popUp.style.display="none";
}
});