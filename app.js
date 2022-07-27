const pOne = document.querySelector("#pOne");
const pTwo = document.querySelector("#pTwo");
const reset = document.querySelector("#reset");
const pointsDisplay = document.querySelector("#pointsDisplay");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const scores = [0, 0];

pOne.addEventListener("click", function () {
    addPoint(1)
})

pTwo.addEventListener("click", function () {
    addPoint(2)
})

function addPoint(player = 1) {
    player -= 1
    const maxScore = document.querySelector("#points").value;
    scores[player] += 1;
    p1Display.textContent = scores[0]
    p2Display.textContent = scores[1]
    if (scores[player] >= maxScore) {
        selectWinner(player)
    }

}

function selectWinner(winner) {
    if (winner === 0) {
        p1Display.classList.add("has-text-success")
        p2Display.classList.add("has-text-danger")
    } else {
        p2Display.classList.add("has-text-success")
        p1Display.classList.add("has-text-danger")
    }
    pOne.disabled = true
    pTwo.disabled = true
}


reset.addEventListener("click", function () {
    p1Display.classList.remove("has-text-danger", "has-text-success")
    p2Display.classList.remove("has-text-danger", "has-text-success")
    p1Display.textContent = 0
    p2Display.textContent = 0
    pOne.disabled = false
    pTwo.disabled = false
    scores.fill(0);
})