const head_topmenu = document.querySelector(".head_topmenu")
const head_any_button = document.querySelector("#head_any_button")
const searchinput = document.querySelector("#searchinput")
const search_popup = document.querySelector("#search_popup")

const bannerpre = document.querySelector(".bannerpre")
const bannernext = document.querySelector(".bannernext")

const popuppre = document.querySelector(".popuppre")
const popupnext = document.querySelector(".popupnext")
const product = document.querySelector("#product")
const pag_number = document.querySelector(".pag_number")

const popupbutton = document.querySelector("#popupbutton")
const popupmenu = document.querySelector("#popupmenu")

const banner_img = document.querySelectorAll("#banner_img > li")
const index_number = document.querySelector(".index_number")
const eventSlide = document.querySelectorAll(".slide > li")
const slideul = document.querySelector(".slide")
const eventnumber = document.querySelector(".eventnumber")
const btnbox = document.querySelector(".btnbox")

const sircleover = document.querySelectorAll("#sircleover > li")
const sirclepre = document.querySelector(".sirclepre")
const sirclenext = document.querySelector(".sirclenext")

const castpre = document.querySelector(".castpre")
const castnext = document.querySelector(".castnext")
const castpage1 = document.querySelector("#castingpage1")
const castpage2 = document.querySelector("#castingpage2")

const familybtn = document.querySelector(".familybtn > button")
const family = document.querySelector(".family")


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

/*popupmenu */

function popupmenuHandler(){
    if(popupbutton.className === "on"){
        popupbutton.className = ""
        popupmenu.className = ""
    } else {
        popupbutton.className = "on"
        popupmenu.className = "on"}
}

popupbutton.addEventListener("click", popupmenuHandler)

/*banner slide */

let count = 0
index_number.innerHTML = count

function slide(){
    let pre = count === 0 ? banner_img.length - 1 : count - 1 
    banner_img[count].className = "on"
    banner_img[pre].className = ""
    
    index_number.innerHTML = count
    if(++count === banner_img.length) count = 0
}

function bannerHandler(e){
    clearInterval(slide)
    const target = e.target 
    let pre = count === 0 ? banner_img.length - 1 : count - 1 
    let next = count === banner_img.length - 1  ? 0 : count + 1
    if (target.className === "bannernext"){
        banner_img[count].className = "on"
        banner_img[pre].className = ""
        count = next
    } else if (target.className === "bannerpre"){
        banner_img[count].className = "on"
        banner_img[next].className = ""
        count = pre
    } index_number.innerHTML = count
}
setInterval(slide,5000)

bannerpre.addEventListener("click", bannerHandler)
bannernext.addEventListener("click", bannerHandler)


let sictrans = 0

/*newproduct hot new books*/ 

const newbookli = document.querySelectorAll(".books > li")
const newpre = document.querySelector(".newpre")
const newnext = document.querySelector(".newnext")
const booksul = document.querySelector(".books")

function find(){
    for(let i =0; i<newbookli.length; i++){
        for(let j=0; j<4; j++){
            if(newbookli[i].classList[j] === "on") return i
        }
    }
}

function nowfind(){
    for(let i =0; i<newbookli.length; i++){
        for(let j=0; j<4; j++){
            if(newbookli[i].classList[j] === "now") return i
        }
    }
}

let newliwidth = 0
let newtranslate = 0
let newwidth = 0
let newcount = 0

for(let i =0 ; i<newbookli.length; i++){
    newbookli[i].addEventListener("mouseover", function(e){
        let now = find()
        newbookli[i].classList.add("on")
        if (now !== i) newbookli[now].classList.remove("on")
        let newnow = nowfind()
        newwitdh = newbookli[0].clientWidth + 36
        newtranslate = -newwitdh * newnow
        booksul.style.transform = `translateX(${newtranslate}px)`
    })
}

for(let i =0 ; i<newbookli.length; i++){
    newbookli[i].setAttribute("data-set", i)
}

function newbookHandler(e){
    const target = e.target

    if (target.className === "newnext"){
        let pre = newcount
        let renow = nowfind()
        newwidth = newbookli[pre].clientWidth + 36
        newtranslate += -newwidth
        let now = ++newcount
        newbookli[renow].classList.remove("now")
        newbookli[now].classList.add("now")
        booksul.style.transform = `translateX(${newtranslate}px)`
        booksul.style.transition = "all 1000ms"
    } else if (target.className === "newpre"){
        let pre = newcount + 4
        newwidth = newbookli[pre].clientWidth + 36
        newtranslate += newwidth
        let now = --newcount
        let renow = nowfind()
        newbookli[renow].classList.remove("now")
        newbookli[now].classList.add("now")
        booksul.style.transform = `translateX(${newtranslate}px)`
        booksul.style.transition = "all 1000ms"
    }

    if(newtranslate < 10){
        newpre.classList.remove("none")
    } else if (newtranslate > -10)
        newpre.classList.add("none")
    if(newtranslate < -1300){
        newnext.classList.add("none")
    } else if (newtranslate > - 1300){
        newnext.classList.remove("none")
    }
}

newnext.addEventListener("click", newbookHandler)
newpre.addEventListener("click", newbookHandler)

/*casting*/

castpre.addEventListener("click", function(){
    castpage1.classList.add('on')
    castpage1.classList.remove("off")
    castpage2.classList.add('off')
    castpage2.classList.remove("on")
    castpre.classList.add("none")
    castnext.classList.remove("none")
})

castnext.addEventListener("click", function(){
    console.log(11)
    castpage2.classList.remove("off")
    castpage2.classList.add('on')
    castpage1.classList.remove('on')
    castpage1.classList.add('off')
    castnext.classList.add("none")
    castpre.classList.remove("none")
})
    

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


/*footer*/ 

function familybtnHandler(){
    if(familybtn.className === "on"){
        familybtn.className = ""
        family.classList.remove("on")
    } else {
        familybtn.className = "on"
        family.classList.add("on")
    }
}

familybtn.addEventListener("click", familybtnHandler)