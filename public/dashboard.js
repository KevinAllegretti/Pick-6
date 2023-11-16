//VERSION 1

// Assuming betOptions is an array of all bet options for the week
const betOptions = [
    // Panthers vs Bears
    { teamName: 'CAR Panthers', type: 'Spread', value: '+3.5' },
    { teamName: 'CAR Panthers', type: 'ML', value: '+142' },
    { teamName: 'CHI Bears', type: 'Spread', value: '-3.5' },
    { teamName: 'CHI Bears', type: 'ML', value: '-170' },

    // Colts vs Patriots
    { teamName: 'IND Colts', type: 'Spread', value: '-1.5' },
    { teamName: 'IND Colts', type: 'ML', value: '-122' },
    { teamName: 'NE Patriots', type: 'Spread', value: '+1.5' },
    { teamName: 'NE Patriots', type: 'ML', value: '+102' },

    //texans vs bengals
    { teamName: 'HOU Texans', type: 'Spread', value: '+6.5'},
    { teamName: 'HOU Texans', type: 'ML', value: '+240'},
    { teamName: 'CIN Bengals', type: 'Spread', value: '-6.5'},
    { teamName: 'CIN Bengals', type: 'ML', value: '-298'},

    // Browns vs Ravens
    { teamName: 'CLE Browns', type: 'Spread', value: '+6' },
    { teamName: 'CLE Browns', type: 'ML', value: '+195' },
    { teamName: 'BAL Ravens', type: 'Spread', value: '-6' },
    { teamName: 'BAL Ravens', type: 'ML', value: '-250' },

    // 49ers vs Jaguars
    { teamName: 'SF 49ers', type: 'Spread', value: '-3' },
    { teamName: 'SF 49ers', type: 'ML', value: '-170' },
    { teamName: 'JAX Jaguars', type: 'Spread', value: '+3' },
    { teamName: 'JAX Jaguars', type: 'ML', value: '+142' },

     // Packers vs Steelers
     { teamName: 'GB Packers', type: 'Spread', value: '+3' },
     { teamName: 'GB Packers', type: 'ML', value: '+140' },
     { teamName: 'PIT Steelers', type: 'Spread', value: '-3' },
     { teamName: 'PIT Steelers', type: 'ML', value: '-166' },

    // Saints vs Vikings
    { teamName: 'NO Saints', type: 'Spread', value: '-2.5' },
    { teamName: 'NO Saints', type: 'ML', value: '-135' },
    { teamName: 'MIN Vikings', type: 'Spread', value: '+2.5' },
    { teamName: 'MIN Vikings', type: 'ML', value: '+114' },

        // Titans vs Buccaneers
        { teamName: 'TEN Titans', type: 'Spread', value: '-1' },
        { teamName: 'TEN Titans', type: 'ML', value: '-110' },
        { teamName: 'TB Buccaneers', type: 'Spread', value: '+1' },
        { teamName: 'TB Buccaneers', type: 'ML', value: '-110' },
    
    // Lions vs Chargers
    { teamName: 'DET Lions', type: 'Spread', value: '-3' },
    { teamName: 'DET Lions', type: 'ML', value: '-162' },
    { teamName: 'LA Chargers', type: 'Spread', value: '+3' },
    { teamName: 'LA Chargers', type: 'ML', value: '+136' },

     // Falcons vs Chargers
     { teamName: 'ATL Falcons', type: 'Spread', value: '-1.5' },
     { teamName: 'ATL Falcons', type: 'ML', value: '-122' },
     { teamName: 'ARI Cardinals', type: 'Spread', value: '+1.5' },
     { teamName: 'ARI Cardinals', type: 'ML', value: '+100' },

       // Giants vs Cowboys
    { teamName: 'NY Giants', type: 'Spread', value: '+16' },
    { teamName: 'NY Giants', type: 'ML', value: '+700' },
    { teamName: 'DAL Cowboys', type: 'Spread', value: '-16' },
    { teamName: 'DAL Cowboys', type: 'ML', value: '-1100' },

        // Commanders vs Seahawks
        { teamName: 'WAS Commanders', type: 'Spread', value: '+6' },
        { teamName: 'WAS Commanders', type: 'ML', value: '+220' },
        { teamName: 'SEA Seahawks', type: 'Spread', value: '-6' },
        { teamName: 'SEA Seahawks', type: 'ML', value: '-270' },

    // Jets vs Raiders
    { teamName: 'NY Jets', type: 'Spread', value: '-1' },
    { teamName: 'NY Jets', type: 'ML', value: '-118' },
    { teamName: 'LV Raiders', type: 'Spread', value: '+1' },
    { teamName: 'LV Raiders', type: 'ML', value: '-102' },

        // Broncos vs Bills
        { teamName: 'DEN Broncos', type: 'Spread', value: '+7.5' },
        { teamName: 'DEN Broncos', type: 'ML', value: '+295' },
        { teamName: 'BUF Bills', type: 'Spread', value: '-7.5' },
        { teamName: 'BUF Bills', type: 'ML', value: '-375' },
    
];

const teamColorClasses = {
    'ARI Cardinals': 'cardinals-color',
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
    'PIT Steelers': 'steelers-color',
    'SF 49ers': 'FortyNiners-color',
    'SEA Seahawks': 'seahawks-color',
    'TB Buccaneers': 'buccaneers-color',
    'TEN Titans': 'titans-color',
    'WAS Commanders': 'commanders-color'
};
  
const teamLogos = {
  'ARI Cardinals': '/ARILogo.png',
  'ATL Falcons': '/ATLLogo.png',
  'BAL Ravens': '/BALLogo.png',
  'BUF Bills': '/BUFLogo.png',
  'CAR Panthers': '/CARLogo.png',
  'CHI Bears': '/CHILogo.png',
  'CIN Bengals': '/CINLogo.png',
  'CLE Browns': '/CLELogo.png',
  'DAL Cowboys': '/DALLogo.png',
  'DEN Broncos': '/DENLogo.png',
  'DET Lions': '/DETLogo.png',
  'GB Packers': '/GBLogo.png',
  'HOU Texans': '/HOULogo.png',
  'IND Colts': '/INDLogo.png',
  'JAX Jaguars': '/JAXLogo.png',
  'KC Chiefs': '/KCLogo.png',
  'LV Raiders': '/LVLogo.png',
  'LA Chargers': '/LACLogo.png',
  'LA Rams': '/LARLogo.png',
  'MIA Dolphins': '/MIALogo.png',
  'MIN Vikings': '/MINLogo.png',
  'NE Patriots': '/NELogo.png',
  'NO Saints': '/NOLogo.png',
  'NY Giants': '/NYGLogo.png',
  'NY Jets': '/NYJLogo.png',
  'PHI Eagles': '/PHILogo.png',
  'PIT Steelers': '/PITLogo.png',
  'SF 49ers': '/SFLogo.png',
  'SEA Seahawks': '/SEALogo.png',
  'TB Buccaneers': '/TBLogo.png',
  'TEN Titans': '/TENLogo.png',
  'WAS Commanders': '/WASLogo.png'
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

  //setting this here for test
  //another test
  
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
  


  /*
  function selectBet(option) {
    console.log('selectBet called with option:', option);
    const immortalLockCheckbox = document.getElementById('immortalLockCheck');

    // Find if a pick for the same team and type already exists
    let existingPickIndex = userPicks.findIndex(pick => pick.teamName === option.teamName && pick.type === option.type);

    // If the same pick was already selected, remove it (toggle off)
    if (existingPickIndex !== -1) {
        userPicks.splice(existingPickIndex, 1);
        picksCount--;
        updateBetCell(option, false);
        return; // Exit the function after toggling off
    }

    // Check if a different pick for the same team already exists
    let existingTeamPickIndex = userPicks.findIndex(pick => pick.teamName === option.teamName);

    // If a different bet for the same team exists, alert the user
    if (existingTeamPickIndex !== -1) {
        alert("Only one bet per team is allowed.");
        return; // Exit the function without adding the new bet
    }

    // Check if the user has already selected 6 picks
    if (picksCount >= 6 && !immortalLockCheckbox.checked) {
        alert('You can only select 6 picks. Set your Immortal Lock or deselect a pick.');
        return; // Exit the function if pick limit is reached
    }

    // If Immortal Lock is checked, handle it separately
    if (immortalLockCheckbox.checked) {
        if (userImortalLock.length > 0) {
            // If Immortal Lock is already set, replace it with the new selection
            alert('Replacing the existing Immortal Lock with the new selection.');
            updateBetCell(userImortalLock[0], false); // Remove highlighting from the old Immortal Lock
            userImortalLock[0] = option; // Replace with new option
        } else {
            // Set new Immortal Lock
            userImortalLock.push(option);
        }
        updateBetCell(option, true); // Highlight the Immortal Lock pick
    } else {
        // If Immortal Lock is not checked, just add the pick
        userPicks.push(option);
        picksCount++;
        updateBetCell(option, true);
    }
}


function updateBetCell(option, isSelected, isImmortalLock = false) {
  const betCells = document.querySelectorAll('.betCell');
  betCells.forEach(cell => {
      const cellText = `${option.teamName} [${option.type}: ${option.value}]`;
      if (cell.textContent === cellText) {
          if (isSelected) {
              if (isImmortalLock) {
                  // Add both 'selected' and 'immortal-lock-selected' if it's an Immortal Lock
                  cell.classList.add('selected', 'immortal-lock-selected');
              } else {
                  // Only add 'selected' for regular bets
                  cell.classList.add('selected');
                  cell.classList.remove('immortal-lock-selected');
              }
          } else {
              // Remove both classes if deselecting
              cell.classList.remove('selected', 'immortal-lock-selected');
          }
      }
  });
}
*/

/*
function updateBetCell(option, isSelected) {
  const betCells = document.querySelectorAll('.betCell');
  betCells.forEach(cell => {
      // Check both the team name and the type/value to ensure uniqueness
      const cellText = `${option.teamName} [${option.type}: ${option.value}]`;
      if (cell.textContent === cellText) {
          cell.classList.toggle('selected', isSelected);

          // Apply the 'immortal-lock-selected' class only if it's the immortal lock
          const isImmortalLock = userImortalLock.some(lock => lock.teamName === option.teamName && lock.type === option.type && lock.value === option.value);
          cell.classList.toggle('immortal-lock-selected', isSelected && isImmortalLock);
      }
  });
}
*/
function selectBet(option) {
  console.log('selectBet called with option:', option);
  const immortalLockCheckbox = document.getElementById('immortalLockCheck');

  // Find if a pick for the same team and type already exists
  let existingPickIndex = userPicks.findIndex(pick => pick.teamName === option.teamName && pick.type === option.type);

  // If the same pick was already selected, remove it (toggle off)
  if (existingPickIndex !== -1) {
      userPicks.splice(existingPickIndex, 1);
      picksCount--;
      updateBetCell(option, false);
      return; // Exit the function after toggling off
  }

  // Check if a different pick for the same team already exists
  let existingTeamPickIndex = userPicks.findIndex(pick => pick.teamName === option.teamName);

  // If a different bet for the same team exists, alert the user
  if (existingTeamPickIndex !== -1) {
      alert("Only one bet per team is allowed.");
      return; // Exit the function without adding the new bet
  }

  // Check if the user has already selected 6 picks and Immortal Lock is not set
  if (picksCount >= 6 && !immortalLockCheckbox.checked) {
      alert('You can only select 6 picks. Set your Immortal Lock or deselect a pick.');
      return; // Exit the function if pick limit is reached
  }

  // If Immortal Lock is checked and we already have 6 picks, the next pick is the Immortal Lock
  if (immortalLockCheckbox.checked && picksCount >= 6) {
      // Replace the existing Immortal Lock with the new selection
      if (userImortalLock.length > 0) {
          alert('Replacing the existing Immortal Lock with the new selection.');
          updateBetCell(userImortalLock[0], false); // Remove highlighting from the old Immortal Lock
      }
      userImortalLock[0] = option; // Set the new Immortal Lock
      updateBetCell(option, true, true); // Highlight the Immortal Lock pick
      return; // Exit the function after setting Immortal Lock
  }

  // Add the new pick if none of the above conditions are met
  userPicks.push(option);
  picksCount++;
  updateBetCell(option, true);
}

function updateBetCell(option, isSelected, isImmortalLock = false) {
  const betCells = document.querySelectorAll('.betCell');
  betCells.forEach(cell => {
      if (cell.textContent === `${option.teamName} [${option.type}: ${option.value}]`) {
          cell.classList.toggle('selected', isSelected);
          cell.classList.toggle('immortal-lock-selected', isSelected && isImmortalLock);
      }
  });
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
            alert('Picks reset successfully on server.')
            updatePicksDisplay();
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
      
      const userImmortalLockAsString = userImortalLock.map(pick => `${pick.teamName} [${pick.type}: ${pick.value}]`);
 
     console.log(userImortalLock[0]);

      const data = {
        picks: picksAsString,
        immortalLock: userImmortalLockAsString
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
        updatePicksDisplay();
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


// This function fetches the current user's picks and displays them
async function fetchAndDisplayUserPicks() {
  try {
      const response = await fetch(`/api/getPicks/${storedUsername}`);
      const data = await response.json();
      // Assuming data has a structure { picks: Array, immortalLock: String }
      displayPicks(data.picks);
      displayImmortalLock(data.immortalLock);
  } catch (error) {
      console.error('Error fetching user picks:', error);
  }
}

// Call this function when the page loads and after picks are submitted
fetchAndDisplayUserPicks();

// Function to display picks
function displayPicks(picks) {
  const picksContainer = document.getElementById('userPicksContainer'); // Create this container in your HTML
  picksContainer.innerHTML = ''; // Clear previous picks
  picks.forEach(pick => {
      const pickElement = document.createElement('div');
      pickElement.textContent = pick; // Modify as needed to display the pick information
      picksContainer.appendChild(pickElement);
  });
}

// Function to display the immortal lock
function displayImmortalLock(immortalLock) {
  const immortalLockContainer = document.getElementById('userImmortalLockContainer'); // Create this container in your HTML
  immortalLockContainer.innerHTML = ''; // Clear previous content
  if (immortalLock) {
      const immortalLockElement = document.createElement('div');
      immortalLockElement.textContent = `Immortal Lock: ${immortalLock}`; // Prepends "Immortal Lock: " to the pick
      immortalLockContainer.appendChild(immortalLockElement);
  } else {
      immortalLockContainer.textContent = 'Immortal Lock: Not Set'; // Display when no immortal lock is set
  }
}

function updatePicksDisplay() {
  // Function to update the user picks display
  const userPicksContainer = document.getElementById('userPicksContainer');
  userPicksContainer.innerHTML = ''; // Clear previous picks
  userPicks.forEach(pick => {
    const pickDiv = document.createElement('div');
    pickDiv.textContent = `${pick.teamName} [${pick.type}: ${pick.value}]`;
    userPicksContainer.appendChild(pickDiv);
  });
  
  // Update the immortal lock display
  const userImmortalLockContainer = document.getElementById('userImmortalLockContainer');
  userImmortalLockContainer.innerHTML = ''; // Clear previous immortal lock
  if (userImortalLock.length > 0) {
    const lockDiv = document.createElement('div');
    lockDiv.textContent = `Immortal Lock: ${userImortalLock[0].teamName} [${userImortalLock[0].type}: ${userImortalLock[0].value}]`;
    userImmortalLockContainer.appendChild(lockDiv);
  }
}


updatePicksDisplay();