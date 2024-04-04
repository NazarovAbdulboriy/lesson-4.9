function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

const words = ["non", "olma", "aziza", "gul", "mashina", ""];

const palindromes = [];
const nonPalindromes = [];

words.forEach(word => {
    if (isPalindrome(word)) {
        palindromes.push(word);
    } else {
        nonPalindromes.push(word);
    }
});


console.log("Palindrom bo'lgan so'zlar:", palindromes);
console.log("Palindrom bo'lmagan so'zlar:", nonPalindromes);
