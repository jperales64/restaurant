import theBurger from './theBurger.jpg';



const contactPage = () => {
    const container = document.querySelector('.content');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Contact";
    titleDiv.appendChild(title);
    titleDiv.classList.add('title-div', 'std-div');
    container.appendChild(titleDiv);

    let subtitleDiv = document.createElement('div');
    let subtitle = document.createElement('h2');
    subtitle.textContent = "Page Creator";
    subtitleDiv.appendChild(subtitle);
    subtitleDiv.classList.add('title-div', 'std-div', 'subtitle-div');
    container.appendChild(subtitleDiv);


    container.appendChild(createMenuItem("Jaime Perales", "jaimeperales123@gmail.com", 'https://github.com/jperales64', theBurger));



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

export default contactPage;