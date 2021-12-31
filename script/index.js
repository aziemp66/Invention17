//Get Elemenets
let burgerIcon = document.querySelector(".hamburger-i");
let burgerContent = document.getElementById("hamburger-content");
let opacityBg = document.getElementsByClassName("opacityBg");
//Make Function Show Element
function opacityElement(contentDisplay) { 
    for (let i = 0; i < opacityBg.length; i++) { 
        if (contentDisplay != "none") {
            opacityBg[i].style.opacity = "1";
        } else { 
             opacityBg[i].style.opacity = ".3";
        }
    }
}
function showElement() { 
    let contentDisplay = burgerContent.style.display;
    if (contentDisplay != "none") {
        burgerContent.style.display = `none`;
    } else { 
        burgerContent.style.display = `flex`;
    }
    opacityElement(contentDisplay);
}
//Give Function to Burger Icon
burgerIcon.addEventListener("click", showElement)