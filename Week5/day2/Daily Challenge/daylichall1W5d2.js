const sentence = "The movie is not that bad, I like it";

const wordNotIndex = sentence.indexOf("not");
const wordBadIndex = sentence.indexOf("bad");

if (wordBadIndex > wordNotIndex && wordNotIndex !== -1 && wordBadIndex !== -1) {
    const lengthToReplace = wordBadIndex + 3 - wordNotIndex;
    const newSentence = sentence.substring(0, wordNotIndex) + "good" + sentence.substring(wordNotIndex + lengthToReplace);
    console.log(newSentence);
} else {
    console.log(sentence);
}


