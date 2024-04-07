function Anagram(str1, str2){
    let cleanstr1 = str1.trim().toLowerCase();
    let cleanstr2 = str1.trim().toLowerCase();

    let sortedstr1 = cleanstr1.split('').sort().join('');
    let sortedstr2 = cleanstr1.split('').sort().join('');

    return sortedstr1 === sortedstr2;
}

console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true
console.log(isAnagram("Hello", "World")); // false
console.log(isAnagram("Anagram", "Nag a Ram")); // true