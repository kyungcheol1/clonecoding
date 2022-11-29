const head_topmenu = document.querySelector(".head_topmenu")
const head_any_button = document.querySelector("#head_any_button")
const searchinput = document.querySelector("#searchinput")
const search_popup = document.querySelector("#search_popup")
const popuppre = document.querySelector(".popuppre")
const popupnext = document.querySelector(".popupnext")
const product = document.querySelector("#product")
const pag_number = document.querySelector(".pag_number")

function head_topmenuHandler(e){
    const target = e.target
    if (target.className === "head_hide_appear" & head_any_button.className === "on"){
        head_any_button.className = "off"
    } else {
        head_any_button.className = "on"
    }
}

function searchinputHandler(e){
    const target = e.target
    if (search_popup.className === "on") {
        search_popup.className = "off"
    } else {
        search_popup.className = "on"
    }    
}

function popuppreHandler(e){
    product.className = "page1"
    pag_number.innerHTML = "01-02"
}

function popupnextHandler(e){
    product.className = "page2"
    pag_number.innerHTML = "02-02"
}

head_topmenu.addEventListener("click", head_topmenuHandler)
searchinput.addEventListener("click", searchinputHandler)
popuppre.addEventListener("click", popuppreHandler)
popupnext.addEventListener("click", popupnextHandler)
