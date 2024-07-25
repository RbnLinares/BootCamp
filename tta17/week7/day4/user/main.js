import { getUsers } from './info.js';

async function logUsers() {
    try {
        const users = await getUsers();
        console.log(users); 
        console.log(users[0].name);
    } catch (error) {
        console.error("Error fetching and logging users:", error);
    }
}

logUsers(); 
