let title = document.getElementById("title");
let yesbtn = document.getElementById("yes-btn");
let nobtn = document.getElementById("no-btn");

window.onload = function() {
  yesbtn.addEventListener("click", function() {
    console.log('yes Here');
    title.innerText = "You got that right!"
  })

  nobtn.addEventListener("click", function() {
    console.log('no Here');
    title.innerText = "Woah someone has a P.H.D. in sass!"
  })
}
