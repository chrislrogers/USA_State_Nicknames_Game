const valueMap = {
    "Alabama": "Heart of Dixie"
    , "Alaska": "The Last Frontier"
    , "Arizona": "Grand Canyon State"
    , "Arkansas": "The Natural State"
    , "California": "The Golden State"
    , "Colorado": "Centennial State"
    , "Connecticut": "Constitution State"
    , "Delaware": "The First State"
    , "Florida": "Sunshine State"
    , "Georgia": "Peach State"
    , "Hawaii": "Aloha State"
    , "Idaho": "Gem State"
    , "Illinois": "Prairie State"
    , "Indiana": "Hoosier State"
    , "Iowa": "Hawkeye State"
    , "Kansas": "Sunflower State"
    , "Kentucky": "Bluegrass State"
    , "Louisiana": "Pelican State"
    , "Maine": "Vacationland"
    , "Maryland": "Free State"
    , "Massachusetts": "The Bay State"
    , "Michigan": "The Wolverine State"
    , "Minnesota": "Land of 10,000 Lakes"
    , "Mississippi": "Magnolia State"
    , "Missouri": "Show-Me State"
    , "Montana": "Treasure State"
    , "Nebraska": "Cornhusker State"
    , "Nevada": "Silver State"
    , "New Hampshire": "Granite State"
    , "New Jersey": "Garden State"
    , "New Mexico": "Land of Enchantment"
    , "New York": "Empire State "
    , "North Carolina": "Tar Heel State"
    , "North Dakota": "Peace Garden State"
    , "Ohio": "Buckeye State"
    , "Oklahoma": "Sooner State"
    , "Oregon": "Beaver State"
    , "Pennsylvania": "Keystone State"
    , "Rhode Island": "Ocean State"
    , "South Carolina": "Palmetto State"
    , "South Dakota": "The Mount Rushmore State"
    , "Tennessee": "Volunteer State"
    , "Texas": "Lone Star State"
    , "Utah": "Beehive State"
    , "Vermont": "Green Mountain State"
    , "Virginia": "The Old Dominion"
    , "Washington": "Evergreen State"
    , "West Virginia": "Mountain State"
    , "Wisconsin": "America's Dairyland"
    , "Wyoming": "Equality State"
}

const timer = document.getElementById('timer');
const score = document.getElementById('score');
const currentState = document.getElementById('current-state');

let nicknames = [];
let isPlaying = false;
let currentName = 0;

function start() {
    if (!isPlaying) {
        currentName = 0;
        isPlaying = true;
        nicknames = [];
        for (let i in valueMap) {
            nicknames.push(valueMap[i]);
            document.getElementById(i).style.backgroundColor = "#efefef";
        }
        shuffle();
        score.innerHTML = "0";
        currentState.innerHTML = nicknames[currentName];
    }
}

function stop() {
    if (isPlaying) {
        isPlaying = false;
        currentState.innerHTML = "Press \"Start\" to begin.";
    }
}

function check(guess) {
    if (isPlaying) {
        for (let key of Object.keys(valueMap)) {
            if ((key === guess) && (valueMap[key] === nicknames[currentName])) {
                console.log("Correct");
                nicknames.splice(currentName, 1);
                document.getElementById(guess).style.backgroundColor = "#4CAF52";
                if (currentName > nicknames.length - 1) {
                    /* sets currentName to the last available nickname if the value is higher than it's length.
                     * this prevents the player seeing 'undefined' if they guess the last nickname correctly.
                     */
                    currentName = nicknames.length - 1;
                }
                break;
            }
        }
        if (nicknames.length === 0) {
            currentState.innerHTML = "You got them all!";
            isPlaying = false;
        } else {
            currentState.innerHTML = nicknames[currentName];
        }
        score.innerHTML = 50 - nicknames.length;
    }
}

function previous() {
    if (isPlaying) {
        if (currentName !== 0) {
            currentName--;
            currentState.innerHTML = nicknames[currentName];
        }
    }
}

function next() {
    if (isPlaying) {
        if (currentName < nicknames.length - 1) {
            currentName++;
            currentState.innerHTML = nicknames[currentName];
        }
    }
}

function shuffle() {
    for (let i = nicknames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nicknames[i], nicknames[j]] = [nicknames[j], nicknames[i]];
    }
}
