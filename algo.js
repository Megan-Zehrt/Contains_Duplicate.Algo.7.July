// 217. Contains Duplicate



// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.









/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    

    let dupe = new Map()

    for(let i = 0; i < nums.length; i++){

        if(dupe.has(nums[i])){

            let count = dupe.get(nums[i])
            dupe.set(nums[i], count+1)
        }
        else{
            dupe.set(nums[i], 1)
        }
    }

    for(let [number, amount] of dupe.entries()){

        if(amount > 1){
            return true
        }else{
            continue
        }
    }

    return false
};