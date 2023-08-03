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

const noName = document.getElementById("noname");
const noMail = document.getElementById("nomail");
const noSelect = document.getElementById("noselect");

submitButton.addEventListener("click",
function validation(){
  event.preventDefault();
  let text;
  if(userName.value == "")
  {
    text = "Name cannot be empty.";
    noName.textContent = text;
    placement.textContent = '';
  }
  else if(userName.Value != '')
  {
    noName.textContent = '';
    placement.textContent = '';
  }

  if(userEmail.value == "")
  {
    text = "Email cannot be empty.";
    noMail.textContent = text;
    placement.textContent = '';
  }
  else if(userEmail.Value != '')
  {
    noMail.textContent = '';
    placement.textContent = '';
  }

  if(userInterest.value == "" )
  {
    text = "Select an option listed.";
    noSelect.textContent = text;
    placement.textContent = '';
  }
  else if(userInterest.Value != '')
  {
    noSelect.textContent = '';
    placement.textContent = '';
  }

  if(userName.value != '' && userEmail.value != '' && userInterest.value != '')
  {
    text = "FORM SUBMITTED";
    placement.textContent = text;
    userName.value = '';
    userEmail.value = '';
    userInterest.value = '';
  }
})