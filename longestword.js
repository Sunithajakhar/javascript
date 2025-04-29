const longestword = (str) => {
   
    const word = str.split(" ");
   word.sort((a,b) => b.length - a.length);
    console.log(word);
    return word[0];
}
console.log(longestword ("This is dia singh kherwa from bangalore"));