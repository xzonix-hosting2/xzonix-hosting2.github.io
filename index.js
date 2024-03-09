const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
   
    // ----- DISPLAY -----
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "";
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "";
    }
   
    // ----- VISIBILITY -----
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "";
    }
    else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "";
    }
});
