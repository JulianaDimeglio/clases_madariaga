var arreglo = [1, 2, 3, 4, 5];
recorrerArr1(arreglo);
function recorrerArr1(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}
