// function minTime(n, m, [elevatorSpeed, topen, tclose, johnSpeed]) {

//     return (Math.abs(m - n) * Math.min(elevatorSpeed, johnSpeed) + (m - n !== 0) ? 2 * topen + tclose : 0);
// } //doesn't work

function minTime(n, m, [elevatorSpeed, topen, tclose, johnSpeed]) {
  if (m > n) {
    // option1: walk to m floor, take elevator from there
    // option2: walk from n to 0
    // wait for elevator to come down to n & take it from n=>0
    return Math.min(
      (m - n) * johnSpeed + m * elevatorSpeed + 2 * topen + tclose,
      n * johnSpeed,
      m * elevatorSpeed + 2 * topen + tclose
    );
  } else if (m === n) {
    //option1: take elevator
    // option2: on foot
    return Math.min(n * elevatorSpeed + 2 * topen + tclose, n * johnSpeed);
  } else {
    // option1: walk down to m and take elev from m=>0
    // option2: walk from n=>0
    // option3: elev from m=>n && n=>0
    return Math.min(
      (n - m) * johnSpeed + m * elevatorSpeed + 2 * topen + tclose,
      n * johnSpeed,
      (2 * n - m) * johnSpeed + m * elevatorSpeed + 2 * topen + tclose
    );
  }
}

console.log(minTime(4, 5, [1, 2, 3, 10])); //12
console.log(minTime(0, 5, [1, 2, 3, 10])); //0
console.log(minTime(4, 3, [2, 3, 4, 5])); //20
console.log(minTime(7, 6, [3, 1, 1, 4])); //25
