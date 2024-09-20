
// const myName = "ashely"

// console.log(myName)
//initial numbers add up to 50
const n1 = 13;
const n2 = 12;
const n3 = 11;
const n4 = 14;

//arithmetic operators and comparison
const isSum50 = (n1 + n2 + n3 + n4);
console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)