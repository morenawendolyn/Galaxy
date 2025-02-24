function displayQuote() {
    const quotes = [
        "The cosmos is within us. We are made of star-stuff. – Carl Sagan",
        "To confine our attention to terrestrial matters would be to limit the human spirit. – Stephen Hawking",
        "Across the sea of space, the stars are other suns. – Camille Flammarion",
        "We are an impossibility in an impossible universe. – Ray Bradbury"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
