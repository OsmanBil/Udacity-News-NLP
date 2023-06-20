function analyzeSentiment() {
    fetch('http://localhost:8081/api/apikey')
      .then(response => response.json())
      .then(data => {
        const apiKey = data.apiKey; // API-Schlüssel abrufen
        console.log(apiKey); // API-Schlüssel verwenden
  
        //const text = 'Ich liebe dieses Produkt! Es ist großartig!';

        let formText = document.getElementById('name').value

    
        const url = 'https://api.meaningcloud.com/sentiment-2.1';
  
        const params = new URLSearchParams();
        params.append('key', apiKey);
        params.append('txt', formText);
        params.append('lang', 'de');
  
        return fetch(url, {
          method: 'POST',
          body: params
        });
      })
      .then(response => response.json())
      .then(data => {
        console.log('Sentiment Score:', data.score_tag);
        console.log('Agreement:', data.agreement);
        console.log('Subjectivity:', data.subjectivity);
        console.log('Confidence:', data.confidence);
        document.getElementById('results').innerHTML = data.subjectivity
      })
      .catch(error => {
        console.error('Fehler:', error);
      });
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
  