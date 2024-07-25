const bcrypt = require('bcrypt');

// function hashMyPassword(password) {
//     const saltRounds = 10;
//     return new Promise((resolve, reject) => {
//         bcrypt.hash(password, saltRounds, (err, hash) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(hash);
//             }
//         });
//     });
// }

// module.exports = { hashMyPassword };


// function hashMyPasswordSync(password, callback) {
//     const saltRounds = 10; 
//     bcrypt.hash(password, saltRounds, (err, hash) => {
//         if (err) {
//             callback(err);
//         } else {
//             callback(null, hash);
//         }
//     });
// }

// module.exports = { hashMyPasswordSync };




