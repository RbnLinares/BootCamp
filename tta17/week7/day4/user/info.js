export async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const usersArray = await response.json();
        return usersArray;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        return [];
    }
}
