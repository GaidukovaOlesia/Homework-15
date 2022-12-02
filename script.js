
debugger;

const characters = `djghgvnmfkrhjfjfkrjir874665343`;
function generateKey(length, characters) {
    let key = "";
    debugger;
 for(let i = 0; i < length; i++){
     key +=
    characters.charAt(Math.floor(Math.random() * characters.length));
}
return key;
}

console.log(generateKey(10, characters));

