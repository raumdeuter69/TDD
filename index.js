function extracteDelimiter(delimiterPart) {
    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
        const extractedDelimiter = delimiterPart.match(/\[([^\]]+)\]/g).map((d) => d.slice(1, -1));
        return new RegExp(
            extractedDelimiter.map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"))

    } else {
        return new RegExp(delimiterPart.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    }
}

function checkForNegatives(nums) {
    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
}

function parsedNums(nums, delimiter) {
    return nums.split(delimiter).map((num) => {
        return parseInt(num);
    }).filter((num)=>{
        return  num<=1000
    });
}

function add(nums) {
    if (nums === "") {
        return 0;

    }
    let delimiter = /[,\n;*#]/;
    const hasCustomDelimiter = nums.startsWith("//");
    if (hasCustomDelimiter) {
        const parts = nums.split("\n");
        const delimiterPart = parts[0].slice(2);
        delimiter = extracteDelimiter(delimiterPart);
        nums = parts[1];
    }
    const checkSingleNumberWithDelimiter=/^\d+[\n,;*#]$/
    if (checkSingleNumberWithDelimiter.test(nums)) {
        throw new Error("Invalid input: single number with delimiter");
    }
    nums = parsedNums(nums, delimiter);
    checkForNegatives(nums);
    return nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

module.exports = add;
