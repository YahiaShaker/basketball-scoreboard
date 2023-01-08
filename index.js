let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

function reset() {
    homeEl.textContent = 0
    guestEl.textContent = 0
    document.getElementById("home-name").style.color = "#EEEEEE"
    document.getElementById("guest-name").style.color = "#EEEEEE"
}

function leader() {
    if (parseInt(homeEl.textContent) > parseInt(guestEl.textContent)) {
        document.getElementById("home-name").style.color = "#3BB143"
        document.getElementById("guest-name").style.color = "#EEEEEE"
    } else if (parseInt(homeEl.textContent) < parseInt(guestEl.textContent)) {
        document.getElementById("guest-name").style.color = "#3BB143"
        document.getElementById("home-name").style.color = "#EEEEEE"
    } else {
        document.getElementById("home-name").style.color = "#EEEEEE"
        document.getElementById("guest-name").style.color = "#EEEEEE"
    }
}

function add1home() {
    let score = parseInt(homeEl.textContent)
    score += 1
    
    homeEl.textContent = score
    leader()
}

function add2home() {
    let score = parseInt(homeEl.textContent)
    score += 2
    
    homeEl.textContent = score
    leader()
}

function add3home() {
    let score = parseInt(homeEl.textContent)
    score += 3
    
    homeEl.textContent = score
    leader()
}

function add1guest() {
    let score = parseInt(guestEl.textContent)
    score += 1
    
    guestEl.textContent = score
    leader()
}

function add2guest() {
    let score = parseInt(guestEl.textContent)
    score += 2
    
    guestEl.textContent = score
    leader()
}

function add3guest() {
    let score = parseInt(guestEl.textContent)
    score += 3
    
    guestEl.textContent = score
    leader()
}