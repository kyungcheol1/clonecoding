const head_topmenu = document.querySelector(".head_topmenu")
const head_any_button = document.querySelector("#head_any_button")
const searchinput = document.querySelector("#searchinput")
const search_popup = document.querySelector("#search_popup")
const popuppre = document.querySelector(".popuppre")
const popupnext = document.querySelector(".popupnext")
const product = document.querySelector("#product")
const pag_number = document.querySelector(".pag_number")
const banner_img = document.querySelectorAll("#banner_img > li")
const index_number = document.querySelector(".index_number")

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

let count = 0
index_number.innerHTML = count

function slide(){
    let pre = count === 0 ? banner_img.length - 1 : count - 1 
    banner_img[count].className = "on"
    banner_img[pre].className = ""
    
    index_number.innerHTML = count
    if(++count === banner_img.length) count = 0
}

setInterval(slide,2000)

head_topmenu.addEventListener("click", head_topmenuHandler)
searchinput.addEventListener("click", searchinputHandler)
popuppre.addEventListener("click", popuppreHandler)
popupnext.addEventListener("click", popupnextHandler)
