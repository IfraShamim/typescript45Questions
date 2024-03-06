// Question # 12
// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const friendsNames:string[]  = ["Nisha","Tehreem","Rayan","Masharib","Ahnaf"];
console.log("~Friend's Names~");
for(let i=0; i<friendsNames.length; i++){
    console.log(`Hi ${friendsNames[i]}`);
}