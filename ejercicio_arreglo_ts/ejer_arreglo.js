var array = ["tree", "flower", "light"];
var word = "flower";
var indexInsert = 2;
var wordInsert = "paper";
var wordDelete = "light";
var wordReplace = "water";
var indexReplace = 0;
update();
function insertItem() {
    var index = 0;
    while (index < array.length && index != indexInsert) {
        index++;
    }
    array.splice(index, 0, wordInsert);
    console.log(array);
}
function deleteItem() {
    var index = 0;
    while (index < array.length && array[index] != wordDelete) {
        index++;
    }
    array.splice(index, 1);
    console.log(array);
}
function search() {
    var index = 0;
    while (index < array.length && array[index] != word) {
        index++;
    }
    if (index == array.length && array[index] != word) {
        console.log("The word is not inside the");
    }
    else {
        console.log("The word is in the position " + index + " of the array");
    }
}
function update() {
    array.splice(indexReplace, 1, wordReplace);
    console.log(array);
}
