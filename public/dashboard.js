let picksCount = 0;
let userPicks = [];  // This will store user's picks in-memory
let userImortalLock = [];
// Fetching the username from localStorage
const storedUsername = localStorage.getItem('username');
console.log(storedUsername);
// If the username exists in localStorage, update the h1 element
if (storedUsername) {
    document.querySelector('h1').textContent = `Welcome, ${storedUsername}!`;
}

function addPick() {



    // If it's the 6th pick and immortal lock isn't checked, just exit
    if (picksCount === 6) {
        return;
    }

    const teamName = document.getElementById('teamInput').value;
    // Get values
    //const team = document.getElementById('teamSelect').value;
    const type = document.getElementById('typeSelect').value;
    const value = document.getElementById('valueInput').value;

    // Sanitize value to ensure it has a "+" or "-" prefix
    let sanitizedValue = parseFloat(value);
    if (!isNaN(sanitizedValue)) {
        if (sanitizedValue > 0 && !value.startsWith('+')) {
            sanitizedValue = "+" + sanitizedValue;
        }
    }


    // For demonstration, we'll just append it to the container
    const pickDiv = document.createElement('div');
    pickDiv.innerHTML = `${teamName} [${type}: ${sanitizedValue}]`;
    document.getElementById('picksContainer').appendChild(pickDiv);

    picksCount++;

    userPicks.push(`${teamName} [${type}: ${sanitizedValue}]`); //stirngs pushed into the array
    console.log(userPicks);


    // If it's the 6th pick and immortal lock is checked, show the immortal lock div
    if (picksCount === 6 && document.getElementById('immortalLockCheck').checked) {
        document.getElementById('immortalLock').style.display = 'block';
    }

    // Otherwise, if it's just the 6th pick, hide the 'addPick' div
    else if (picksCount === 6) {
       document.getElementById('addPick').style.display = 'none';
    }
}

document.getElementById('immortalLockCheck').addEventListener('change', function() {
    const immortalLockDiv = document.getElementById('immortalLock');
    if (this.checked) {
        immortalLockDiv.style.display = 'block';
    } else {
        immortalLockDiv.style.display = 'none';
    }
});



function addImmortalLock() {
    // Get values
    const teamName = document.getElementById('immortalTeamInput').value;
    //const team = document.getElementById('immortalTeamSelect').value;
    const type = document.getElementById('immortalTypeSelect').value;
    const value = document.getElementById('immortalValueInput').value;

    // Sanitize value to ensure it has a "+" or "-" prefix
    let sanitizedValue = parseFloat(value);
    if (!isNaN(sanitizedValue)) {
        if (sanitizedValue > 0 && !value.startsWith('+')) {
            sanitizedValue = "+" + sanitizedValue;
        }
    }

    // For demonstration, display a status message
    document.getElementById('statusMessage').textContent = `Immortal Lock set for ${teamName} [${type}: ${sanitizedValue}]`;
    userImortalLock.push(`${teamName} [${type}: ${sanitizedValue}]`); //stirngs pushed into the array
    console.log(userImortalLock);
}

function resetPicks() {
    // Reset the counters and arrays
    picksCount = 0;
    userPicks = [];
    userImortalLock = [];
    
    // Hide immortalLock and reset status message
    document.getElementById('immortalLock').style.display = 'none';
    document.getElementById('statusMessage').textContent = '';

    // Remove picks from the picksContainer
    const picksContainer = document.getElementById('picksContainer');
    while (picksContainer.firstChild) {
        picksContainer.removeChild(picksContainer.firstChild);
    }

    // Show the addPick div if hidden
    document.getElementById('addPick').style.display = 'block';

    // Ensure immortalLockCheck is unchecked
    document.getElementById('immortalLockCheck').checked = false;

    // Make an API call to reset the picks on the server
    fetch(`/api/resetPicks/${storedUsername}`, {  // Replace `${username}` with the correct variable or method to get the username
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => { console.log(response); return response.json()})
    .then(data => {
        if (data.success) {
            console.log('Picks reset successfully on server.');
        } else {
            console.error('Error resetting picks on server.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred when resetting picks. Please try again later.');
    });
}

document.getElementById('resetPicks').addEventListener('click', resetPicks);


function submitUserPicks() {
    // Check if user has added any picks
    if (userPicks.length === 0) {
        alert('Please add at least one pick before submitting.');
        return;
    }

    // Prepare the data for sending
    const data = {
        picks: userPicks,
        immortalLock: userImortalLock
    };


    // Make an API call to save the picks and immortal lock
    fetch(`/api/savePicks/${storedUsername}`, {  // Endpoint to change depending on your backend setup
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => { console.log(response); return response.json()})
    .then(data => {
        if (data.success) {
            alert('Picks successfully submitted!');
        } else {
            alert('Error submitting picks. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

document.getElementById('submitPicks').addEventListener('click', submitUserPicks);

