# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
Our crowdfunding-product-page is a project about a new product **a desk** that elevates your screen or monitor of desktop to a more comfortable level for your visibility, and postures. This desk have also compartment under to help keep your tools of working: pencils, notepad, pens,usb, etc. The goal is to help the owners stay focused on what he is doing and being comfortable settled in front of his computer.

The purchase of this gadget is available in four offers , one that quite sell you only the specified monitor desk , and three others which add extra features when spending an appropriate little extra amount of money fixed for each of these one. These three last are limited by numbers of extra features available in purchase . And count down decreasing or updating  the available number of offer left everytime one customer subscribe to purchase a desk with a special extra.

We have as mentioning these specials offers:

- The **Bamboo stand** : desk comes with ergonomic stand made of bamboo c

- The **Black Edition Stand** : where a black edition special stand computer is what is sold

- The **Mahogany special Edition** : which have two special Mahogany edition sold, and a backed T-shirt in gift 

Our purpose is to build  a part of the users experience page that lead to the validation of the purchased product no matter which of the four offers selected. This part of built , include :

*the main page presentation of product*,

*the active default page  who pop-up when  a customer choose his desired offer*, 

and 

*a grateful message page which appears after the validation of then normal offer or any specified offer with an extra*   


### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

**Desktop Pages**

![Desktop_Main-Page.png]
![Desktop_Active-Default-Page.png]


**Mobile Pages**

![Mobile_Main-Page.png]
![Mobile_Active-Default-Page.png]
![Mobile_Thankness-Page.png]



### Links

- Solution URL: [https://github.com/BeinRain06/crowdfunding-product-page.git](https://your-solution-url.com)
- Live Site URL: [https://beinrain06.github.io/crowdfunding-product-page/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

*changing property of pseudo selectors of class elements with javascript*

I learned how to modify styled properties of**pseudo selector**( like `::before`) with javascript. Especially the style property **display**.
The solution found through the fact **of creation of variable in css** that would be recognized in javascript with the property named **setProperty** .Here following is a snipped of code explaining one method how to change the property **display**  of the pseudo selector `::before` of the html `body` tag with javascript :  

```css
:root{

  --display: none;
}

body::before{
  display: var(--display);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 340vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 3;
}
```

below an active example javascript code that affect the **display** property 

```js
function showcaseActiveDefaultPage(e){
  if(toggleCheckbox.checked === true){
    if(e.target.classList.contains('back_button')){
      doc.style.setProperty("--display", "block");
      activeStateProject.style.setProperty("--display-state", "block"); //here
      activeStateProject.style.transition='all 500ms ease-in'; 
    }
  }else if(e.target.classList.contains('reward')){
    doc.style.setProperty("--display", "block");
    activeStateProject.style.setProperty("--display-state", "block"); //here
  }
}
```

*input:radio*

i took time also to figure out how to design a customized `input:radio`. To succeed to encounter the design needed one method consist to wrap the desired input tag with a **label** and modifiying **the state** of the input:radio quite with action affecting only over the **label** tag .
here below we can see through these line of code:

```html
<label for="switch_radio" class="play_radio">
  <input type="radio"  class="switch_radio" name="toggle_rad" data-setform="0">
  <div class="toggle_radwrap"></div>
</label>
```

```css
.play_radio{
  position:relative;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--dark-gray);
  background: var(--white);
}

.play_radio input[type="radio"]{
  opacity: 0;
  position: absolute;
}

.play_radio .toggle_radwrap{
  display: none;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  border-radius: 50%;
  background: var(--dark-cyan);
  transition: all 400ms ease-in;
}


input[type="radio"]:checked + .toggle_radwrap{
  display: inline-block;
}
```

*input:chechbox -- toggle swicth*

As `input:radio` the process is the same to make a custom toggle switch . We just add a little snippets javascript code to get through the style.

```js
toggleBookmark.addEventListener('click', bookmarkChangeText);

function bookmarkChangeText(){
  if(toggleCheckbox.checked=== true){
    toggleBookmarkText.innerHTML='Bookmarked';
    
  }else{
    toggleBookmarkText.innerHTML='Bookmark';
  }
}

```

### Continued development

- This project will be made fully dynamic if we know how to **manipulate data** in such way to update the remaining numbers of offer for the three special editions available at purchase.
- With **transition** through pages displaying when appearing or disappearing, the platform will be appreciate by customers. 


### Useful resources

- [https://m.youtube.com/watch?v=MZq5zFSpUIo](https://www.example.com) - This video helps me style the `input:radio`.The label tag association with the `input:radio` and the overall design is well-explained.
- [https://blog.shhdharmen.me/how-to-change-look-and-feel-of-pseudo-elements-using-javascript-and-css-custom-properties](https://www.example.com) - This link helps me achieve change on pseudo selectors of css with javascript. 
- [https://stackoverflow.com/questions/37245679/ecmascript-template-literals-like-some-string-are-not-working](https://www.example.com) - This link was of one relief, helping me figure out how to write variable inside a string property(**innerHTML**, **innerText**, **textContent**).variables called *template literals* 


## Author

- Website - [Ngouend Raoul Gerard](https://www.your-site.com)
- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [https://www.twitter.com/nest_Ngoueni](https://www.twitter.com/yourusername)
- LinkedIn - [https://www.linkedin.com/ngouend-gerard-5a0584244](https://www.twitter.com/yourusername)


