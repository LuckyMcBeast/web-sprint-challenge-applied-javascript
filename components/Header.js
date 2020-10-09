// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    h1.appendChild(document.createTextNode('Lambda Times'));
    date.appendChild(document.createTextNode('October 9, 2020'));
    temp.appendChild(document.createTextNode('74°'));

    headerDiv.appendChild(date);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(temp);

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');
console.log(headerContainer);
headerContainer.append(Header());