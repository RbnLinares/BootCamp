import {greet} from "./greeting.js"
// import {
//     displayColorMessage,
//     displayErrorMessage,
// };

import { read_file } from "./read-file.js";

// console.log(greet('King'));

try {
    let data = await read_file('./files/file-data.txt');
    console.log(data);
} catch (error) {
    console.log(error);
};