// Question # 19
// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestsList = ["Masharib", "Rayan", "Tehreem", "Ahnaf", "Ifra"];
console.log("Number of People Invited to Dinner: ".concat(guestsList.length));
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to join me for dinner. It would be an honor to have your presence."));
});
