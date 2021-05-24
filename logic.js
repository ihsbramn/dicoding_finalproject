console.log("conn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background= "#a9f1df";
} else {

    document.getElementById("navbar").style.opacity = "1"
}
}