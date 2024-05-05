const cashInput = document.getElementById('total-cash');
const resultSpan = document.querySelectorAll(".change-item span")
const result = document.querySelectorAll(".change-item span")
function randomVal(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateChange(rem) {
    let results = {}
    const hundreds = Math.floor(randomVal(rem * 0.004, rem * 0.001))
    rem -= hundreds * 100
    results.hunds = hundreds * 100
    const fiftys = Math.floor(randomVal(rem * 0.005, rem * 0.002))
    rem -= fiftys * 50
    results.fiftys = fiftys * 50
    const tens = Math.floor(randomVal(rem * 0.06, rem * 0.03))
    rem -= tens * 10
    results.tens = tens * 10
    const fives = Math.floor(randomVal(rem * 0.08, rem * 0.04))
    rem -= fives * 5
    results.fives = fives * 5
    results.pens = rem
    return results
}

function generator() {
    const totalCash = cashInput.value
    const results = generateChange(totalCash)
    for (let span of resultSpan) {
        span.innerText = "    " + results[span.id]
    }
}


