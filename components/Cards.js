// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'

const cardsContainer = document.querySelector('.cards-container');

const card = (article => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');
    
    headline.textContent = article.headline;
    img.setAttribute('src', article.authorPhoto);
    authorName.textContent = `By ${article.authorName}`;

    imgCont.appendChild(img);

    author.appendChild(imgCont);
    author.appendChild(authorName);

    card.appendChild(headline);
    card.appendChild(author);

    card.addEventListener('click', e => {
        console.log(headline.textContent);
    })

    return card;
})

const getArticleData = (url => {
    axios.get(url)
        .then(response => {
            console.log(response.data.articles.javascript);
            for (const articleGroup in response.data.articles){
                response.data.articles[articleGroup].forEach(article => {
                    cardsContainer.appendChild(card(article));
                    cardsContainer.lastChild.classList.add(articleGroup);
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
})

getArticleData('https://lambda-times-api.herokuapp.com/articles')