// Question # 18
// 18.Seeing the World: Think of at least five places in the world you’d like to visit. • Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placesToVisit = ["China", "Japan", "Island"];
console.log("Original order:", placesToVisit);
var sortedAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedAlphabeticalOrder);
console.log("Original Order (After Alphabetical Sorting):", placesToVisit);
var sortedReverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", sortedReverseAlphabeticalOrder);
console.log("Original Order (After Reverse Alphabetical Sorting):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Original Order (After Reversing Twice):", placesToVisit);
placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
