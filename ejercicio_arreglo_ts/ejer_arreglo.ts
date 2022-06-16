let array: string[] = ["tree", "flower", "light"];
let word: string = "flower";
let indexInsert: number = 2;
let wordInsert: string = "paper";
let wordDelete: string = "light";
let wordReplace: string = "water";
let indexReplace: number = 0;
update();

function insertItem() {
    let index = 0;
    while (index < array.length && index != indexInsert) {
        index++;
    }
    array.splice(index, 0, wordInsert);
    console.log(array);
}

function deleteItem() {
    let index = 0;
    while (index < array.length && array[index] != wordDelete) {
        index++;
    }
    array.splice(index, 1);
    console.log(array);

}

function search() {
    let index = 0;
    while (index < array.length && array[index] != word) {
        index++;
    }
    if (index == array.length && array[index] != word) {
        console.log("The word is not inside the");

    } else {
        console.log("The word is in the position " + index + " of the array");

    }
}

function update() {
    array.splice(indexReplace, 1, wordReplace)
    console.log(array);
}