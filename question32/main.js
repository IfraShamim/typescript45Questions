// Question # 32
// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ['Ifra', 'Nisha', 'Tehreem', 'Rayan', 'Masharib', 'Ahnaf'];
var new_users = ['Tehreem', 'Aliza', 'Masharib', 'Rimsha', 'Nisha'];
var lowerCurrentUser = current_users.map(function (user) { return user.toLowerCase(); });
new_users.forEach(function (newUser) {
    var lowerNewUser = newUser.toLowerCase();
    if (lowerCurrentUser.includes(lowerNewUser)) {
        console.log("Sorry, the username '".concat(newUser, "' is not available. Please choose a new one."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
        lowerCurrentUser.push(lowerNewUser);
    }
});