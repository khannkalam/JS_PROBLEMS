//02 The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


const originalString = "DAD"


function Mirror(originalString){

let ReversedString = originalString.split('').reverse().join('');

let MirrorString = originalString + ReversedString;


return MirrorString

}

console.log(Mirror(originalString))