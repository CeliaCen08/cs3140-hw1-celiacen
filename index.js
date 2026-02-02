// Homework 1: JavaScript Fundamentals
// Name: Celia Cen
// Date: 2/2/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    // Hint: Use a for loop or arr.reduce()
}

function average(arr) {
    return sum(arr) / arr.length;
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
    return Math.max(...arr);
}
// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
    return str.charAt(0).toUpperCase() + str.slice(1);
  // "hello" -> "Hello"

}

function reverse(str) {
  // TODO: Return the string reversed
    return str.split("").reverse().join("");
  // "hello" -> "olleh"
  // Hint: str.split("").reverse().join("")
}

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

// ============ PART 3: OBJECT ============
const student = {
  name: "Celia Cen",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    return average(this.grades);
  },
  
  isHonorRoll: function() {
    // TODO: Return true if average > 85
    if (average(this.grades) > 85) {
        return true;
    } else {
        return false;
    }
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());


// TEST CODE OUTPUT //
//=== Part 1: Arrays ===
// Numbers: [
//     10,  5, 8, 12, 3,
//      7, 15, 2,  9, 6
//   ]
//   Sum: 77
//   Average: 7.7
//   Min: 2
//   Max: 15
  
//   === Part 2: Strings ===
//   capitalize('hello'): Hello
//   reverse('hello'): olleh
//   countVowels('hello'): 2
  
//   === Part 3: Object ===
//   Student: Celia Cen
//   Grades: [ 85, 92, 78, 90, 88 ]
//   Average: 86.6
//   Honor Roll: true
  
//   [Done] exited with code=0 in 0.166 seconds 