function handleSubmit(event) {
    event.preventDefault();

    const inputField = document.getElementById("name");
    const inputValue = inputField.value.trim();

    // Check if input value is empty
    if (inputValue === "") {
      alert("Please enter a text.");
      return false;
    }
    Client.analyzeSentiment();
    return true;
}

export { handleSubmit };
