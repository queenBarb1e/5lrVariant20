var rows = parseInt(prompt('Введите количество строк:'));
var cols = parseInt(prompt('Введите количество столбцов:'));

var matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = parseInt(prompt('Введите элемент матрицы (' + (i + 1) + ',' + (j + 1) + '):'));
    }
}

console.log('Матрица:');
for (let i = 0; i < rows; i++) {
    console.log('[' + matrix[i].join(', ') + ']');
}

var maxInCols = [];
for (var j = 0; j < cols; j++) {
    var max = matrix[0][j];
    for (var i = 1; i < rows; i++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
    maxInCols[j] = max;
}
var minOfMax = maxInCols[0];
for (var i = 1; i < maxInCols.length; i++) {
    if (maxInCols[i] < minOfMax) {
        minOfMax = maxInCols[i];
    }
}
console.log('Максимальные элементы столбцов: '+ maxInCols);
console.log('Минимальный из максимальных элементов столбцов:', minOfMax);
