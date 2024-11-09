function hy() {
    var number = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Please enter a number.";
    } else {
        const isEven = number % 2 === 0;
        result.textContent = isEven ? "The number is even." : "The number is odd.";
    }
}