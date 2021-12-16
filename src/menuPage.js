import theBurger from './theBurger.jpg';
import thBaconBurger from './theBaconBurger.jpg';
import theChocShake from './theChocShake.jpg';
import thOreoShake from './theOreoShake.jpg';


const menuPage = () => {
    const container = document.querySelector('.content');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Menu";
    titleDiv.appendChild(title);
    titleDiv.classList.add('title-div', 'std-div');
    container.appendChild(titleDiv);

    let subtitleDiv = document.createElement('div');
    let subtitle = document.createElement('h2');
    subtitle.textContent = "Burgers";
    subtitleDiv.appendChild(subtitle);
    subtitleDiv.classList.add('title-div', 'std-div', 'subtitle-div');
    container.appendChild(subtitleDiv);


    container.appendChild(createMenuItem("The Burger", "The original with 1/4 lb all beef patty, lettuce, tomatoes, pickles and onions", '$10', theBurger));

    container.appendChild(createMenuItem("The Bacon Burger", "The original with four thick cut slices of our house made applewood smoked bacon", '$12', thBaconBurger));

    subtitleDiv = document.createElement('div');
    subtitle = document.createElement('h2');
    subtitle.textContent = "Shakes";
    subtitleDiv.appendChild(subtitle);
    subtitleDiv.classList.add('title-div', 'std-div', 'subtitle-div');
    container.appendChild(subtitleDiv)

    container.appendChild(createMenuItem("The Chocolate Shake", "Classic-style chocolate shake", '$5', theChocShake));

    container.appendChild(createMenuItem("The Oreo Shake", "The Chocolate Shake with an Oreo twist", '$5', thOreoShake));


}

function createMenuItem(itemNameText, itemDescriptionText, itemPriceText, imgSrc) {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('std-div', 'menu-item-div');

    const itemDescriptionDiv = document.createElement('div');
    itemDescriptionDiv.classList.add('item-description-div');

    const itemName = document.createElement('h2');
    itemName.textContent = itemNameText;
    const itemDescription = document.createElement('p');

    itemDescription.textContent = itemDescriptionText;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = itemPriceText;

    itemDescriptionDiv.appendChild(itemName);
    itemDescriptionDiv.appendChild(itemDescription);
    itemDescriptionDiv.appendChild(itemPrice);

    const itemImage = document.createElement('img');
    itemImage.src = imgSrc;
    itemImage.classList.add('item-image');

    menuItemDiv.appendChild(itemDescriptionDiv);
    menuItemDiv.appendChild(itemImage);

    return menuItemDiv;


}

export default menuPage;