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

 // Function to calculate time remaining until next Thursday at 7 PM EST/EDT
 function getTimeRemaining() {
    const now = new Date();

    // Set the target time to 7 PM EST Thursday
    let targetTime = new Date(now);
    targetTime.setDate(now.getDate() + ((4 + 7 - now.getDay()) % 7));
    targetTime.setHours(19, 0, 0, 0); // 7 PM EST
    targetTime.setMinutes(targetTime.getMinutes() + targetTime.getTimezoneOffset()); // Convert to UTC
    targetTime.setHours(targetTime.getHours() - 5); // Convert UTC to EST (UTC-5)

    // Determine if it's Daylight Saving Time in Eastern Time Zone
    const isDst = now.dst();
    if (isDst) {
        targetTime.setHours(targetTime.getHours() + 1); // Adjust for EDT (UTC-4)
    }

    // Calculate the time remaining until the target time
    const total = targetTime - now;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// Add a method to Date.prototype to determine if DST is in effect
Date.prototype.dst = function() {
    const jan = new Date(this.getFullYear(), 0, 1).getTimezoneOffset();
    const jul = new Date(this.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) != this.getTimezoneOffset();    
};

// Function to initialize the countdown
function initializeCountdown() {
    const countdownDisplay = document.getElementById('countdownDisplay');

    function updateCountdown() {
        const t = getTimeRemaining();

        countdownDisplay.innerHTML = 
            'Time until Pick deadline: ' +
            `${t.days} days: ` +
            `${t.hours} hours: ` +
            `${t.minutes} minutes: ` +
            `${t.seconds} seconds`;

        // If countdown finished, stop updating
        if (t.total <= 0) {
            clearInterval(timeInterval);
            countdownDisplay.innerHTML = 'Countdown finished!';
        }
    }

    // Update the countdown every second
    updateCountdown(); // Run once immediately
    const timeInterval = setInterval(updateCountdown, 1000);
}

  
  // Call initializeCountdown somewhere in your code when you want to start the timer
  // For example, in a window.onload or document.addEventListener('DOMContentLoaded', ...) handler
  initializeCountdown();
  

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


