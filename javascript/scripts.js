const doc= document.querySelector('body');


const toggleCheckbox= document.querySelector('#bookmarks');
const toggleHamburger= document.querySelector('#toggle_hamburger');
const toggleBookmark= document.querySelector('.toggle_book');
const toggleBookmarkText= document.querySelector('.toggle_fulltext');

const setYourPledge= document.querySelectorAll('.enter_pledge');
const fullInputRadio= document.querySelectorAll('.switch_radio');


const amountPledgeMainPage= document.querySelectorAll('.num_pledge');
const amountPledge= document.querySelectorAll('.num1_pledge');
const mahoganySpecial= document.querySelector('#mahogany_special');
const placeLeftForPledge= document.querySelectorAll('.num2_place');
const placeLeftForPledgeSingle= document.querySelector('.num2_place');
const shownError= document.querySelectorAll('.shown_error');
const boxMiniArray= document.querySelectorAll('.box_mini');
const boxMini= document.querySelector('.box_mini');


const showPledge= document.querySelectorAll('.show_pledge');
const validatePledge= document.querySelectorAll('.validate_pledge');

const closeThankfullMessage= document.querySelector('.complete_btn');
const closeActiveDefaultPage= document.querySelector('.icon_close_modal');

const borderTopForm= document.querySelectorAll('.straight_line');

const activeStateProject= document.querySelector('.active_stateproject');
const subscriptionCompleted= document.querySelector('.subscription_completed');

let btnNavbar= document.querySelectorAll('.btn_nav');
const underlinedLink= document.querySelector('.btn_nav');


let msg, color;

let placeLeft = {
  bamboo: 101,
  blackEdition: 64,
  mahogany: 0
};

let arrayMinAmount ={
  bamboo: 25,
  blackEd: 75,
  special: 200
};

let pledgeKeepValue ={
    final: 0,
    index: null
};


// window loaded

window.onload= function(){

  amountPledgeMainPage[0].innerText= arrayMinAmount.bamboo;
  amountPledgeMainPage[1].innerText= arrayMinAmount.blackEd;
  amountPledgeMainPage[2].innerText= arrayMinAmount.special;

  amountPledge[0].innerText= arrayMinAmount.bamboo;
  amountPledge[1].innerText= arrayMinAmount.blackEd;
  amountPledge[2].innerText= arrayMinAmount.special;

  placeLeftForPledge[0].innerText=placeLeft.bamboo;
  placeLeftForPledge[1].innerText=placeLeft.blackEdition;
  placeLeftForPledge[2].innerText=placeLeft.mahogany;

  showPledge[0].value= arrayMinAmount.bamboo;
  showPledge[1].value= arrayMinAmount.blackEd;
  showPledge[2].value= arrayMinAmount.special;
  

}


// bookmark changing text

toggleBookmark.addEventListener('click', bookmarkChangeText);

function bookmarkChangeText(){
  if(toggleCheckbox.checked=== true){
    toggleBookmarkText.innerHTML='Bookmarked';
    
  }else{
    toggleBookmarkText.innerHTML='Bookmark';
  }
}

// registering ended

doc.addEventListener('mouseover', registrationEnded);

function registrationEnded(){

  for(let i=0; i<placeLeftForPledge.length; i++){
    if(parseFloat(placeLeftForPledge[i]) === 0){
      boxMiniShadow.children[i].style.display='block';
    }
  }  
}


boxMiniArray.forEach(function(placeLeftForPledgeSingle){
  if(parseFloat(placeLeftForPledgeSingle) === 0){
    boxMini.style.display='block';
   }  
})

// underlined Current nav bar link

doc.addEventListener('click', currentLink);

function currentLink(e){
  

  if(e.target.classList.contains('btn_nav')){
    e.target.classList.toggle('current');
    let i;

    for(let i=0; i<btnNavbar.length; i++){
      if(btnNavbar[i] !== e.target){
        btnNavbar[i].classList.remove('current');
      }
    }

  }
}

// display active default page

doc.addEventListener('click', showcaseActiveDefaultPage); 

function showcaseActiveDefaultPage(e){
  if(toggleCheckbox.checked === true){
    if(e.target.classList.contains('back_button')){
      doc.style.setProperty("--display", "block");
      activeStateProject.style.setProperty("--display-state", "block");
      activeStateProject.style.transition='all 500ms ease-in'; 
    }
  }else if(e.target.classList.contains('reward')){
    doc.style.setProperty("--display", "block");
    activeStateProject.style.setProperty("--display-state", "block");
  }
}

// target the appropriate input:radio within the active default page

doc.addEventListener('change', submitFormOfPledge);

function submitFormOfPledge(e){
  let i, j;
  if(e.target.classList.contains('switch_radio')){
    if(e.target.getAttribute('data-setform') === 'a'){
      activeStateProject.style.setProperty("--display-state", 'none');
      subscriptionCompleted.style.setProperty("--display-sub", 'block');
      console.log(e.target);
    }else{
      e.target.getAttribute('data-setform');
      i= parseInt(e.target.getAttribute('data-setform'));
      setYourPledge[i].style.setProperty("--display-pledge", "block");
      borderTopForm[i].style.setProperty("--display-pledge", "block");
      for(j=0; j<setYourPledge.length; j++){
        if(setYourPledge[j] !== setYourPledge[i]){
          setYourPledge[j].style.setProperty("--display-pledge", "none");
          borderTopForm[j].style.setProperty("--display-pledge", "none"); 
        }
      }
    }

  }  
}



// validate submittion


doc.addEventListener('input', takevalueInputNumber);

function takevalueInputNumber(e){

  pledgeKeepValue.final= e.target.value;
  console.log(pledgeKeepValue.final);
  for(let i=0; i<amountPledge.length; i++){
    if(showPledge[i] === e.target){
      pledgeKeepValue.index= i;
      console.log(pledgeKeepValue.index);
    }
}
  
}

doc.addEventListener('mouseup', submitCompleted);

function submitCompleted(e){
  e.stopImmediatePropagation();
  e.preventDefault();
  let a, b,c, i, j;
  if(e.target.classList.contains('validate_pledge')){
    a=pledgeKeepValue.final;
    i=pledgeKeepValue.index;
    console.log(i);
   
    b=e.target.previousElementSibling;
    c=e.target.previousElementSibling.getAttribute('data-min');

    if(i === null){
      for(let j=0; j<amountPledge.length; j++){
        if(b === showPledge[j]){
          pledgeKeepValue.final= parseInt(showPledge[j].value);
          pledgeKeepValue.index= j;
          console.log(j);
          activeStateProject.style.setProperty("--display-state", 'none');
          activeStateProject.style.transition='all 500ms ease-in';
          subscriptionCompleted.style.setProperty("--display-sub", 'block');
          subscriptionCompleted.style.transition='all 1.5s ease-out';
        }
      }

    }else if(a >=showPledge[i].getAttribute('data-min')){
      activeStateProject.style.setProperty("--display-state", 'none');
      activeStateProject.style.transition='all 500ms ease-in';
      subscriptionCompleted.style.setProperty("--display-sub", 'block');
      subscriptionCompleted.style.transition='all 1.5s ease-out';

    }else if(a < showPledge[i].getAttribute('data-min')){
      e.preventDefault();
      console.log(showPledge[i].value);
      console.log(showPledge[i].getAttribute('data-min'));
      
      shownError[i].classList.toggle('error_message');
      shownError[i].textContent= 'unable. Enter a Pledge >=' + `${c}` ;
      setTimeout(function(){
        shownError[i].innerText='';
        shownError[i].classList.remove('error_message');
      }, 4500);
    }  
  }
}


// close subscription Message page

doc.addEventListener('mousedown', closeSubscriptionPageOrActiveDefaultPage);

function closeSubscriptionPageOrActiveDefaultPage(e){
  let i;

  if(e.target.classList.contains('complete_btn')){
    subscriptionCompleted.style.setProperty("--display-sub", 'none');
    doc.style.setProperty("--display", "none");
    i=pledgeKeepValue.index;

    if(i !== null){
      setYourPledge[i].style.setProperty("--display-pledge", "none");
      borderTopForm[i].style.setProperty("--display-pledge", "none");
      location.reload();
    }
    
    location.reload();

  }else if(e.target.classList.contains('icon_close_modal')){
    activeStateProject.style.setProperty("--display-state", 'none');
    doc.style.setProperty("--display", "none");
  }
}

// Jquery

// $('toggleHamburger').on('change', function(){
//   if(this.checked){
//     $('body').before(function(){
//       $(this).css("background", "url('../images/icon-hamburger.svg') no-repeat center center/cover" );
//     }, function(){$(this).css("background", "url('../images/icon-close-menu.svg') no-repeat center center/cover")})
//   }
// });