import PropTypes from "prop-types";

// Weekday and time on mobile
// removes both first and last word
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

// Date on Enquire-form
export function RemoveLastWord(word) {
  // find index of last word
  const lastIndexOfSpace = word.lastIndexOf(" ");
  // return the new string
  return word.substring(0, lastIndexOfSpace);
}

// Time on Add-form
export function RemoveFirstWord(word) {
  // find index of first word
  const indexOfFirstSpace = word.indexOf(" ");
  let newString = word.substring(indexOfFirstSpace + 1);
  // return the new string
  return newString;
}

RemoveWords.propTypes = {
  word: PropTypes.string.isRequired,
};

RemoveLastWord.propTypes = {
  word: PropTypes.string.isRequired,
};

RemoveFirstWord.propTypes = {
  word: PropTypes.string.isRequired,
};
