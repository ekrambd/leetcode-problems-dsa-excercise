//387. First Unique Character in a String

var firstUniqChar = function(s) {
    let arr = s.split("");
    let map = new Map();
    for(let i = 0; i < arr.length; i++){
        let count = map.get(arr[i]);
        if(count == null){
            map.set(arr[i],1);
        }else{
            map.set(arr[i],count+1);
        }
    }
    for(let i = 0; i < arr.length; i++){
        let count = map.get(arr[i]);
        if(count == 1) return i;
    }
    return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));