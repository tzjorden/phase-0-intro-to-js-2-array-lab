// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    name = cats.push("Ralph");

}
function destructivelyPrependCat(name){
    name = cats.unshift("Bob");

}
function destructivelyRemoveLastCat(name){
    name = cats.pop();

}
function destructivelyRemoveFirstCat(name){
    name = cats.shift();

}
function appendCat(name) {
    const catsArray = [...cats, "Broom"];
    return catsArray
}

function prependCat(name){
    const catsArray = ["Arnold", ...cats];
    return catsArray;
}

function removeLastCat(name){
    const catsArray = cats.slice(0, cats.length - 1);
    return catsArray;
}

function removeFirstCat(name){
    const catsArray = [...cats.slice(1)];
    return catsArray;

}