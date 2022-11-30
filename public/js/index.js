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
const eventSlide = document.querySelectorAll(".slide > li")
const slideul = document.querySelector(".slide")
const eventnumber = document.querySelector(".eventnumber")
const btnbox = document.querySelector(".btnbox")

const sircleover = document.querySelectorAll("#sircleover > li")
const sirclepre = document.querySelector(".sirclepre")
const sirclenext = document.querySelector(".sirclenext")


function head_topmenuHandler(e){
    const target = e.target
    if (target.className === "head_hide_appear" & head_any_button.className === "on"){
        head_any_button.className = "off"
    } else {
        head_any_button.className = "on"
    }
}

head_topmenu.addEventListener("click", head_topmenuHandler)

function searchinputHandler(e){
    const target = e.target
    if (search_popup.className === "on") {
        search_popup.className = "off"
    } else {
        search_popup.className = "on"
    }    
}

searchinput.addEventListener("click", searchinputHandler)

function popuppreHandler(e){
    product.className = "page1"
    pag_number.innerHTML = "01-02"
}

function popupnextHandler(e){
    product.className = "page2"
    pag_number.innerHTML = "02-02"
}

popuppre.addEventListener("click", popuppreHandler)
popupnext.addEventListener("click", popupnextHandler)

/*banner slide */
/**/

let count = 0
index_number.innerHTML = count

function slide(){
    let pre = count === 0 ? banner_img.length - 1 : count - 1 
    banner_img[count].className = "on"
    banner_img[pre].className = ""
    
    index_number.innerHTML = count
    if(++count === banner_img.length) count = 0
}

setInterval(slide,5000)
let sictrans = 0

/*sircle slide **/

function sicrleHandler(e){
    const target = e.target
    sirclelist.style.transition = "all 500ms"
    if(sictrans === 0){
        e.preventDefault()
    } else if(target.className === "sirclepre"){
        sictrans += 295
        sirclelist.style.transform = `translateX(${sictrans}px)`
    } 

    if(sictrans === -885){
        e.preventDefault()
    } else if (target.className === "sirclenext"){
        sictrans -= 295
        sirclelist.style.transform = `translateX(${sictrans}px)`
    }
}

sirclepre.addEventListener("click", sicrleHandler)
sirclenext.addEventListener("click", sicrleHandler)


/*event slide*/

const eventSlideclone1 = eventSlide[0].cloneNode(true)
const eventSlidelast = eventSlide[eventSlide.length-1].cloneNode(true)
slideul.insertBefore(eventSlidelast, eventSlide[0])
slideul.append(eventSlideclone1)

const eventSlideClone = document.querySelectorAll(".slide > li")
const liwide = eventSlideClone[0].clientWidth
const sliderWidth = liwide * eventSlideClone.length;

let translate = 0
let innercount = 1
let eventcount = 1

translate = -liwide
slideul.style.transform = `translateX(${translate}px)`;
slideul.style.width = `${sliderWidth}px`

function change(){
    slideul.style.transition = 'none'
    eventcount = 1
    translate = -liwide
    slideul.style.transform = `translateX(${translate}px)`
}

function eventSlide1() {
    eventcount++
    innercount++
    translate += -liwide;
    slideul.style.transform = `translateX(${translate}px)`;
    slideul.style.transition = `all 1000ms`
    if (eventcount === eventSlideClone.length -1)
        {setTimeout(change, 1000)}
    if (innercount === eventSlide.length + 1) innercount = 1
    eventnumber.innerHTML = `${innercount} - ${eventSlide.length}`
}
let eventInterval = 0
eventInterval = setInterval(eventSlide1, 5000)

function eventbtnHandler(e){
    const target = e.target
    clearInterval(eventInterval)
    if (target.className === "eventpre"){
        eventcount--
        innercount--
        translate += liwide
        slideul.style.transform = `translateX(${translate}px)`
            if(eventcount === 0){
                setTimeout(function(){
                    slideul.style.transition = "none"
                    eventcount = eventSlideClone.length -2
                    translate = -(liwide * eventcount)
                    slideul.style.transform = `translateX(${translate}px)`
                }, 1000)
            }slideul.style.transition = `all 1000ms`
    } else if (target.className === "eventnext"){
        eventcount++
        innercount++
        translate -= liwide
        slideul.style.transform = `translateX(${translate}px)`
            if (eventcount === eventSlideClone.length -1)
            {setTimeout(change, 1000)}
            slideul.style.transition = `all 1000ms`
    }
    eventInterval = setInterval(eventSlide1, 5000)
}

btnbox.addEventListener("click", eventbtnHandler)
