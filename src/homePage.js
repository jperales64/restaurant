const homePage = () => {
    const container = document.querySelector('.content');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }



    const titleDiv = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Jones Maltsberger's Malts and Burgers";
    titleDiv.appendChild(title);
    titleDiv.classList.add('title-div', 'std-div');
    container.appendChild(titleDiv);


    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-div', 'std-div');

    const aboutP = document.createElement('p');
    aboutP.classList.add('about-p');
    aboutP.textContent = "Jones Maltsberger's has the best malts and burgers! The atmosphere and customer service make you feel like you are sitting in the middle of the good ol' days, eating like a greaser! This is exactly the kind of place that I like to return to again and again."
    aboutDiv.appendChild(aboutP);

    const aboutCustomer = document.createElement('p');
    aboutCustomer.textContent = "Wimpy";
    aboutCustomer.classList.add('about-customer')
    aboutDiv.appendChild(aboutCustomer);

    container.appendChild(aboutDiv);

    const hours = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('hours-title')
    hoursTitle.textContent = 'Hours';
    hours.classList.add('std-div', 'hours');
    hours.appendChild(hoursTitle);

    const times = document.createElement('div');
    times.classList.add('times');
    hours.appendChild(times);

    const sundayHours = document.createElement('p');
    sundayHours.textContent = "Sunday: 11am - 10pm";
    times.appendChild(sundayHours);

    const mondayHours = document.createElement('p');
    mondayHours.textContent = "Monday: 11am - 10pm";
    times.appendChild(mondayHours);

    const tuesdayHours = document.createElement('p');
    tuesdayHours.textContent = "Tuesday: 11am - 10pm";
    times.appendChild(tuesdayHours);

    const wednesdayHours = document.createElement('p');
    wednesdayHours.textContent = "Wednesday: 11am - 10pm";
    times.appendChild(wednesdayHours);

    const thursdayHours = document.createElement('p');
    thursdayHours.textContent = "Thursday: 11am - 10pm";
    times.appendChild(thursdayHours);

    const fridayHours = document.createElement('p');
    fridayHours.textContent = "Friday: 11am - 10pm";
    times.appendChild(fridayHours);

    const saturdayHours = document.createElement('p');
    saturdayHours.textContent = "Saturday: 11am - 10pm";
    times.appendChild(saturdayHours);

    container.appendChild(hours);

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('std-div', 'location-div')

    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Location';

    const locationAddress = document.createElement('p');
    locationAddress.textContent = '8500 Jones Maltsberger Rd, San Antonio, TX 78216';
    locationAddress.classList.add('location-address')

    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(locationAddress);

    container.appendChild(locationDiv);
}

export default homePage;