// dictionaries for number conversion
    var dict={
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, 
        L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, 
        U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }
    var dictNum={
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I", 10: "J", 11: "K", 
        12: "L", 13: "M", 14: "N", 15: "O", 16: "P", 17: "Q", 18: "R", 19: "S", 20: "T", 
        21: "U", 22: "V", 23: "W", 24: "X", 25: "Y", 26: "Z"
    }

//tests if something is a letter
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

//main function for code converting

function rot13(str) {
  var output = []
  var rotValue = 13
  var converted = 0

  //turn letters into numbers
  for (var i = 0; i < str.length; i++) {
    if (isLetter(str[i]) == false | isLetter(str[i]) == null) {
      output[i] = str[i]
    }
    else {
    converted = dict[str[i]]
    output[i] = converted
    }   
  }
  //turns number into shifted letter
  for (var j = 0; j < output.length; j++) {
    if (isNaN(output[j]) == false & output[j] != " ") {
        output[j] = output[j] + rotValue
        while (output[j] > 26) {
        output[j] = output[j] - 26
        }
        output[j] = dictNum[output[j]]
    }
    }
  //turns array to string and returns  
  output = output.join("")
  return output

  }

