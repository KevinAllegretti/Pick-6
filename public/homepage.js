(function() {
    console.log("Script is loaded!");

    const loggedInUsername = "porkSkinGooner"; // Just for testing

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

/*
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.player-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const username = e.currentTarget.getAttribute('data-username');
            console.log(username); // Just to test if it's working
            if (username) {
                window.location.href = `/dashboard?username=${username}`;
            }
        });
    });
});
*/