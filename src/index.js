import './style.css';
import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';


const navBar = document.createElement('header');
navBar.classList.add('nav-bar');

const homeButton = document.createElement('button');
homeButton.textContent = "Home";

const menuButton = document.createElement('button');
menuButton.textContent = "Menu";

const contactButton = document.createElement('button');
contactButton.textContent = "Contact";

homeButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menuPage);
contactButton.addEventListener('click', contactPage);

navBar.appendChild(homeButton);
navBar.appendChild(menuButton);
navBar.appendChild(contactButton);

document.body.insertBefore(navBar, document.body.firstChild);
homePage();