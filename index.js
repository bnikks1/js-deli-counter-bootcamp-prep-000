var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);

    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."

    return katzDeliLine
}

function nowServing (katzDeliLine) {
      if (katzDeliLine.length > 0) {
        return "Currently serving " + katzDeliLine.shift() + "."; 

  } else {
      return "There is nobody waiting to be served!"
}
    return katzDeliLine
}

function currentLine (katzDeliLine) {
    if (katzDeliLine.length > 0) {
      return "The line is currently: 1. " + katzDeliLine [0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];

} else { return "The line is currently empty."
}
}