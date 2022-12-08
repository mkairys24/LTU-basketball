var sabonis = document.getElementById("sabonis")
var marciulionis = document.getElementById("marciulionis")
var jasikevicius = document.getElementById("jasikevicius")
var tabs = document.getElementsByClassName("tab")
var btn1 = document.getElementsByClassName("btn1")
var btn2 = document.getElementsByClassName("btn2")
var btn3 = document.getElementsByClassName("btn3")
var buttons = document.getElementsByClassName("buttons")

for(var tab of tabs) {
    tab.style.display = "none"
}

function displayTab(id) {
    for(var tab of tabs) {
        tab.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}


// neranda indexo :D

var backgroundColors = ["#b64f5e", "#e5b45f", "#03cbf7"]
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        console.log(this.getAttribute("index"))
    })
}

