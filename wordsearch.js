const wordSearch = (letters, word) => {
    let transposedLetters = transpose(letters);
    diagonal(letters)
    if (search(letters, word) || search(transposedLetters,word)) {
      return true;
    }
    return false;
  //vertical search
  };
  const search = (letters, word) => {
    let result = false;
    //horizontal search
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word) || l.split("").reverse().join("").includes(word)) {
        result = true;
        break;
      }
    }
    return result;
  };

  const transpose = function(matrix) {
    let rowsLength = matrix[0].length;
    let colsLength = matrix.length;
    let newArr1 = [];
    for (let i = 0; i < rowsLength; i++) {
      let temp = [];
      for (let j = 0; j < colsLength; j++) {
        temp.push(matrix[j][i]);
      }
      newArr1.push(temp);
    }
    return newArr1;
  };
  
//   const diagonal = function(matrix) {
//     let newArr1 = [];
//     let rowsLength = matrix[0].length;
//     let colsLength = matrix.length;
//     for (let i = 0; i < (rowsLength); i++) {
//       let temp = [];
//       let x = i;
//       for (let j = 0; j <= i; j++) {
//         temp.push(matrix[x--][j]);
//       }
//       console.log(temp)
//       newArr1.push(temp);
//     }
//     for (let i = 7; i >= 0; i--) {
//         let temp = [];
//         let y = i;
//         for (let j = i; j<=i; j++) {
//           let x = j;
//           temp.push(matrix[x++][j]);
//         }
//         console.log(temp)
//         newArr1.push(temp);
//       }
//     return newArr1;
//   };
  
//   diagonal(result)


  module.exports = wordSearch;