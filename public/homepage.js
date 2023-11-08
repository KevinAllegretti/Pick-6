document.addEventListener('DOMContentLoaded', function() {
    // Handling username and redirection
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        localStorage.setItem('username', username);
    }

    const loggedInUsername = localStorage.getItem('username');
    console.log("Script is loaded!");
    console.log("Logged in user:", loggedInUsername);

    const cards = document.querySelectorAll('.player-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const cardUsername = e.currentTarget.getAttribute('data-username');
            console.log("Card clicked:", cardUsername);  
            
            if (cardUsername && cardUsername === loggedInUsername) {
                console.log("Redirecting to dashboard");
                window.location.href = `/dashboard?username=${cardUsername}`;
            }
        });
    });

    // Populate user data
    async function populateUserData() {
        const userCards = document.querySelectorAll('.player-card');
        for (let card of userCards) {
            const username = card.getAttribute('data-username');
            try {
                const response = await fetch(`/api/getPicks/${username}`);
                const data = await response.json();
                if (data && data.picks && data.immortalLock) {
                    const picksDiv = card.querySelector('.picks');
                    data.picks.forEach(pick => {
                        const pickElem = document.createElement('div');
                        pickElem.textContent = pick;
                        picksDiv.appendChild(pickElem);
                    });
                    const immortalLockDiv = card.querySelector('.immortal-lock');
                    immortalLockDiv.textContent = `Immortal Lock: ${data.immortalLock[0]}`;
                }
            } catch (error) {
                console.error('Error fetching data for', username, error);
            }
        }
    }

    // Animate points
    function triggerAnimation() {
        console.log("Triggering Animation");
        function animateValue(element, end, duration) {
            console.log("Animating from 0 to", end);
            let startTimestamp = null;
            const start = parseFloat(element.textContent);
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.textContent = (progress * (end - start) + start).toFixed(1);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        document.querySelectorAll('.player-card').forEach(card => {
            const pointsElement = card.querySelector('.points-value');
            if (pointsElement) {  // Make sure pointsElement is not null
                const pointsValue = parseFloat(card.getAttribute('data-points') || "0");
                if (!isNaN(pointsValue)) {  // Make sure pointsValue is a number
                    animateValue(pointsElement, pointsValue, 1500);
                } else {
                    console.error("Invalid data-points value:", card.getAttribute('data-points'));
                }
            } else {
                console.error("Missing .points-value element in card:", card);
            }
        });
        
    }

    // Calling the functions
    populateUserData();
    triggerAnimation();
});

document.addEventListener('DOMContentLoaded', () => {
    let maxPoints = 0;
    let topPlayerCard;

    // Loop through each player card to find the one with the most points
    document.querySelectorAll('.player-card').forEach(card => {
        const points = parseFloat(card.getAttribute('data-points'));
        if (points > maxPoints) {
            maxPoints = points;
            topPlayerCard = card;
        }
    });

    // If a top player is found, append the crown icon to their card
    if (topPlayerCard) {
        const crownIcon = document.createElement('i');
        crownIcon.classList.add('fas', 'fa-crown', 'crown-icon');
        topPlayerCard.appendChild(crownIcon);
    }
});


