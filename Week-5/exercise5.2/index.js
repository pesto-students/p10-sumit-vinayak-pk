function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        const lowerChar = char.toLowerCase();
        if(isVowel(lowerChar)){
            if(vowelMap.has(lowerChar)){
                vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
            }else{
                vowelMap.set(lowerChar, 1);

            }

        }
    }
    return vowelMap;
}

console.log(vowelCount('vadhjsavf'))
console.log(vowelCount('aieqhdbfui'))
