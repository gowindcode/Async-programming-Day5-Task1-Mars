//function to get the advice from database based on ID
async function getMessage() {
    const adviceNumber = document.getElementById('adviceNumber').value;
    const messageElement = document.getElementById('message');
    

    if (adviceNumber >= 1 && adviceNumber <= 224) {
        try {
            const response = await fetch(`https://api.adviceslip.com/advice/${adviceNumber}`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            messageElement.innerText= `${data.slip.advice}`;

        } catch (error) {
            console.error('Error fetching Lucky message:', error);
            messageElement.textContent = 'Error fetching Lucky message from MARS. Please try again.';
            
        }
    } else {
        messageElement.textContent = '👨‍🚀Please enter a number between 1 and 224.👨‍🚀';
    }
}



