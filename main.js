const imgElement = document.getElementById("myImage");
const wrapperDiv = document.getElementById("wrapperDiv");
const section1 = document.getElementById("section1");
const hamburger = document.getElementById("hamburger");
const menuContainer = document.getElementById("listContainer");
let isMenuContainerActive = false;


document.addEventListener("click", function (event) {
    if(!menuContainer.contains(event.target) && !hamburger.contains(event.target)){
        menuContainer.style.display = "none";
        isMenuContainerActive = false;
    }
});

// Hover (mouse üzerine geldiğinde)
imgElement.addEventListener("mouseenter", function () {
    imgElement.src = "hero.png";  // Yeni resim URL'si
    
    wrapperDiv.style.border = "none";
    wrapperDiv.style.marginBottom = "0px";
    wrapperDiv.style.marginTop = "0px";
    wrapperDiv.style.height = "260px";
    wrapperDiv.style.borderRadius = "50%";
    //wrapperDiv.style.borderBottomLeftRadius = "50%";
    //wrapperDiv.style.borderBottomRightRadius = "50%"
});

// Mouse çıktığında eski resme geri dönme
imgElement.addEventListener("mouseleave", function () {
    imgElement.src = "sdpp3.jpg";  // İlk resim URL'si

    wrapperDiv.style.border = "solid";
    wrapperDiv.style.marginBottom = "0px";
    wrapperDiv.style.marginTop = "10px";
    wrapperDiv.style.height = "250px";
    wrapperDiv.style.borderRadius = "50%";
    wrapperDiv.style.borderColor = "#ff6200"
});

hamburger.addEventListener("click", function() {
    if(isMenuContainerActive){
        menuContainer.style.display = "none";
        isMenuContainerActive = false;
    }
    else{
        menuContainer.style.display = "block";
        isMenuContainerActive = true;
    }
});




