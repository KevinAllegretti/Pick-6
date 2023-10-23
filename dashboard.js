let picksCount = 0;

function addPick() {
    // If it's the 6th pick and immortal lock isn't checked, just exit
    if (picksCount === 6 && !document.getElementById('immortalLockCheck').checked) {
        return;
    }

    const teamName = document.getElementById('teamInput').value;
    // Get values
    const team = document.getElementById('teamSelect').value;
    const type = document.getElementById('typeSelect').value;
    const value = document.getElementById('valueInput').value;

    // TODO: Make an API call to save the pick

    // For demonstration, we'll just append it to the container
    const pickDiv = document.createElement('div');
    pickDiv.innerHTML = `${teamName} - ${type} - ${value}`;
    document.getElementById('picksContainer').appendChild(pickDiv);

    picksCount++;

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
    const team = document.getElementById('immortalTeamSelect').value;
    const type = document.getElementById('immortalTypeSelect').value;
    const value = document.getElementById('immortalValueInput').value;

    // TODO: Make an API call to save the immortal lock

    // For demonstration, display a status message
    document.getElementById('statusMessage').textContent = `Immortal Lock set for ${teamName} - ${type} - ${value}`;
}
