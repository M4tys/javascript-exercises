const palindromes = function (text) {
    var punctuation = /[\.,?! ]/g;
    newText = text
        .replace(punctuation, "")
        .toLowerCase();

    if(newText === newText.split("").reverse().join("")){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
