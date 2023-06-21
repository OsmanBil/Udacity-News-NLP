/* Global Variables */
const url = 'https://api.meaningcloud.com/sentiment-2.1';


function analyzeSentiment() {
  fetch('http://localhost:8081/api/apikey')
    .then(response => response.json())
    .then(data => {
      const apiKey = data.apiKey; // get API-Key 
      let formText = document.getElementById('name');
    
      var paragraphContent = formText.textContent; // Save the content of the element in a variable

      const params = new URLSearchParams();
      params.append('key', apiKey);
      params.append('txt', paragraphContent);
      params.append('lang', 'en');

      return fetch(url, {
        method: 'POST',
        body: params
      });
    })
    .then(response => response.json())
    .then(data => {
      ratingOutput(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Output the result
function ratingOutput(data) {
  const polarity = getPolarity(data.score_tag); // Get polarity
  let snippedText = data.sentence_list[0].text.split(' ').slice(0, 10).join(' '); // Slice the text

  document.getElementById('polarity').innerHTML = polarity;
  document.getElementById('subjectivity').innerHTML = data.subjectivity;
  document.getElementById('textSnip').innerHTML = snippedText + '...';
}

// Score-Tag to polarity converter
function getPolarity(scoreTag) {
  if (scoreTag === 'P+' || scoreTag === 'P') {
    return 'positive';
  } else if (scoreTag === 'N+' || scoreTag === 'N') {
    return 'negative';
  } else {
    return 'neutral';
  }
}

export { analyzeSentiment, getPolarity, ratingOutput };
