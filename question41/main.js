// Question # 41
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magiciansNames = ['David Copperfield', 'Houdini', 'Derren Brown', 'David Blaine'];
function show_magicians(magicians) {
    magiciansNames.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magiciansNames);
