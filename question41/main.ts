// Question # 41
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magiciansNames:string[] =['David Copperfield', 'Houdini', 'Derren Brown', 'David Blaine'];
function show_magicians(magicians:string[]):void{
    magiciansNames.forEach(magicians =>
        {console.log(magicians);
        })
}
show_magicians(magiciansNames);