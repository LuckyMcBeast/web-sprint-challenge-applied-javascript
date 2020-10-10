// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


import axios from 'axios'

const topics = document.querySelector('.topics');

const tab = (topic => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(topic));
    div.classList.add('tab', `topic-${topic}`);

    div.addEventListener('click', e => {
        let clickedTopic = topic;
        const containerSelector = document.querySelector('.cards-container');
        const topicSelector = [].slice.call(containerSelector.children);
        console.log(topicSelector);
        if(clickedTopic == 'node.js'){
            clickedTopic = 'node';
        }
        if(clickedTopic == 'all'){
            topicSelector.forEach(article => {
                if(!article.classList.contains('card')){
                    article.classList.add('card');
                    article.classList.remove('hide');
                }
            })
        }
        else{
        topicSelector.forEach(article => {
            if(!article.classList.contains('card')){
                article.classList.add('card');
                article.classList.remove('hide');
            }
            if(!article.classList.contains(clickedTopic)){
                article.classList.toggle('hide');
                article.classList.toggle('card');
            }
        })
    }
    });

    return div;
});

const getTopicData = (url => {
    axios.get(url)
        .then(response => {
            console.log(response);
            topics.append(tab('all'))
            response.data.topics.forEach(topic => {
                topics.append(tab(topic))
            })
        })
        .catch(err => {
            console.log(err);
        });
});

getTopicData('https://lambda-times-api.herokuapp.com/topics');



