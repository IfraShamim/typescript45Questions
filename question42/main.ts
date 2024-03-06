// Question # 42
// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magicianNames: string[] = ['David Copperfield', 'Houdini', 'Derren Brown', 'David Blaine'];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
  }
  
const greatMagicians = make_great(magicianNames);
  
show_magicians(greatMagicians);
  