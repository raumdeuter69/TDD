function add(nums)
{
    if(nums == "")
    {
        return 0;
    }
    nums=nums.split(",").map((num)=>{
        return parseInt(num,10);
    });
    return nums.reduce((acc,curr)=>{
        return acc+curr;
    },0);
}

module.exports = add;