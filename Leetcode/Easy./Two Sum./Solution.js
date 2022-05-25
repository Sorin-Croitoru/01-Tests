var twoSum = function(nums, target) {
    const obj = {}
    //objects are fastest way to scan for key based on my testing
    for (let i = 0; i< nums.length; i++){
        if(obj[target-nums[i]] !== undefined){
            return [obj[target-nums[i]], i]
        }else{
            obj[nums[i]]= i
        }
    }     
};
