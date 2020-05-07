/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.
*/

function menuMaker(Arr) {
  const navContainer = document.createElement('div');
  const menuContainer = document.createElement('ul');
  const menuItemOne = document.createElement('li');
  const menuItemTwo = document.createElement('li');
  const menuItemThree = document.createElement('li');
  const menuItemFour = document.createElement('li');
  const menuItemFive = document.createElement('li');
  const menuItemSix = document.createElement('li');

  navContainer.classList.add('menu');

  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. Add those items to the <ul>

  Arr.forEach(menuItem => {
    let item = `<li>${menuItem}</li>`
    menuContainer.innerHTML += item
  });
  navContainer.appendChild(menuContainer)

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  var menuButton = document.querySelector('.menu-button');

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  menuButton.addEventListener('click', event => {
    navContainer.classList.toggle('menu--open');
  });

  // Step 5: return your div with a 'menu' class.

  return navContainer

}


// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.

const menu = menuMaker(menuItems)
const header = document.querySelector('.header')
header.insertAdjacentElement('afterbegin', menu)
