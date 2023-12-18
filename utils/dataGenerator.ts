
// Function to create dynamic JSON data
function createDynamicUserData(username: string): string {
    const userData = {
        firstName: "Automation",
        lastName: "User",
        userName: username,
        password: "Automation123",
        confirmPassowrd: "Automation123"
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(userData);

    return jsonString;
}

// Example: Dynamic username
const dynamicUsername = "{{randomUsername}}";  // Replace this with your dynamic username

// Create dynamic JSON data
const dynamicJsonData = createDynamicUserData(dynamicUsername);


