// Collaborated on by @spence914, @Faelixx, @aeedwko

const transpose = (matrix) => {
  const result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result.push([matrix[i][j]]);
      } else {
        result[j].push(matrix[i][j]);
      }
    }
  }
  return result;
};

const makeDiagArr = function(letters) {
  let diagonalArr = [];
  for (let i = 0; i < letters.length; i++) {
    let diagonalStr = "";
    let x = i;
    let y = 0;
    while (x < letters.length) {
      if (letters[x][y]) {
        diagonalStr += letters[x][y];
      }
      x++;
      y++;
    }

    diagonalArr.push(diagonalStr);
  }
    
  for (let j = 1; j < letters[0].length; j++) {
    let diagonalStr = "";
    let x = 0;
    let y = j;
    // start building the diagonal string
    while (y < letters[0].length) {
      if (letters[x][y]) {
        diagonalStr += letters[x][y];
      }
      x++;
      y++;
    }

    diagonalArr.push(diagonalStr);
  }
  return diagonalArr;
};
// starting from TOP RIGHT
const makeDiagArrReverse = function(letters) {
  let diagonalArr = [];
  for (let i = 0; i < letters.length; i++) {
    let diagonalStr = "";
    let x = i; // 9
    let y = letters[0].length - 1; // 8
    while (x <= letters.length - 1) {
      if (letters[x][y]) {
        diagonalStr += letters[x][y];
      }
      x++;
      y--;
    }

    diagonalArr.push(diagonalStr);
  }
    
  for (let j = 1; j < letters.length; j++) {
    let diagonalStr = "";
    let x = letters.length - 1;
    let y = j;
    // start building the diagonal string
    while (y < letters.length) {
      if (letters[x][y]) {
        diagonalStr += letters[x][y];
      }
      x--;
      y++;
    }

    diagonalArr.push(diagonalStr);
  }
  return diagonalArr;
};

const wordSearch = (letters, word) => {
  const backwardsWord = word.split('').reverse().join('');


  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(backwardsWord)) {
      return true;
    }
  }

  const verticalArray = transpose(letters);
  const verticalJoin = verticalArray.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word) || l.includes(backwardsWord)) {
      return true;
    }
  }


  let diagonalArr = makeDiagArr(letters);
  for (let d of diagonalArr) {
    if (d.includes(word)) {
      return true;
    }
  }


  for (let dR of diagonalArr) {
    if (dR.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  let diagArrReverse =  makeDiagArrReverse(letters);
  for (let d of diagArrReverse) {
    if (d.includes(word)) {
      return true;
    }
  }

  for (let dR of diagArrReverse) {
    if (dR.split("").reverse().join("").includes(word)) {
      return true;
    }
  }

  return false;
};

const arr = [
  ['W', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'], // W is at arr[0][0], at each iteration, call diagonal(arr) we can check if arr[i+1][j+1] !== undefined
  ['S', 'O', 'F', 'N', 'F', 'E', 'L', 'D'], // S is at arr[1][0]
  ['Y', 'F', 'R', 'A', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'D', 'D', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'], // E is at arr[8][0]
];

wordSearch(arr, "WORD");
module.exports = wordSearch;