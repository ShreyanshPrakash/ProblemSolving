const subString = (string) => {
  let hash = {};
  let sub = "";
  let track = "";

  for (let char of string) {
    if (!hash[char]) {
      hash[char] = char;
      track = track + char;
    } else {
      if (track.length > sub.length) {
        sub = track;
      }

      track = "";
      hash = {};
      hash[char] = char;
      track = track + char;
    }
  }

  return sub;
};

const string = "abcabcbb";

const result = subString(string);
console.log(result);
