// ================================
// Sweet Crumbs JavaScript
// ================================

// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("🍰 Welcome to Foody Castle! We bake happiness for every celebration.");
    }, 500);
};

// ================================
// Order Buttons
// ================================

const orderButtons = document.querySelectorAll(".cake-card button");

orderButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("🎉 Cake added successfully!\nProceed to the Order page to complete your purchase.");
    });
});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });
});

// ================================
// Scroll to Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff5fa2";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(document.documentElement.scrollTop > 300){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }

});

topButton.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ================================
// Floating Hearts Animation
// ================================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100+"vw";

    heart.style.top = "100vh";

    heart.style.fontSize = "25px";

    heart.style.animation = "floatUp 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(createHeart,4000);

// ================================
// Dynamic Year in Footer
// ================================

const footer = document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Foody Castle | Designed by Fatymer ❤️`;

}