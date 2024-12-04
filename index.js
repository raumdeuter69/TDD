function add(nums)
{
    if(nums == "")
    {
        return 0;
    }

    let delimiter = /,|\n|;/;
    if (nums.startsWith("//")) {
        const parts = nums.split("\n"); 
        delimiter = new RegExp(parts[0].slice(2));
        nums = parts[1];
    }
    if (/^\d+[\n,;]$/.test(nums)) {
        throw new Error("Invalid input: single number with delimiter");
    }
    nums=nums.split(delimiter).map((num)=>{
        return parseInt(num,10);
    });
    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
    return nums.reduce((acc,curr)=>{
        return acc+curr;
    },0);
}

module.exports = add;