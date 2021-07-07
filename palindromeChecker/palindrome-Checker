function palindrome(str) {
    var strArray = []
    var reverseArray = []

    //series of regexes to normalize input
    str = str.toLowerCase()
    str = str.replace(/\s/g, "");
    str = str.replace(/_/g, "");
    str = str.replace(/-/g, "");
    str = str.replace(/,/g, "");
    str = str.replace(/[()]/g, "");
    str = str.replace(/^[.\s]+|[.\s]/g, "");

    //turns string into array
    strArray = str.split("")

    //adds reverse to array
    for (var i = 0; i < strArray.length; i++){
        reverseArray.unshift(strArray[i])
    }

    //checks if matches reverse array for each
    for (var j = 0; j < strArray.length; j++){
        
        if (strArray[j] === reverseArray[j]) {
            
        }
        else {
            return false
        }
    }
    return true
  
}

palindrome("0_0 (: /-\ :) 0-0");
