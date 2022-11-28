const head_topmenu = document.querySelector(".head_topmenu")
const head_any_button = document.querySelector("#head_any_button")

function head_topmenuHandler(e){
    const target = e.target
    if (target.className === "head_hide_appear" & head_any_button.className === "on"){
        head_any_button.className = "off"
    } else {
        head_any_button.className = "on"
    }
}

head_topmenu.addEventListener("click", head_topmenuHandler)