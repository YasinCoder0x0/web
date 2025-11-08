let a = "A";
let b = "B";
let c = "C";
let result = "";

/*#### Determine result based on if else conditions ####*/
if (result === "A") {
  console.log("This is A");
} else if (result === "B") {
  console.log("This is B");
} else if (result === "C") {
  console.log("This is C");
} else {
  console.log("Unknown result");
}

/*#### Nested if else statement ####*/
if (a === "A") {
  if (b === "B") {
    if (c === "C") {
      console.log("All conditions met: A, B, and C");
    }
  }
} else {
  console.log("Conditions not met");
}

/*#### The Conditional (Ternary) Operator ####*/
let score = 85;
let status = score >= 50 ? "Pass" : "Fail";
console.log("Status:", status);

/*#### Switch case statement ####*/
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Unknown grade");
}


/*#### The For Loop ####*/
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

/*#### The While Loop ####*/
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

/*#### The Do...While Loop ####*/
let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 5);

/*#### The Break Statement ####*/
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log("Number before break:", i);
}