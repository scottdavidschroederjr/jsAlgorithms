function checkCashRegister(price, cash, cid) {
 //creates the register variable
  var register = {
    status: "OPEN",
    change: cid
  }
var totalChange = cash - price
var output = [["PENNY", 0.00], ["NICKEL", 0.00], ["DIME", 0.00], ["QUARTER", 0.00], ["ONE", 0.00], ["FIVE", 0.00], ["TEN", 0.00], ["TWENTY", 0.00], ["ONE HUNDRED", 0.00]]
 
 
//totals value in drawer and checks if there isn't enough money or is exact change
  var valueInDrawer = 0
  for (var i=0; i < cid.length; i++) {
    valueInDrawer = valueInDrawer + cid[i][1]
  }
 
  if (valueInDrawer < totalChange) {
    register.status = "INSUFFICIENT_FUNDS"
    register.change = []
    return register
  }
 
  if (valueInDrawer == totalChange) {
    register.status = "CLOSED"
    return register
  }
 
//takes change out of register
while (totalChange >= 0) {
  if (totalChange >= 100 & register.change[8][1] > 0) {
    register.change[8][1] = register.change[8][1] - 100
    totalChange = totalChange - 100
    output[8][1] = output[8][1] + 100
    continue
  }
  if (totalChange >= 20 & register.change[7][1] > 0) {
    register.change[7][1] = register.change[7][1] - 20
    totalChange = totalChange - 20.00
    output[7][1] = output[7][1] + 20.00
    continue
  }
  if (totalChange >= 10 & register.change[6][1] > 0) {
    register.change[6][1] = register.change[6][1] - 10
    totalChange = totalChange - 10
    output[6][1] = output[6][1] + 10
    continue
  }
 
  if (totalChange >= 5 & register.change[5][1] > 0) {
    register.change[5][1] = register.change[5][1] - 5
    totalChange = totalChange - 5
    output[5][1] = output[5][1] + 5
    continue
  }
 
  if (totalChange >= 1 & register.change[4][1] > 0) {
    register.change[4][1] = register.change[4][1] - 1
    totalChange = totalChange - 1
    output[4][1] = output[4][1] + 1
    continue
  }
 
  if (totalChange >= 0.25 & register.change[3][1] > 0) {
    register.change[3][1] = register.change[3][1] - 0.25
    totalChange = totalChange - 0.25
    output[3][1] = output[3][1] + 0.25
    continue
  }
 
  if (totalChange >= 0.10 & register.change[2][1] > 0) {
    register.change[2][1] = register.change[2][1] - 0.10
    totalChange = totalChange - 0.10
    output[2][1] = output[2][1] + 0.10
    continue
  }
  if (totalChange >= 0.05 & register.change[1][1] > 0) {
    register.change[1][1] = register.change[1][1] - 0.05
    totalChange = totalChange - 0.05
    output[1][1] = output[1][1] + 0.05
    continue
  }
  totalChange = totalChange.toFixed(2);
  if (totalChange >= 0.01 & register.change[0][1] > 0) {
    register.change[0][1] = register.change[0][1] - 0.01
    totalChange = totalChange - 0.01
    output[0][1] = output[0][1] + 0.01
    continue
  }
  
  if (totalChange == 0) {
    var justChange = []
    for (var z = 0; z < output.length; z++){
      if (output[z][1] > 0) {
        justChange.unshift(output[z])
      }
    }
    register.change = justChange
    return register
    
  }
  else {
    register.status = "INSUFFICIENT_FUNDS"
    register.change = []
    return register
  }
}
 
}
