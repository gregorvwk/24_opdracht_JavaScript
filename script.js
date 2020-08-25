let btn = document.getElementById("mybutton");
let btnBackground = document.getElementById("background");
let content = document.getElementById("changes");
let click = function(){
    alert("button clicked");
}
let backgroundChange = function(){
    if (content.className == "blue-background"){
        content.className = "red-background";
    } else {
        content.className = "blue-background";
    }
}
btn.addEventListener("click", click);
btnBackground.addEventListener("click", backgroundChange);
