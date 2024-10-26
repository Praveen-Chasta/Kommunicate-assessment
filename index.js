const adviceId = document.getElementById("advice-id");
const quote = document.getElementById('quote');
const diceButton = document.getElementById('dice-button');



function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const { id, advice } = data.slip;
            console.log(data)
            adviceId.textContent = `ADVICE  # ${id}`;
            quote.textContent = `"${advice}"`;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            quote.textContent = "Failed to fetch advice. Try again!";
        });
}

diceButton.addEventListener('click', fetchAdvice)