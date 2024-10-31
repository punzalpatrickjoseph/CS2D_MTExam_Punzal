let colors = [];

// Prompt the user to input three initial colors
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color ${i + 1}:`);
    colors.push(color);
}

// Log the initial array
console.log("Initial colors:", colors);
let newColor = prompt("Enter a new color to add:");
colors.push(newColor);
console.log("Updated colors:", colors);
