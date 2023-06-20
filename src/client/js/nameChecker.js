function analyzeSentiment() {
  fetch('http://localhost:8081/api/apikey')
    .then(response => response.json())
    .then(data => {
      const apiKey = data.apiKey; // API-Schlüssel abrufen
      console.log(apiKey); // API-Schlüssel verwenden

      let formText = document.getElementById('name')


      // Den Inhalt des Elements in eine Variable speichern
      var paragraphInhalt = formText.textContent;

      const url = 'https://api.meaningcloud.com/sentiment-2.1';

      const params = new URLSearchParams();
      params.append('key', apiKey);
      params.append('txt', paragraphInhalt);
      params.append('lang', 'en');

      return fetch(url, {
        method: 'POST',
        body: params
      });
    })
    .then(response => response.json())
    .then(data => {
      // console.log('Sentiment Score:', data.score_tag);
      // console.log('Agreement:', data.agreement);
      // console.log('Subjectivity:', data.subjectivity);
      // console.log('Confidence:', data.confidence);

      // Polarity ausgeben
      const polarity = getPolarity(data.score_tag);
      document.getElementById('polarity').innerHTML = polarity;
      document.getElementById('subjectivity').innerHTML = data.subjectivity;

      let snippedText = data.sentence_list[0].text.split(' ').slice(0, 10).join(' ');

      document.getElementById('textSnip').innerHTML = snippedText + '...';
    })
    .catch(error => {
      console.error('Fehler:', error);
    });
}

function getPolarity(scoreTag) {
  if (scoreTag === 'P+' || scoreTag === 'P') {
    return 'positive';
  } else if (scoreTag === 'N+' || scoreTag === 'N') {
    return 'negative';
  } else {
    return 'neutral';
  }
}

function checkForName(inputText) {
  analyzeSentiment();
  console.log("::: Running checkForName :::", inputText);
  let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
  ];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}

export { checkForName };
