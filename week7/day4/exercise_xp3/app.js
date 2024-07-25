const { readFile, writeFile } = require('./fileManager');

async function processFiles() {
 try {
    const content = await readFile('Hello World.txt');
    console.log('Content of Hello World.txt:', content);

    await writeFile('Bye World.txt', 'Writing to the file');
    console.log('Successfully wrote to Bye World.txt');
 } catch (error) {
    console.error('An error occurred:', error);
 }
}

processFiles();
