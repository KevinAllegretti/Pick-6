(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
    localStorage.setItem('username', username);
    }

    //const loggedInUsername = "LazyAhhGamer"; // Just for testing issue is its not dynamically learning the username
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
})();


async function populateUserData() {
// Fetch all user cards on the homepage
const userCards = document.querySelectorAll('.player-card');


for (let card of userCards) {
const username = card.getAttribute('data-username');


try {
const response = await fetch(`/api/getPicks/${username}`);
const data = await response.json();


if (data && data.picks && data.immortalLock) {
// Populate picks
const picksDiv = card.querySelector('.picks');
data.picks.forEach(pick => {
const pickElem = document.createElement('div');
pickElem.textContent = pick;
picksDiv.appendChild(pickElem);
});


// Populate immortal lock
const immortalLockDiv = card.querySelector('.immortal-lock');
immortalLockDiv.textContent = `Immortal Lock: ${data.immortalLock[0]}`;
}


} catch (error) {
console.error('Error fetching data for', username, error);
}
}
}

// Call the function to populate data on page load
document.addEventListener('DOMContentLoaded', populateUserData);    

