function zimeEgli(height) {
    for (let i = 0; i < height; i++) {
        // Create the spaces before the stars
        const spaces = ' '.repeat(height - i - 1);
        // Create the stars
        const stars = '*'.repeat(2 * i + 1);
        // Print the spaces followed by the stars
        console.log(spaces + stars);
    }
}

// For running the function in a browser environment
const height = parseInt(prompt("Enter the height of the tree"));
zimeEgli(height);