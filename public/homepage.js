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
