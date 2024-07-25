const { hashMyPasswordSync } = require('./hash.js'); 

// async function hashAndLogPassword() {
//     const password = 'mySecurePassword123';
//     try {
//         const hashedPassword = await hashMyPassword(password);
//         console.log('Hashed Password:', hashedPassword);
//     } catch (error) {
//         console.error('Error hashing password:', error);
//     }
// }

// hashAndLogPassword();

// function hashAndLogPasswordSync() {
//     const password = 'mySecurePassword123';
//     hashMyPasswordSync(password, (err, hashedPassword) => {
//         if (err) {
//             console.error('Error hashing password:', err);
//         } else {
//             console.log('Hashed Password:', hashedPassword);
//         }
//     });
// }

// hashAndLogPasswordSync();
