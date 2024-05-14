/*
DESCRIPTION:
-------------
Given an integer array nums, find a 
subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    var i = 0;
    var temp = 0;
    var max = 0;
    var arr = []

    for(i; i < nums.length; i++){
        
        //initialize pointers
        let left = i;
        let right = i+1;

        temp = nums[left] * nums[right]
        if(temp > max){
            max = temp;
            arr = [nums[left], nums[right]];
        }

        left++;
        right++;
    }

    return max;
    
};