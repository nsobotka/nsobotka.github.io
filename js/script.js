// cards
card_home = document.getElementById("card-home")
card_reachout = document.getElementById("card-reachout")
card_interestingMain = document.getElementById("card-interestingMain")
card_interesting1 = document.getElementById("card-interesting1")
card_interesting2 = document.getElementById("card-interesting2")
card_interesting3 = document.getElementById("card-interesting3")
card_classes = document.getElementById("card-classes")
card_women1 = document.getElementById("card-women1")
card_women2 = document.getElementById("card-women2")
card_women3 = document.getElementById("card-women3")
card_womenMain = document.getElementById("card-womenMain")
card_work1 = document.getElementById("card-work1")
card_work2 = document.getElementById("card-work2")

// arrows
up_arrow = document.getElementById("up-arrow")
down_arrow = document.getElementById("down-arrow")
left_arrow = document.getElementById("left-arrow")
right_arrow = document.getElementById("right-arrow")

// neighbors order: up, down, left, right
const neighbors = new Map();
neighbors.set("card-home", [card_reachout, card_interestingMain, card_womenMain, card_work1]);
neighbors.set("card-reachout", [null, card_home, null, null]);
neighbors.set("card-interestingMain", [card_home, interesting2, interesting1, interesting3]);
neighbors.set("card-interesting1", [null, null, null, interestingMain]);
neighbors.set("card-interesting2", [interestingMain, null, null, null]);
neighbors.set("card-interesting3", [null, null, interestingMain, null]);
neighbors.set("card-women1", [null, card_womenMain, null, null]);
neighbors.set("card-women2", [null, null, null, card_womenMain]);
neighbors.set("card-women3", [card_womenMain, null, null, null]);
neighbors.set("card-womenMain", [card_women1, card_women3, card_women2, card_home]);
neighbors.set("card-work1", [null, null, card_home, card_work2]);
neighbors.set("card-work2", [null, null, card_work1, null]);

function getCurrCard() {
    if (window.getComputedStyle(card_home, null).display == "block") { return "card-home" }
    else if (window.getComputedStyle(card_reachout, null).display == "block") { return "card-reachout" }
    else if (window.getComputedStyle(card_interestingMain, null).display == "block") { return "card-interestingMain" }
    else if (window.getComputedStyle(card_interesting1, null).display == "block") { return "card-interesting1" }
    else if (window.getComputedStyle(card_interesting2, null).display == "block") { return "card-interesting2" }
    else if (window.getComputedStyle(card_interesting3, null).display == "block") { return "card-interesting3" }
    else if (window.getComputedStyle(card_women1, null).display == "block") { return "card-women1" }
    else if (window.getComputedStyle(card_women2, null).display == "block") { return "card-women2" }
    else if (window.getComputedStyle(card_women3, null).display == "block") { return "card-women3" }
    else if (window.getComputedStyle(card_womenMain, null).display == "block") { return "card-womenMain" }
    else if (window.getComputedStyle(card_work1, null).display == "block") { return "card-work1" }
    else if (window.getComputedStyle(card_work2, null).display == "block") { return "card-work2" }
    else { return alert("No Card Visible") }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    curr_card = getCurrCard()

    if (e.keyCode == '38') {
        // up arrow
        if (neighbors.get(curr_card)[0] == null) {
            console.log("Invalid Move")
        } else {
            activate(neighbors.get(curr_card)[0])
        }        
    }
    else if (e.keyCode == '40') {
        // down arrow
        if (neighbors.get(curr_card)[1] == null) {
            console.log("Invalid Move")
        } else {
            activate(neighbors.get(curr_card)[1])
        }
    }
    else if (e.keyCode == '37') {
        // left arrow
        if (neighbors.get(curr_card)[2] == null) {
            console.log("Invalid Move")
        } else {
            activate(neighbors.get(curr_card)[2])
        }
    }
    else if (e.keyCode == '39') {
        // right arrow
        if (neighbors.get(curr_card)[3] == null) {
            console.log("Invalid Move")
        } else {
            activate(neighbors.get(curr_card)[3])
        }
    }
}

function upArrow() {
    curr_card = getCurrCard()
    if (neighbors.get(curr_card)[0] == null) {
        console.log("Invalid Move")
    } else {
        activate(neighbors.get(curr_card)[0])
    }
}

function downArrow() {
    curr_card = getCurrCard()
    if (neighbors.get(curr_card)[1] == null) {
        console.log("Invalid Move")
    } else {
        activate(neighbors.get(curr_card)[1])
    }
}

function leftArrow() {
    curr_card = getCurrCard()
    if (neighbors.get(curr_card)[2] == null) {
        console.log("Invalid Move")
    } else {
        activate(neighbors.get(curr_card)[2])
    }
}

function rightArrow() {
    curr_card = getCurrCard()
    if (neighbors.get(curr_card)[3] == null) {
        console.log("Invalid Move")
    } else {
        activate(neighbors.get(curr_card)[3])
    }
}

// TODO: iterate through an array of the courses / the keys of neighbors for modularity
function activate(card) { 
    card_home.style.display = "none";
    card_reachout.style.display = "none";
    card_interestingMain.style.display = "none";
    card_interesting1.style.display = "none";
    card_interesting2.style.display = "none";
    card_interesting3.style.display = "none";
    card_women1.style.display = "none";
    card_women2.style.display = "none";
    card_women3.style.display = "none";
    card_womenMain.style.display = "none";
    card_work1.style.display = "none";
    card_work2.style.display = "none";
    
    card.style.display = "block";
    
    curr_card = getCurrCard()
    
    up_arrow.style.display = "none";
    down_arrow.style.display = "none";
    left_arrow.style.display = "none";
    right_arrow.style.display = "none";

    if (neighbors.get(curr_card)[0] != null) {
        up_arrow.style.display = "block";
    }

    if (neighbors.get(curr_card)[1] != null) {
        down_arrow.style.display = "block";
    }

    if (neighbors.get(curr_card)[2] != null) {
        left_arrow.style.display = "block";
    }

    if (neighbors.get(curr_card)[3] != null) {
        right_arrow.style.display = "block";
    }

}
