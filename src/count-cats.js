module.exports = function countCats(matrix) {
  let count = 0;
    for (let i in matrix){
      for (let j in matrix[i]){
        if (j == "^^"){
          count++;
        }
      }
    }
    return count;
};
