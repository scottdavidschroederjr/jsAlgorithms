function telephoneCheck(str) {
  //get numbers out of string
  str = str.split(" ").join("")
  var test = []
  for (var i = 0; i < str.length; i++) {
    if (isNaN(str[i]) == false & str[i] != " ") {
      test.push(str[i])
      } 
    else if (str[i] == " " | str[i] == "(" | str[i] == ")" | str[i] == "-") {
      }
    else {
      return false
    }
  }

  //test proper lengths
  if (test.length == 10 | test.length == 11) {

  //test 11s to make sure they start with one
    if (test.length == 11) {
      if (str[0] != 1) {
          return false
      }
    }
  //test if () are in right place
  if (str.includes("(") == true | str.includes(")") == true) {
    if (test.length == 10) {
      if (str[0] != "(" | str[4] != ")") {
        return false
        }
      }
    if (test.length == 11) {
      if (str[1] != "(" | str[5] != ")") {
        return false
        }
      }
    }
  //test if last - is in the right place
  if (str.includes("-") == true) {
      if (str[str.length - 5] != "-") {
        return false
      }
    }
  //test if string contains 

  //end of the conditions gauntlet, can only get here if passes everything else  
  return true 
  }

  //if doesn't contain 10 or 11 numbers, instantly flagged as false
  else {
  return false
    }

}
telephoneCheck("1 555-555-5555")
