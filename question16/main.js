// Question # 16
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestsLists = ["Nisha", "Tehreem"];
guestsLists.forEach(function (guests) {
    return console.log("Dear ".concat(guests, ",\n\tYou are cordially invited to join me for dinner."));
});
var nottAttend = "Nisha";
console.log("Unfortunately! ".concat(nottAttend, " was unable to attend."));
var newInviteee = "Rayan";
guestsLists = guestsLists.map(function (guests) { return (guests === nottAttend ? newInviteee : guests); });
guestsLists.forEach(function (guests) { return console.log("Dear ".concat(guests, ",\n\tYou are cordially invited to join me for dinner.")); });
console.log("Great news! I found a bigger dinner table.");
guestsLists.unshift("Masharib");
guestsLists.splice(Math.floor(guestsLists.length / 2), 0, "Ahnaf");
guestsLists.push("Ifra");
guestsLists.forEach(function (guests) {
    console.log("Dear ".concat(guests, ",\n\tYou are cordially invited to join me for dinner. It would be an honor to have your presence."));
});
