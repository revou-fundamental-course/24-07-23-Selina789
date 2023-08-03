//image slide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slidePages");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000);
}

//validation javascript
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userInterest = document.getElementById("interest");
const submitButton = document.getElementById("submitButton");
const placement = document.getElementById("alerting");

submitButton.addEventListener("click",
function validation(){
  event.preventDefault();
  let text;
  if(userName.value == "" || userEmail.value == "" || userInterest.value == "" )
  {
    text = "Please fill everything.";
    placement.textContent = text;
  }

  else
  {
    text = "Thank you, ";
    placement.textContent = text + userName.value
  }

})