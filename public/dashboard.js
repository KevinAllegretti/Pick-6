/*
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
    fetch(`/api/resetPicks/${storedUsername}`, { 
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

*/ //VERSION 1

// Assuming betOptions is an array of all bet options for the week
const betOptions = [
    { teamName: 'AZ Cardinals', type: 'ML', value: '+150' },
    { teamName: 'AZ Cardinals', type: 'Spread', value: '-3.5' },
    { teamName: 'ATL Falcons', type: 'ML', value: '+220' },
    { teamName: 'ATL Falcons', type: 'Spread', value: '+5.5' },
    { teamName: 'BAL Ravens', type: 'ML', value: '-120' },
    { teamName: 'BAL Ravens', type: 'Spread', value: '-2.5' },
    { teamName: 'BUF Bills', type: 'ML', value: '-300' },
    { teamName: 'BUF Bills', type: 'Spread', value: '-6.5' },
    { teamName: 'CAR Panthers', type: 'ML', value: '+190' },
    { teamName: 'CAR Panthers', type: 'Spread', value: '+3.5' },
    { teamName: 'CHI Bears', type: 'ML', value: '+160' },
    { teamName: 'CHI Bears', type: 'Spread', value: '+4.0' },
    { teamName: 'CIN Bengals', type: 'ML', value: '-110' },
    { teamName: 'CIN Bengals', type: 'Spread', value: '-1.5' },
    { teamName: 'CLE Browns', type: 'ML', value: '+130' },
    { teamName: 'CLE Browns', type: 'Spread', value: '+2.5' },
    { teamName: 'DAL Cowboys', type: 'ML', value: '-250' },
    { teamName: 'DAL Cowboys', type: 'Spread', value: '-5.5' },
    { teamName: 'DEN Broncos', type: 'ML', value: '+180' },
    { teamName: 'DEN Broncos', type: 'Spread', value: '+3.0' },
    { teamName: 'DET Lions', type: 'ML', value: '+210' },
    { teamName: 'DET Lions', type: 'Spread', value: '+4.5' },
    { teamName: 'GB Packers', type: 'ML', value: '-280' },
    { teamName: 'GB Packers', type: 'Spread', value: '-6.0' },
    { teamName: 'HOU Texans', type: 'ML', value: '+230' },
    { teamName: 'HOU Texans', type: 'Spread', value: '+5.0' },
    { teamName: 'IND Colts', type: 'ML', value: '-150' },
    { teamName: 'IND Colts', type: 'Spread', value: '-3.0' },
    { teamName: 'JAX Jaguars', type: 'ML', value: '+250' },
    { teamName: 'JAX Jaguars', type: 'Spread', value: '+6.0' },
    { teamName: 'KC Chiefs', type: 'ML', value: '-320' },
    { teamName: 'KC Chiefs', type: 'Spread', value: '-7.0' },       
    { teamName: 'LV Raiders', type: 'ML', value: '+180' },
    { teamName: 'LV Raiders', type: 'Spread', value: '+3.5' },
    { teamName: 'LA Chargers', type: 'ML', value: '-170' },
    { teamName: 'LA Chargers', type: 'Spread', value: '-4.0' },
    { teamName: 'LA Rams', type: 'ML', value: '-200' },
    { teamName: 'LA Rams', type: 'Spread', value: '-5.0' },
    { teamName: 'MIA Dolphins', type: 'ML', value: '+160' },
    { teamName: 'MIA Dolphins', type: 'Spread', value: '+2.5' },
    { teamName: 'MIN Vikings', type: 'ML', value: '+140' },
    { teamName: 'MIN Vikings', type: 'Spread', value: '+2.0' },
    { teamName: 'NE Patriots', type: 'ML', value: '-150' },
    { teamName: 'NE Patriots', type: 'Spread', value: '-3.0' },
    { teamName: 'NO Saints', type: 'ML', value: '+170' },
    { teamName: 'NO Saints', type: 'Spread', value: '+3.0' },
    { teamName: 'NY Giants', type: 'ML', value: '+190' },
    { teamName: 'NY Giants', type: 'Spread', value: '+3.5' },
    { teamName: 'NY Jets', type: 'ML', value: '+210' },
    { teamName: 'NY Jets', type: 'Spread', value: '+4.5' },
    { teamName: 'PHI Eagles', type: 'ML', value: '-180' },
    { teamName: 'PHI Eagles', type: 'Spread', value: '-4.0' },
    { teamName: 'PIT Steelers', type: 'ML', value: '+130' },
    { teamName: 'PIT Steelers', type: 'Spread', value: '+2.0' },
    { teamName: 'SF 49ers', type: 'ML', value: '-240' },
    { teamName: 'SF 49ers', type: 'Spread', value: '-5.5' },
    { teamName: 'SEA Seahawks', type: 'ML', value: '+220' },
    { teamName: 'SEA Seahawks', type: 'Spread', value: '+4.0' },
    { teamName: 'TB Buccaneers', type: 'ML', value: '-300' },
    { teamName: 'TB Buccaneers', type: 'Spread', value: '-6.5' },
    { teamName: 'TEN Titans', type: 'ML', value: '-170' },
    { teamName: 'TEN Titans', type: 'Spread', value: '-3.5' },
    { teamName: 'WAS Commanders', type: 'ML', value: '+200' },
    { teamName: 'WAS Commanders', type: 'Spread', value: '+4.0' }
];

const teamColorClasses = {
    'AZ Cardinals': 'cardinals-color',
    'ATL Falcons': 'falcons-color',
    'BAL Ravens': 'ravens-color',
    'BUF Bills': 'bills-color',
    'CAR Panthers': 'panthers-color',
    'CHI Bears': 'bears-color',
    'CIN Bengals': 'bengals-color',
    'CLE Browns': 'browns-color',
    'DAL Cowboys': 'cowboys-color',
    'DEN Broncos': 'broncos-color',
    'DET Lions': 'lions-color',
    'GB Packers': 'packers-color',
    'HOU Texans': 'texans-color',
    'IND Colts': 'colts-color',
    'JAX Jaguars': 'jaguars-color',
    'KC Chiefs': 'chiefs-color',
    'LV Raiders': 'raiders-color',
    'LA Chargers': 'chargers-color',
    'LA Rams': 'rams-color',
    'MIA Dolphins': 'dolphins-color',
    'MIN Vikings': 'vikings-color',
    'NE Patriots': 'patriots-color',
    'NO Saints': 'saints-color',
    'NY Giants': 'giants-color',
    'NY Jets': 'jets-color',
    'PHI Eagles': 'eagles-color',
    'Pittsburgh Steelers': 'steelers-color',
    'SF 49ers': 'FortyNiners-color',
    'SEA Seahawks': 'seahawks-color',
    'TB Buccaneers': 'buccaneers-color',
    'TEN Titans': 'titans-color',
    'WAS Commanders': 'commanders-color'
};
  
  
  
  let picksCount = 0;
  let userPicks = [];
  let userImortalLock = [];
  const storedUsername = localStorage.getItem('username');
  console.log(storedUsername);
  
  // If the username exists in localStorage, update the h1 element
  if (storedUsername) {
    document.querySelector('h1').textContent = `Welcome, ${storedUsername}!`;
  }
  
  function renderBetOptions() {
    const container = document.getElementById('picksContainer');
    betOptions.forEach(option => {
      const betCell = document.createElement('div');
    
      betCell.classList.add('betCell', teamColorClasses[option.teamName]);
      betCell.textContent = `${option.teamName} [${option.type}: ${option.value}]`;
      betCell.onclick = () => selectBet(option);
      container.appendChild(betCell);
    });
  }
  
  function selectBet(option) {
    if (picksCount >= 6) {
      alert('You can only select 6 picks.');
      return;
    }
    let existingPickIndex = userPicks.findIndex(pick => pick.teamName === option.teamName && pick.type === option.type);
    if (existingPickIndex !== -1) {
      userPicks.splice(existingPickIndex, 1);
      picksCount--;
      updateBetCell(option, false);
    } else {
      userPicks.push(option);
      picksCount++;
      updateBetCell(option, true);
    }
  
    // Toggle Immortal Lock display based on picks
    if (picksCount === 6 && document.getElementById('immortalLockCheck').checked) {
      document.getElementById('immortalLock').style.display = 'block';
    } else if (picksCount === 6) {
      document.getElementById('addPick').style.display = 'none';
    }

  }

  function updateDisplayedPick(option) {
    // Create a string representation of the bet option
    const optionString = `${option.teamName} [${option.type}: ${option.value}]`;
    
    // Find the pick in the picksContainer and update its text content
    const pickDiv = document.querySelector(`#picksContainer .selected-pick`);
    if (pickDiv) {
      pickDiv.textContent = optionString;
    } else {
      // If it doesn't exist, create it
      const newPickDiv = document.createElement('div');
      newPickDiv.classList.add('selected-pick');
      newPickDiv.textContent = optionString;
      document.getElementById('picksContainer').appendChild(newPickDiv);
    }
  }

  
  function updateBetCell(option, isSelected) {
    const betCells = document.querySelectorAll('.betCell');
    betCells.forEach(cell => {
      if (cell.textContent === `${option.teamName} [${option.type}: ${option.value}]`) {
        cell.classList.toggle('selected', isSelected);
      }
    });
  }
  
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
    picksCount = 0;
    userPicks = [];
    userImortalLock = [];
    
    // Ensure that the immortalLock element exists before trying to access its properties
    const immortalLockElement = document.getElementById('immortalLock');
    if (immortalLockElement) {
        immortalLockElement.style.display = 'none';
    }

    const statusMessageElement = document.getElementById('statusMessage');
    if (statusMessageElement) {
        statusMessageElement.textContent = '';
    }

    // Reset the visual state of all bet cells
    const betCells = document.querySelectorAll('.betCell');
    betCells.forEach(cell => {
        cell.classList.remove('selected');
    });

    // Show the addPick div if it's hidden
    const addPickElement = document.getElementById('addPick');
    if (addPickElement) {
        addPickElement.style.display = 'block';
    }

    // Uncheck the immortalLockCheck if it's checked
    const immortalLockCheckElement = document.getElementById('immortalLockCheck');
    if (immortalLockCheckElement) {
        immortalLockCheckElement.checked = false;
    }

    // Make the API call to reset the picks on the server
    fetch(`/api/resetPicks/${storedUsername}`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.success) {
            console.log('Picks reset successfully on server.');
        } else {
            console.error('Error resetting picks on server.', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred when resetting picks. Please try again later.');
    });
    }


  document.getElementById('resetPicks').addEventListener('click', resetPicks);

  function submitUserPicks() {
    if (userPicks.length === 0) {
        alert('Please add at least one pick before submitting.');
        return;
      }
    
      // Convert each pick object into a string representation
      const picksAsString = userPicks.map(pick => `${pick.teamName} [${pick.type}: ${pick.value}]`);
      const immortalLockAsString = userImortalLock.length > 0 
      ? `${userImortalLock[0].teamName} [${userImortalLock[0].type}: ${userImortalLock[0].value}]`
      : '';
      const data = {
        picks: picksAsString,
        immortalLock: immortalLockAsString
      };
    
    fetch(`/api/savePicks/${storedUsername}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
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
  
  // Event Listeners
  document.getElementById('immortalLockCheck').addEventListener('change', function() {
    const immortalLockDiv = document.getElementById('immortalLock');
    if (this.checked) {
      immortalLockDiv.style.display = 'block';
    } else {
      immortalLockDiv.style.display = 'none';
    }
  });
  
  document.getElementById('resetPicks').addEventListener('click', resetPicks);
  document.getElementById('submitPicks').addEventListener('click', submitUserPicks);
  
  // Initialization
  renderBetOptions();
