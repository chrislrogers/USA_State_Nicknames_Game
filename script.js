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
let nameIndex = 0;

let timeLimit = 10; //time to complete in minutes
let time;
let timerInterval;

function start() {
    if (!isPlaying) {
        nameIndex = 0;
        isPlaying = true;
        nicknames = [];
        for (let i in valueMap) {
            nicknames.push(valueMap[i]);
            document.getElementById(i).style.backgroundColor = "#efefef";
        }
        shuffle();
        timeLimit = document.querySelector('input[name="difficulty"]:checked').value;
        time = timeLimit * 60;
        timerInterval = setInterval(getTime, 1000);
        score.innerHTML = "0";
        currentState.innerHTML = nicknames[nameIndex];
    }
}

function stop() {
    if (isPlaying) {
        isPlaying = false;
        clearInterval(timerInterval);
        currentState.innerHTML = "Press \"Start\" to begin.";
    }
}

function check(guess) {
    if (isPlaying) {
        for (let key of Object.keys(valueMap)) {
            if ((key === guess) && (valueMap[key] === nicknames[nameIndex])) {
                console.log("Correct");
                nicknames.splice(nameIndex, 1);
                document.getElementById(guess).style.backgroundColor = "#4CAF52";
                if (nameIndex > nicknames.length - 1) {
                    /* sets nameIndex to the last available nickname if the value is higher than it's length.
                     * this prevents the player seeing 'undefined' if they guess the last nickname correctly.
                     */
                    nameIndex = nicknames.length - 1;
                }
                break;
            }
        }
        if (nicknames.length === 0) {
            currentState.innerHTML = "You got them all!";
            isPlaying = false;
            clearInterval(timerInterval);
        } else {
            currentState.innerHTML = nicknames[nameIndex];
        }
        score.innerHTML = 50 - nicknames.length;
    }
}

function previous() {
    if (isPlaying) {
        if (nameIndex !== 0) {
            nameIndex--;
            currentState.innerHTML = nicknames[nameIndex];
        }
    }
}

function next() {
    if (isPlaying) {
        if (nameIndex < nicknames.length - 1) {
            nameIndex++;
            currentState.innerHTML = nicknames[nameIndex];
        }
    }
}

function shuffle() {
    for (let i = nicknames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nicknames[i], nicknames[j]] = [nicknames[j], nicknames[i]];
    }
}

function getTime() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds === "00" && minutes === 0) {
        currentState.innerHTML = "Time ran out!";
        isPlaying = false;
        clearInterval(timerInterval);
    }
    time--;
    timer.innerHTML = minutes + ":" + seconds;
}
