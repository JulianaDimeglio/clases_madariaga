var arreglo: number[] = [1, 2, 3, 4, 5];

recorrerArr(arreglo);

function recorrerArr(arr: number[]) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total);
}
