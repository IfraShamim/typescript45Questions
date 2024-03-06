// Question # 17
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestsLists:string[] = ["Nisha","Tehreem"];
guestsLists.forEach(guests =>
    console.log(`Dear ${guests},\n\tYou are cordially invited to join me for dinner.`));
const nottAttend:string = "Nisha";
console.log(`Unfortunately! ${nottAttend} was unable to attend.`);
const newInviteee:string = "Rayan";
guestsLists = guestsLists.map(guests => (guests === nottAttend ? newInviteee : guests));
guestsLists.forEach(guests => console.log(`Dear ${guests},\n\tYou are cordially invited to join me for dinner.`));
console.log("Great news! I found a bigger dinner table.");
guestsLists.unshift("Masharib");
guestsLists.splice(Math.floor(guestsLists.length / 2), 0, "Ahnaf");
guestsLists.push("Ifra");
guestsLists.forEach(guests => {
    console.log(`Dear ${guests},\n\tYou are cordially invited to join me for dinner. It would be an honor to have your presence.`);
});
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("I can only invite two people for dinner.");
while (guestsLists.length > 2) {
    const removedGuest = guestsLists.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestsLists.forEach(guest => {
    console.log(`Dear ${guest},\n\tYou are still invited to join me for dinner.`);
});