var digit = prompt("Enter any digit");

digit = digit.toLowerCase();

switch (digit) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel");
        break;

    default:
        console.log("Consonant");
}