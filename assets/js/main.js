
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

// ---------- Aufgabe 1_1 ----------
function sortierung() {
    console.log(languages.sort());
}

sortierung();

// ---------- Aufgabe 1_2 ----------
function sortierung2() {
    console.log(languages.sort().reverse());
};

sortierung2();


// ---------- Aufgabe 1_13 ----------
let meinText1 = ['Hello', 'World'];
let meinText2 = ['Anass', 'Elaine', 'Eric', 'Georg'];
let meinText3 = ['Superman', 'Wonderwoman', 'Hulk', 'Batman', 'Spiderman'];

let join1, join2, join3;

console.log(join1 = meinText1.join());
console.log(join1 = meinText1.join(""));
console.log(join1 = meinText1.join(" "));
console.log(join1 = meinText1.join("+"));

console.log(join2 = meinText2.join());
console.log(join2 = meinText2.join(""));
console.log(join2 = meinText2.join(" "));
console.log(join2 = meinText2.join("+"));

console.log(join3 = meinText3.join());
console.log(join3 = meinText3.join(""));
console.log(join3 = meinText3.join(" "));
console.log(join3 = meinText3.join("+"));

// ---------- Aufgabe 2_2 ----------
let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(numArray2.sort(function (a, b) { return a - b }));

// ---------- Aufgabe 3_1 ----------
function reverseWords(valueToReverse) {

    if (Array.isArray(valueToReverse) == true) {
        valueToReverse.forEach(e => {
            console.log(e.split("").reverse().join(""));
        });
    } else {
        console.log(valueToReverse.split("").reverse().join(""));
    }
}

reverseWords('Ella');
reverseWords('Ella mag alle Bohnen');
reverseWords('nenhoB ella gam allE');
reverseWords(['Sergio', 'Hannah', 'Regallager', 'Reliefpfeiler', 'Rentner'])

