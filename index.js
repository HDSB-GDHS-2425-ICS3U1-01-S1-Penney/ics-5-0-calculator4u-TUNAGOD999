console.log("Calculator");
let op = prompt("What operation are you going to use? +, -, x, /, squared, square root, working with triangles, unit converter");



if (op == "unit converter") {
  let amount = parseFloat(prompt("What is the amount you would like to convert"))
  let unitamount = prompt("what is your amount in? mm, cm, m, km?");
  let unitinto = prompt("what unit do you want it converted into? mm, cm, m, km")
  
  if (unitamount == "km" && unitinto == "m") {
    console.log(amount * 1000)
    
  } else  if (unitamount == "km"&& unitinto == "cm") {
    console.log(amount * 100000)
  
  } else  if (unitamount == "km" && unitinto == "mm") {
    console.log(amount * 1000000)
  }
  if (unitamount == "m" && unitinto == "km") {
    
    console.log(amount / 1000)
  } else   if (unitamount == "m" && unitinto == "cm") {
    
    console.log(amount * 100)
  } else   if (unitamount == "m" && unitinto == "mm") {
    
    console.log(amount * 1000)
  } 
 if (unitamount == "cm" && unitinto == "km") {
    
    console.log(amount / 100000)
  } else   if (unitamount == "cm" && unitinto == "m") {
    
    console.log(amount / 100)
  } else   if (unitamount == "cm" && unitinto == "mm") {
    
    console.log(amount * 10)
  } 
  if (unitamount == "mm" && unitinto == "km") {
    
    console.log(amount / 1000000)
  } else   if (unitamount == "mm" && unitinto == "m") {
    
    console.log(amount / 1000)
  } else   if (unitamount == "mm" && unitinto == "cm") {
    
    console.log(amount / 10)
  } 
  
  
} else if (op == "working with triangles") {
  let triFunction = prompt("Would you like to use SIN, COS, or TAN to find the angle?");
  if (triFunction == "SIN") {
    let O = parseFloat(prompt("what is the length of the opposite side of the triangle"))
    
    let H = parseFloat(prompt("what is the length of the hypotenuse of the triangle"))
  
    const angle = Math.asin(O/H);
    const degree = angle * (180 / Math.PI);
    console.log(degree)
    
  } else if (triFunction == "COS") {
    
     let A = parseFloat(prompt("what is the length of the opposite side of the triangle"))
    
    let H = parseFloat(prompt("what is the length of the hypotenuse of the triangle"))
    
    const angle = Math.asin(A/H);
    const degree = angle * (180 / Math.PI);
    console.log(degree)
    
  } else if (triFunction == "TAN") {
    
      let O = parseFloat(prompt("what is the length of the opposite side of the triangle"))
    
    let A = parseFloat(prompt("what is the length of the hypotenuse of the triangle"))
    
     const angle = Math.asin(O/A);
    const degree = angle * (180 / Math.PI);
    console.log(degree)
    
  } else {
    console.log("Invalid triangle function");
  }
} else if (op == "squared") {
  let numSquared = parseFloat(prompt("What number do you want squared?"));
  console.log(numSquared * numSquared);
} else if (op == "square root") {
  let numSquareRoot = parseFloat(
    prompt("What number do you want square rooted?")
  );
  console.log(Math.sqrt(numSquareRoot));
} else {
  let num1 = parseFloat(prompt("What is your first number"));
  let num2 = parseFloat(prompt("What is your second number"));
  if (op == "+") {
    console.log(num1 + num2);
  } else if (op == "-") {
    console.log(num1 - num2);
  } else if (op == "x") {
    console.log(num1 * num2);
  } else if (op == "/") {
    console.log(num1 / num2);
  } else {
    console.log("Invalid operation");
  }
}

