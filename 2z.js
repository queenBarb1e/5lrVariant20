var order = parseInt(prompt('Введите порядок квадратной матрицы: '));
console.log('Введите порядок квадратной матрицы: ' + order);

var matrix = [];
for (let i = 0; i < order; i++) {
    matrix[i] = [];
    for (let j = 0; j < order; j++) {
        matrix[i][j] = parseInt(prompt('Введите элемент матрицы (' + (i + 1) + ',' + (j + 1) + '):'));
    }
}

console.log('Изначальная матрица:');
for (let i = 0; i < order; i++) {
    console.log('[' + matrix[i].join(', ') + ']');
}

for (let i = 0; i < order; i++) {
    for (let j = 0; j < order; j++) {
        if (i + j >= order - 1) {
            matrix[i][j] = 0; 
        }
    }
}

console.log('Матрица после обнуления элементов на побочной диагонали и ниже неё:');
for (let i = 0; i < order; i++) {
    console.log('[' + matrix[i].join(', ') + ']');
}
