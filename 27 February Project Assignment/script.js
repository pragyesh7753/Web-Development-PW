const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("displayValue");

decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    }
    else {
        alert("Negative value not allowed")
    }
}
);
incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 100) {
        alert("100+ value is not allowed")
    }
    else {
        displayValue.innerText = value + 1;
    }
}
);
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
}
);