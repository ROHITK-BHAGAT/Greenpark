// Scroll on click
var navbar = document.querySelector(".navbar");

let sticky = navbar.offsetTop;


function scrollFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


window.addEventListener('scroll', scrollFunction);

// Popup

var popup = document.querySelector('.popup');
// var popup1 = document.querySelector('.popup1');
var body = document.querySelector('body');
var sec = document.querySelectorAll("div");

function myPopup() {
    if (popup.style.display === "none") {
        popup.style.display = "flex";
		// body.style.overflow = "hidden";
       // body.classList.add("parentDisable");
       // sec.classList.add("parentDisable");
    } 
  }

function closePopup(){
    popup.style.display = "none";
   	//body.style.overflowY = "scroll";
   // body.style.overflowX = "hidden";
    //body.classList.remove("parentDisable");
}

//Function to show pop-up after every 30 sec
var popupagain = setInterval(()=>{
    myPopup()
    //console.log("call")
},1500000)


// Calling Thank popup

var thank = document.querySelector(".thank-popup");

function thankpop(){
    thank.style.display="flex";
  	popup.style.display = "none";
   // navbar.classList.add('parentDisable1');
//    setTimeout(thankClose(), 5000);
}

function thankClose(){
    thank.style.display="none";
  //  navbar.classList.remove('parentDisable1');
}

// Send mail on Click

function sendMail(){
    (function(){
        emailjs.init("wab7q1A_EZuskFEQZ");
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        phone_no: document.querySelector("#phone_no").value, 
        email_id: document.querySelector("#email_id").value,  
    };

    var serviceID = "service_elgp3yr";
    var tempelateID = "template_hye8v4b";

    emailjs.send(serviceID, tempelateID, params)
    .then( res => {
        document.getElementById("mailform").reset()
        thankpop();
        clearInterval(popupagain);
        closePopup();
    })
    .catch();
    return false
}


// Hamburger menu


// var enq = document.querySelector(".enquire");
// var ognav =document.querySelector(".green");
// var head = document.querySelector(".header");

var bar = document.querySelector(".bar-ham");
var xmark = document.querySelector(".x-ham");
var hamburger = document.querySelector(".hamburger");

function hamMenu(){
    bar.style.display = "none";
    xmark.style.display = "flex";
    hamburger.style.display = "flex";
}

function closehamMenu(){
    xmark.style.display = "none";
    bar.style.display = "flex";
    hamburger.style.display = "none";
}