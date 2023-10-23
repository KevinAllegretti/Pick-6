document.getElementById('betForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId'); // Assuming you're storing userId in local storage
    const week = document.getElementById('week').value;
    const team = document.getElementById('team').value;
    const betType = document.getElementById('betType').value;
    const bonusBet = document.getElementById('bonusBet').value;

    // Construct the bet data
    const betData = {
        userId,
        week,
        picks: [{team, type: betType}],
        bonusBet
    };

    try {
        const response = await fetch('/place-picks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Add authentication headers if required
            },
            body: JSON.stringify(betData)
        });

        if (response.status !== 201) {
            const errorData = await response.json();
            alert('Error placing bet: ' + errorData.error);
            return;
        }

        alert('Bet placed successfully!');

        // Redirect or update UI accordingly
    } catch (error) {
        alert('There was an error placing the bet.');
    }
});
