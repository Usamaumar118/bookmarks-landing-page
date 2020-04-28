
// Form Validation 
const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})


function checkInputs(){

    const emailValue = email.value.trim()

    if(emailValue === '' || emailValue === null){
        setErrorFor(email, 'Email cannot be empty')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Whoops, make sure it\'s email')
    }else{
        email.parentElement.classList = "cta__content__form--input-container";
    }

}

function setErrorFor(input, msg){

    const formControl = input.parentElement
    const errorMsg = document.querySelector('.error-msg')

    formControl.classList = "cta__content__form--input-container error";
    errorMsg.innerText = msg;
}


function isEmail(email){
    
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}


////    FEATURE BTN 

const featureBtn1 = document.getElementById('features-btn-1')
const featureBtn2 = document.getElementById('features-btn-2')
const featureBtn3 = document.getElementById('features-btn-3')



const feature1Content = '<div class="features__tab__img"><img src="images/illustration-features-tab-1.svg" alt="Hero-Illustration"></div><div class="features__tab__text features__text__heading"><h1 class="features__tab__text__heading">Bookmark in one click</h1><p class="features__tab__text__para">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p><a class="btn features__tab__text__btn hero__btn--blue" href="#">More Info</a></div>'
const feature2Content = '<div class="features__tab__img"><img src="images/illustration-features-tab-2.svg" alt="Hero-Illustration"></div><div class="features__tab__text features__text__heading"><h1 class="features__tab__text__heading">Intelligent search</h1><p class="features__tab__text__para">Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p><a class="btn features__tab__text__btn hero__btn--blue" href="#">More Info</a></div>'
const feature3Content = '<div class="features__tab__img"><img src="images/illustration-features-tab-3.svg" alt="Hero-Illustration"></div><div class="features__tab__text features__text__heading"><h1 class="features__tab__text__heading">Share your bookmarks</h1><p class="features__tab__text__para">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p><a class="btn features__tab__text__btn hero__btn--blue" href="#">More Info</a></div>'
const featureTab  = document.querySelector('.features__tab')

//EVENT LISTENER

featureBtn1.addEventListener('click', (e) => {
    e.preventDefault()
    addContent(feature1Content)
    addClass(featureBtn1)

})


featureBtn2.addEventListener('click', (e) => {
    e.preventDefault()
    addContent(feature2Content)
    addClass(featureBtn2)

})

featureBtn3.addEventListener('click', (e) => {
    e.preventDefault()
    addContent(feature3Content)
    addClass(featureBtn1)

})


function addContent(content){

    document.getElementById("featureTab").innerHTML = ""

    if(featureTab.innerHTML === ''){
        featureTab.insertAdjacentHTML('afterbegin', content)
    }
}

// function addClass(btn) {
//     console.log(btn)
//     if(btn.classList = 'features__links__item'){
//         btn.classList.add('active-link')
//     }else if(btn.classList = 'active-link'){
//         btn.classList.remove('active-link')
//     }

// }




// MOBILE NAVBAR

const navBtn = document.querySelector('.header__hamburger')
const mobileNav = document.querySelector('.mobile-header')
const headerLogo = document.querySelector('.header__logo')
const btnIconOpen = '<img src="images/icon-hamburger.svg" alt="hamburger icon">'
const btnIconClose = '<img src="images/icon-close.svg" alt="hamburger icon">'
const logoNavOpen = '<img src="images/logo-bookmark.svg" alt="">'
const logoNavClose = '<img src="images/logo-bookmark-h-white.svg" alt="">'



    // EVENT LISTENER
navBtn.addEventListener('click', (e) => {

    e.preventDefault()

    mobileNav.classList.toggle('is-visible')

    if(mobileNav.classList == 'mobile-header is-visible'){
        headerLogo.innerHTML = logoNavClose
        navBtn.innerHTML = btnIconClose
    } else if(mobileNav.classList == 'mobile-header'){
        headerLogo.innerHTML = logoNavOpen
        navBtn.innerHTML = btnIconOpen
    }

})


//FAQ SECTION

const question = document.querySelectorAll('.faq__question')
const questionArr = Array.from(question)

    questionArr.forEach((val, index) => {

        val.addEventListener('click', (e) => {

            const questionID = val.id
            const splitID = questionID.split('--')
            const questionName = splitID[0]
            const questionIDNumber = parseInt(splitID[1])
            const answerID =  'faq__answer--' + questionIDNumber
            const ans = document.getElementById(answerID)
            const arrow = document.getElementById(`faq__arrow--${questionIDNumber}`)


            ans.classList.toggle('expand')


            if(ans.classList == 'faq__answer expand'){
                arrow.style.transform = 'rotate(180deg)'
            } else if(ans.classList == 'faq__answer') {
                arrow.style.transform = 'rotate(0deg)'

            }


        })

    })
