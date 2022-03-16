// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
     cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCatAppend = cats.slice();
     newCatAppend.push(name);
     return newCatAppend;
}
function prependCat(name) {
    const newCatPrepend = cats.slice();
     newCatPrepend.unshift(name);
     return newCatPrepend;

}
function removeLastCat() {
    const newRemoveLastCat = cats.slice();
    newRemoveLastCat.pop();
    return newRemoveLastCat;
}
function removeFirstCat() {
    const newRemoveFirstCat = cats.slice();
    newRemoveFirstCat.shift();
    return newRemoveFirstCat;

}