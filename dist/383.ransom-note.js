"use strict";
`Given two strings ransomNote and magazine, return true if ransomNote can be constructed by
 using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.`;
function canConstruct(ransomNote, magazine) {
    let letters = new Map();
    for (let letter of magazine) {
        if (!letters.has(letter))
            letters.set(letter, 1);
        else
            letters.set(letter, letters.get(letter) + 1);
    }
    for (let letter of ransomNote) {
        if (!letters.has(letter) || letters.get(letter) === 0)
            return false;
        else
            letters.set(letter, letters.get(letter) - 1);
    }
    return true;
}
function realBadCanConstruct(ransomNote, magazine) {
    // O(n^2)
    const note = [...ransomNote], mag = [...magazine];
    for (let i = 0; i < note.length; i++) {
        if (mag.indexOf(note[i]) === -1) {
            return false;
        }
        else {
            delete mag[i];
        }
    }
    return true;
}
