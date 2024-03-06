// Question # 15
// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guestLists = ["Nisha", "Tehreem"];
guestLists.forEach(function (guests) {
    return console.log("Dear ".concat(guests, ",\n\tYou are cordially invited to join me for dinner."));
});
var notAttend = "Nisha";
console.log("Unfortunately! ".concat(notAttend, " was unable to attend."));
var newInvitee = "Rayan";
guestLists = guestLists.map(function (guests) { return (guests === notAttend ? newInvitee : guests); });
guestLists.forEach(function (guests) { return console.log("Dear ".concat(guests, ",\n\tYou are cordially invited to join me for dinner.")); });
