const imgElement = document.getElementById("myImage");
const wrapperDiv = document.getElementById("wrapperDiv");
const section1 = document.getElementById("section1");

// Hover (mouse üzerine geldiğinde)
imgElement.addEventListener("mouseenter", function () {
    imgElement.src = "hacker2.png";  // Yeni resim URL'si
    
    wrapperDiv.style.border = "none";
    wrapperDiv.style.marginBottom = "0px";
    wrapperDiv.style.marginTop = "0px";
    wrapperDiv.style.height = "160px";
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
    wrapperDiv.style.height = "150px";
    wrapperDiv.style.borderRadius = "50%";
    wrapperDiv.style.borderColor = "#ff6200"

});
