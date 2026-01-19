//242. Valid Anagram

var isAnagram = function(s, t) {
	class HashMap{
        constructor(){
            this.map = new Map();
        }
        set(key,value){
            this.map.set(key,value);
        }
        get(key){
            return this.map.has(key)?this.map.get(key):null;
        }
    }
    let map = new HashMap();
    if(s.length != t.length) return false;
    for(let i = 0; i < s.length; i++){
        let count = map.get(s[i]);
        map.set(s[i],count+1);
    }
    for(let i = 0; i < t.length; i++){
        let count = map.get(t[i]);
        if(count == 0) return false;
        map.set(t[i],count-1);
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));