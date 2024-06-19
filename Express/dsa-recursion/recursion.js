/** product: calculate the product of an array of numbers. */
function product(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  return words.reduce((maxLen, word) => Math.max(maxLen, word.length), 0);
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  return str.split('').filter((_, idx) => idx % 2 === 0).join('');
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
  return arr.indexOf(val);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  
  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        strings.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        gather(obj[key]);
      }
    }
  }
  
  gather(obj);
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
