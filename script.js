const valueMap = {
    "Alabama": "Heart of Dixie"
    , "Alaska": "The Last Frontier"
    , "Arizona": "Grand Canyon State"
    , "Arkansas": "The Natural State"
    , "Californa": "The Golden State"
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
const currentState = document.getElementById('current-state');

let isPlaying = false;

function start() {
    if (!isPlaying) {
        alert("start");
        isPlaying = true;
    }
}

function stop() {
    if (isPlaying) {
        alert("stop");
        isPlaying = false;
    }
}
