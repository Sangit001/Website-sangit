let body = document.body;
let dark = document.getElementById("night");
let light = document.getElementById("light");
let isDark = false;
let profileBtn = document.getElementsByClassName("profile-message-button")[0];
function darkLight(){
        if(isDark == false){
    dark.style.display = "none";
    light.style.display = "block";
    body.style.color = "white";
    body.style.backgroundColor = "rgba(31, 31, 31)";
    profileBtn.style.backgroundColor = "white";
    profileBtn.style.color = "black";

    isDark = true;
    }else{
        dark.style.display = "block";
        light.style.display = "none";
            body.style.color = "black";
                body.style.backgroundColor = "white";
                profileBtn.style.backgroundColor = "black";
                profileBtn.style.color = "white";
        isDark = false;

    }
}


// Search box

let searchBox = document.getElementsByClassName("search-box")[0];
let searchicon = document.getElementsByClassName("search-section")[0];
isSearch = false;
function toggleSearch(){
    if(isSearch == false){
    searchBox.style.display = "block";
    searchicon.style.display = "none";
    isSearch = false;
    }else{
        searchBox.style.display = "none"

    }
}


// Contact section





  const form = document.getElementById("form-section");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 🚫 STOP REFRESH
  });

//   submit form


(function(){
    emailjs.init("rCBxulKZwX_5icvM6"); // Public key
})();

function sendMessage(){

    let username = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");



     if(username.value==""){
        alert("!Username can't be empty");
    }
    else if(email.value == ""){
        alert("!Email can't be empty");
    }
    else if(message.value == ""){
        alert("Please leave any message");
    }
    else{
 let details = {
    from_name: username.value,
    from_email: email.value,
    message: message.value
  };

  emailjs.send("service_bgcp55d", "template_87hi9ej", details)
    .then(function(response) {
      alert("Message sent successfully");
      email.value = "";
      username.value = "";
      message.value = "";
    }, function(error) {
      alert("Something went wrong");
      console.log("FAILED...", error);
    });

    }
}



