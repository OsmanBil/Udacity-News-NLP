function handleSubmit(event) {
    event.preventDefault()


    Client.analyzeSentiment()

}

export { handleSubmit }
