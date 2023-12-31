//VERSION 1

const now = new Date();
let thursdayDeadline = new Date(now);
thursdayDeadline.setDate(now.getDate() + ((4 + 7 - now.getDay()) % 7));
thursdayDeadline.setHours(19, 0, 0, 0); // 7 PM EST
thursdayDeadline.setMinutes(thursdayDeadline.getMinutes() + thursdayDeadline.getTimezoneOffset());
thursdayDeadline.setHours(thursdayDeadline.getHours() - 5); // Convert UTC to EST (UTC-5)

// Define the end time for Tuesday 12 AM EST
let tuesdayEndTime = new Date(now);
tuesdayEndTime.setDate(now.getDate() + ((2 + 7 - now.getDay()) % 7));
tuesdayEndTime.setHours(0, 0, 0, 0); // 12 AM EST
tuesdayEndTime.setMinutes(tuesdayEndTime.getMinutes() + tuesdayEndTime.getTimezoneOffset());
tuesdayEndTime.setHours(tuesdayEndTime.getHours() - 5); // Convert UTC to EST (UTC-5)
// Assuming betOptions is an array of all bet options for the week
const betOptions = [
  // Steelers vs Ravens
  { teamName: 'PIT Steelers', type: 'Spread', value: '-3' },
  { teamName: 'PIT Steelers', type: 'ML', value: '-162' },
  { teamName: 'BAL Ravens', type: 'Spread', value: '+3' },
  { teamName: 'BAL Ravens', type: 'ML', value: '+136' },

  // Texans vs Colts
  { teamName: 'HOU Texans', type: 'Spread', value: '-2' },
  { teamName: 'HOU Texans', type: 'ML', value: '-130' },
  { teamName: 'IND Colts', type: 'Spread', value: '+2' },
  { teamName: 'IND Colts', type: 'ML', value: '+110' },

  // Jaguars vs Titans
  { teamName: 'JAX Jaguars', type: 'Spread', value: '-3.5' },
  { teamName: 'JAX Jaguars', type: 'ML', value: '-185' },
  { teamName: 'TEN Titans', type: 'Spread', value: '+3.5' },
  { teamName: 'TEN Titans', type: 'ML', value: '+154' },

  // Vikings vs Lions
  { teamName: 'MIN Vikings', type: 'Spread', value: '+3.5' },
  { teamName: 'MIN Vikings', type: 'ML', value: '+154' },
  { teamName: 'DET Lions', type: 'Spread', value: '-3.5' },
  { teamName: 'DET Lions', type: 'ML', value: '-185' },

  // Browns vs Bengals
  { teamName: 'CLE Browns', type: 'Spread', value: '+7' },
  { teamName: 'CLE Browns', type: 'ML', value: '+275' },
  { teamName: 'CIN Bengals', type: 'Spread', value: '-7' },
  { teamName: 'CIN Bengals', type: 'ML', value: '-345' },

  // Buccaneers vs Panthers
  { teamName: 'TB Buccaneers', type: 'Spread', value: '-4.5' },
  { teamName: 'TB Buccaneers', type: 'ML', value: '-238' },
  { teamName: 'CAR Panthers', type: 'Spread', value: '+4.5' },
  { teamName: 'CAR Panthers', type: 'ML', value: '+195' },

  // Falcons vs Saints
  { teamName: 'ATL Falcons', type: 'Spread', value: '+3' },
  { teamName: 'ATL Falcons', type: 'ML', value: '+136' },
  { teamName: 'NO Saints', type: 'Spread', value: '-3' },
  { teamName: 'NO Saints', type: 'ML', value: '-162' },

  // Jets vs Patriots
  { teamName: 'NY Jets', type: 'Spread', value: '+2.5' },
  { teamName: 'NY Jets', type: 'ML', value: '+110' },
  { teamName: 'NE Patriots', type: 'Spread', value: '-2.5' },
  { teamName: 'NE Patriots', type: 'ML', value: '-130' },

  // Chiefs vs Chargers
  { teamName: 'KC Chiefs', type: 'Spread', value: '+3.5' },
  { teamName: 'KC Chiefs', type: 'ML', value: '+154' },
  { teamName: 'LA Chargers', type: 'Spread', value: '-3.5' },
  { teamName: 'LA Chargers', type: 'ML', value: '-185' },

  // Bears vs Packers
  { teamName: 'CHI Bears', type: 'Spread', value: '+3' },
  { teamName: 'CHI Bears', type: 'ML', value: '+136' },
  { teamName: 'GB Packers', type: 'Spread', value: '-3' },
  { teamName: 'GB Packers', type: 'ML', value: '-162' },

  // Broncos vs Raiders
  { teamName: 'DEN Broncos', type: 'Spread', value: '+3' },
  { teamName: 'DEN Broncos', type: 'ML', value: '+130' },
  { teamName: 'LV Raiders', type: 'Spread', value: '-3' },
  { teamName: 'LV Raiders', type: 'ML', value: '-155' },

  // Eagles vs Giants
  { teamName: 'PHI Eagles', type: 'Spread', value: '-5.5' },
  { teamName: 'PHI Eagles', type: 'ML', value: '-245' },
  { teamName: 'NY Giants', type: 'Spread', value: '+5.5' },
  { teamName: 'NY Giants', type: 'ML', value: '+200' },

  // Seahawks vs Cardinals
  { teamName: 'SEA Seahawks', type: 'Spread', value: '-3' },
  { teamName: 'SEA Seahawks', type: 'ML', value: '-148' },
  { teamName: 'ARI Cardinals', type: 'Spread', value: '+3' },
  { teamName: 'ARI Cardinals', type: 'ML', value: '+124' },

  // Rams vs 49ers
  { teamName: 'LA Rams', type: 'Spread', value: '+4.5' },
  { teamName: 'LA Rams', type: 'ML', value: '+180' },
  { teamName: 'SF 49ers', type: 'Spread', value: '-4.5' },
  { teamName: 'SF 49ers', type: 'ML', value: '-218' },

  // Cowboys vs Commanders
  { teamName: 'DAL Cowboys', type: 'Spread', value: '-13' },
  { teamName: 'DAL Cowboys', type: 'ML', value: '-850' },
  { teamName: 'WAS Commanders', type: 'Spread', value: '+13' },
  { teamName: 'WAS Commanders', type: 'ML', value: '+575' },

  // Bills vs Dolphins
  { teamName: 'BUF Bills', type: 'Spread', value: '-2.5' },
  { teamName: 'BUF Bills', type: 'ML', value: '-155' },
  { teamName: 'MIA Dolphins', type: 'Spread', value: '+2.5' },
  { teamName: 'MIA Dolphins', type: 'ML', value: '+130' },
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

const lastWeekPicks = {
  "TheDiggler": [
    "BAL Ravens [ML: -175]",
    "LA Rams [Spread: -5.5]",
    "TB Buccaneers [ML: -135]",
    "JAX Jaguars [Spread: -6.5]",
    "CIN Bengals [Spread: +7]",
    "GB Packers [Spread: +1.5]",
    "SF 49ers [ML: -850]" // Immortal Lock
  ],
  "Parlay Prodigy": [
    "MIA Dolphins [Spread: +3]",
    "DAL Cowboys [Spread: -6]",
    "LA Rams [Spread: -5.5]",
    "PHI Eagles [Spread: -11]",
    "CHI Bears [Spread: -3]",
    "TB Buccaneers [Spread: -2.5]",
    "BUF Bills [ML: -750]" // Immortal Lock
  ],
  "Midnight Professional": [
    "CLE Browns [Spread: -7.5]",
    "JAX Jaguars [Spread: -6.5]",
    "HOU Texans [Spread: -4.5]",
    "DAL Cowboys [Spread: -6]",
    "BAL Ravens [Spread: -3]",
    "LV Raiders [Spread: +3.5]",
    "SF 49ers [ML: -850]" // Immortal Lock
  ],
  "Primitive Picks": [
    "NE Patriots [Spread: +13]",
    "IND Colts [Spread: -3.5]",
    "CLE Browns [Spread: -7.5]",
    "KC Chiefs [Spread: -7]",
    "TB Buccaneers [Spread: -2.5]",
    "GB Packers [ML: +105]",
    "SF 49ers [ML: -850]" // Immortal Lock
  ],
  "Bear Jew": [
    // No new picks listed, assuming they remain unchanged
  ],
  "L to the OG": [
    "BAL Ravens [Spread: -3]",
    "DAL Cowboys [Spread: -6]",
    "TEN Titans [Spread: -4.5]",
    "PIT Steelers [Spread: +3.5]",
    "SF 49ers [ML: -850]",
    "TB Buccaneers [Spread: -2.5]",
    "BUF Bills [ML: -750]" // Immortal Lock
  ],
  "porkSkinGooner": [
    "DET Lions [Spread: +6]",
    "MIA Dolphins [Spread: +3]",
    "LA Rams [ML: -238]",
    "LV Raiders [Spread: +3.5]",
    "CHI Bears [ML: -155]",
    "TB Buccaneers [Spread: -2.5]",
    "PHI Eagles [ML: -550]" // Immortal Lock
  ],
  "LazyAhhGamer": [
    "CHI Bears [Spread: -3]",
    "SEA Seahawks [Spread: -3.5]",
    "JAX Jaguars [Spread: -6.5]",
    "BAL Ravens [Spread: -3]",
    "LA Rams [ML: -238]",
    "DAL Cowboys [ML: -258]",
    "SF 49ers [ML: -850]" // Immortal Lock
  ]
};




async function wasPickMadeLastWeek(username, currentPick) {
  // Check if the current pick was part of the user's picks last week
  if (lastWeekPicks[username]) {
    return lastWeekPicks[username].some((pick) => {
      // Split the string into components
      const [pickTeamName, pickDetails] = pick.split(' [');
      const [currentTeamName, currentDetails] = currentPick.split(' [');
      // Extract the bet type (Spread or ML) from the details
      const pickType = pickDetails.split(': ')[0];
      const currentType = currentDetails.split(': ')[0];
      // Compare team names and bet types
      return pickTeamName === currentTeamName && pickType === currentType;
    });
  }
  return false;
}

  
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
        const currentPick = `${option.teamName} [${option.type}: ${option.value}]`;

        wasPickMadeLastWeek(storedUsername, currentPick).then(isPickFromLastWeek => {
            betCell.classList.add('betCell', teamColorClasses[option.teamName]);
            betCell.textContent = currentPick;
            if (isPickFromLastWeek) {
                betCell.classList.add('disabled'); // Grey out the option if it was picked last week
                betCell.onclick = () => alert('This bet was made last week!');
            } else {
                betCell.onclick = () => selectBet(option); // Allow selection if it wasn't picked last week
            }
            container.appendChild(betCell);
        });
    });
}

  
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

  const currentPick = `${option.teamName} [${option.type}: ${option.value}]`;
  /*
  // Check if this pick was made last week
  if (wasPickMadeLastWeek(storedUsername, currentPick)) {
    alert('You cannot select the same bet as last week!');
    return;
  }
*/
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
            //updatePicksDisplay();
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
  console.log(thursdayDeadline, tuesdayEndTime);
 
  isDeadline = false;
  function submitUserPicks() {
    if (now < thursdayDeadline && now < tuesdayEndTime){
    isDeadline = false;
    }  
  if (isDeadline == true){
    alert('Deadline has passed, can no longer submit picks!')
  }
  else {
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
      console.log(data);
      if (data.success) {
        alert('Picks successfully submitted!');
        //updatePicksDisplay();
      } else {
        alert('Error submitting picks. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }
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

/*
// This function fetches the current user's picks and displays them
async function fetchAndDisplayUserPicks() {
  try {
    const response = await fetch(`/api/getPicks/${storedUsername}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayPicks(data.picks);
    // Assuming data.immortalLock is an object with teamName and value properties
    displayImmortalLock(data.immortalLock);
  } catch (error) {
    console.error('Error fetching user picks:', error);
  }
}
*/
/*
// Function to display picks with only the logo and the line
function displayPicks(picks) {
  const picksContainer = document.getElementById('userPicksContainer');
  picksContainer.innerHTML = ''; // Clear previous content

  picks.forEach(pick => {
    const pickDiv = document.createElement('div');
    pickDiv.classList.add('pick');

    // Assuming pick is a string like "NY Giants [ML: +700]"
    const teamNameMatch = pick.match(/^(.*?)\s\[/);
    const teamName = teamNameMatch ? teamNameMatch[1] : null;
    const valueMatch = pick.match(/\[.*?([-+]\d+(?:\.\d+)?)\]/);
    const value = valueMatch ? valueMatch[1] : null;

    if (teamName && teamLogos[teamName]) {
      const logoImg = document.createElement('img');
      logoImg.src = teamLogos[teamName];
      logoImg.alt = `${teamName} logo`;
      logoImg.classList.add('team-logo');
      pickDiv.appendChild(logoImg);
    }

    if (value) {
      const valueSpan = document.createElement('span');
      valueSpan.textContent = value;
      pickDiv.appendChild(valueSpan);
    }

    picksContainer.appendChild(pickDiv);
  });
}

function displayImmortalLock(immortalLockArray) {
  const userImmortalLockContainer = document.getElementById('userImmortalLockContainer');
  userImmortalLockContainer.innerHTML = ''; // Clear previous content

  if (Array.isArray(immortalLockArray) && immortalLockArray.length > 0) {
    // Extract the team name and value from the string
    const immortalLockString = immortalLockArray[0];
    const [fullMatch, teamName, type, value] = immortalLockString.match(/^(.*?)\s\[(.*?):\s([-+]\d+(?:\.\d+)?)\]$/) || [];

    if (teamName && teamLogos[teamName]) {
      const lockDiv = document.createElement('div');
      lockDiv.classList.add('immortal-lock');
        // Create and append the line span with the value
        const line = document.createElement('string');
        line.textContent = `Immortal Lock: `;
        lockDiv.appendChild(line);
  

      // Create and append the team logo image
      const logoImg = document.createElement('img');
      logoImg.src = teamLogos[teamName];
      logoImg.alt = `${teamName} logo`;
      logoImg.classList.add('team-logo');
      lockDiv.appendChild(logoImg);

      // Create and append the line span with the value
      const lineSpan = document.createElement('span');
      lineSpan.textContent = `${value}`;
      lockDiv.appendChild(lineSpan);

      // Append the lock div to the container
      userImmortalLockContainer.appendChild(lockDiv);
    }
  } else {
    userImmortalLockContainer.textContent = 'Immortal Lock: Not Set';
  }
}

// Call this function when the page loads and after picks are submitted
fetchAndDisplayUserPicks();




// Call this function when the page loads and after picks are submitted
fetchAndDisplayUserPicks();

function updatePicksDisplay() {
  // Function to update the user picks display
  const userPicksContainer = document.getElementById('userPicksContainer');
  userPicksContainer.innerHTML = ''; // Clear previous picks

  userPicks.forEach(pick => {
    const pickDiv = document.createElement('div');
    pickDiv.classList.add('pick');

    // Assuming each pick object has properties like { teamName: "Team", type: "Spread", value: "+3.5" }
    if (teamLogos[pick.teamName]) {
      const logoImg = document.createElement('img');
      logoImg.src = teamLogos[pick.teamName];
      logoImg.alt = `${pick.teamName} logo`;
      logoImg.classList.add('team-logo');
      pickDiv.appendChild(logoImg);
    }

    const lineSpan = document.createElement('span');
    lineSpan.textContent = pick.value; // Only the line is displayed, not the team name or type
    pickDiv.appendChild(lineSpan);

    userPicksContainer.appendChild(pickDiv);
  });

  // Update the immortal lock display in a similar way
  const userImmortalLockContainer = document.getElementById('userImmortalLockContainer');
  userImmortalLockContainer.innerHTML = ''; // Clear previous immortal lock

  if (userImortalLock.length > 0) {
    const lockDiv = document.createElement('div');
    lockDiv.classList.add('pick', 'immortal-lock');

    const line = document.createElement('string');
    line.textContent = `Immortal Lock: `;
    lockDiv.appendChild(line);

    if (teamLogos[userImortalLock[0].teamName]) {
      const logoImg = document.createElement('img');
      logoImg.src = teamLogos[userImortalLock[0].teamName];
      logoImg.alt = `${userImortalLock[0].teamName} logo`;
      logoImg.classList.add('team-logo');
      lockDiv.appendChild(logoImg);
    }

    const lineSpan = document.createElement('span');
    lineSpan.textContent = `${userImortalLock[0].value}`;
    lockDiv.appendChild(lineSpan);

    userImmortalLockContainer.appendChild(lockDiv);
  }
}

updatePicksDisplay();
*/