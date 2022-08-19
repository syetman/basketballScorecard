let homeScore = 0
let homeScoreDisplay = document.getElementById("home-score-display")

let guestScore = 0
let guestScoreDisplay = document.getElementById("guest-score-display")

// Home Functions
function homeAddOne(){
    console.log("One added")
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function homeAddTwo(){
    console.log("Two added")
    homeScore += 2
    homeScoreDisplay.textContent = homeScore

}

function homeAddThree(){
    console.log("Three added")
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}

// Guest Functions

function guestAddOne(){
    console.log("One added")
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function guestAddTwo(){
    console.log("Two added")
    guestScore += 2
    guestScoreDisplay.textContent = guestScore

}

function guestAddThree(){
    console.log("Three added")
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}


