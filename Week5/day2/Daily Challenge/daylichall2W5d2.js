for (let i = 1; i <= 7; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log(); 
}
