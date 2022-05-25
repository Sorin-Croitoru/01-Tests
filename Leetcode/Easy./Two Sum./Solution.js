var twoSum = function(nums, target) {
    const obj = {}
    //storing cache as an objects is the fastest way
    for (let i = 0; i< nums.length; i++){
        if(obj[target-nums[i]] !== undefined){
            return [obj[target-nums[i]], i]
        }else{
            obj[nums[i]]= i
        }
    }     
};
