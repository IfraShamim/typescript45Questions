// Question # 31
// 31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = ['admin', 'ifra', 'nisha'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (user) {
        return user === 'admin'
            ? console.log("Hello admin, would you like to see a status report?")
            : console.log("Hello ".concat(user, ", thank you for logging in again."));
    });
    usernames = [];
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    }
}
