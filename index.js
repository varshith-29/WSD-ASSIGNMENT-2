// Function to count vowels and consonants in a string
function countVowelsAndConsonants() {
    const inputField = document.getElementById('inputString');
    const vowelDisplay = document.getElementById('vowelCount');
    const consonantDisplay = document.getElementById('consonantCount');

    // Add class to the input field
    inputField.classList.add("input-text-style");

    const inputString = inputField.value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-z]/i)) {
            consonantCount++;
        }
    }

    vowelDisplay.textContent = `Vowels: ${vowelCount}`;
    consonantDisplay.textContent = `Consonants: ${consonantCount}`;

    // Add classes to display elements
    vowelDisplay.classList.add("vowel-count-style");
    consonantDisplay.classList.add("consonant-count-style");
}

// Function to check if a string is a palindrome
function checkPalindrome() {
    let inputField = document.getElementById("inputPalindrome");
    let resultDisplay = document.getElementById("palindromeResult");

    // Add class to the input field
    inputField.classList.add("input-style");

    let num1 = inputField.value;
    if (num1.trim() === '') {
        resultDisplay.textContent = 'Please enter a valid number.';
        // Optionally, adjust the class for an error or initial state
        resultDisplay.className = 'result-failure';
        return;
    }
    let num2 = 0;
    let num3 = num1;

    while (num1 > 0) {
        const x = num1 % 10;
        num2 = num2 * 10 + x;
        num1 = Math.floor(num1 / 10);
    }

    if (num3 == num2) {
        resultDisplay.textContent = "Given number is a palindrome";
        // Add success class
        resultDisplay.className = 'result-success';
    } else {
        resultDisplay.textContent = "Given number is not a palindrome";
        // Add failure class
        resultDisplay.className = 'result-failure';
    }
}

// Function to calculate the total amount including tip
function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        document.getElementById('output').textContent = 'Please enter valid numbers.';
        return;
    }

    var tipAmount = (subtotal * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (subtotal + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('output').textContent = `Tip: $${tipAmount} | Total Amount: $${totalAmount}`;
}
