function convertToRoman(num) {
 var results = ""

  while (num > 0){
    if (num >= 1000) {
      results = results + "M"
      num = num - 1000
    }
    if (num >= 900 & num < 1000) {
      results = results + "CM"
      num = num - 900
    }

    if (num >= 500 & num < 900) {
      results = results + "D"
      num = num - 500
    }

    if (num == 400 & num < 500) {
      results = results + "CD"
      num = num - 400
    }
    if (num >= 100 & num < 400) {
      results = results + "C"
      num = num - 100
    }

    if (num >= 90 & num < 100) {
      results = results + "XC"
      num = num - 90
    }
    if (num >= 50 & num < 90) {
      results = results + "L"
      num = num - 50
    }

    if (num >= 40 & num < 50) {
      results = results + "XL"
      num = num - 40
    }
    if (num >= 10 & num < 40) {
      results = results + "X"
      num = num - 10
    }

    if (num == 9) {
      results = results + "IX"
      num = num - 9
    }
    if (num >= 5 & num < 9) {
      results = results + "V"
      num = num - 5
    }

    if (num == 4 & num < 5) {
      results = results + "IV"
      num = num - 4
    }
    if (num < 4 & num > 0) {
      results = results + "I"
      num = num - 1
      
    } 
  }
  return results
}
