// remove first and last word from string
// in this case: weekday and time on mobile
export function RemoveWords(word) {
  // find index of first word
  const indexOfFirstSpace = word.indexOf(" ");
  // create new string
  let newString = word.substring(indexOfFirstSpace + 1);
  // find index of last word
  const lastIndexOfSpace = newString.lastIndexOf(" ");
  // return the new string
  return newString.substring(0, lastIndexOfSpace);
}

// in this case: Date on Enquire-form
export function RemoveLastWord(word) {
  // find index of last word
  const lastIndexOfSpace = word.lastIndexOf(" ");
  // return the new string
  return word.substring(0, lastIndexOfSpace);
}
// in this case: Time on Add-form
export function RemoveFirstWord(word) {
  const indexOfFirstSpace = word.indexOf(" ");
  let newString = word.substring(indexOfFirstSpace + 1);
  return newString;
}
