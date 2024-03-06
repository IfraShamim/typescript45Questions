// Question # 44
// 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items:");
        items.forEach(function (item) {
            console.log("- ".concat(item));
        });
        console.log("Enjoy your sandwich!\n");
    }
}
order_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Turkey', 'Swiss', 'Mustard');
order_sandwich();
