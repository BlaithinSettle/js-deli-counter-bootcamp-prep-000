// first function  takeANumber

var count = 0;

function takeANumber(theDeliLine) {
  count++
  theDeliLine.push(count)
  return `Welcome. You are number ${count}`
}

let line = []
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(line)

//now serving function

function nowServing(theDeliLine) {
  if (theDeliLine.length > 0) {
    var firstPerson = theDeliLine.shift();
    return "Currently serving " + firstPerson + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

//current line 

function currentLine(theDeliLine){
    if (theDeliLine.length>0){
        var output="The line is currently:";
        for (var i=0; i<theDeliLine.length; i++){
            output += ` ${i+1}. ${theDeliLine[i]}`;
            if(i < (theDeliLine.length - 1)) {
              output += ','
            }
        } return output;
    } else {
        return "The line is currently empty.";
    }
}

