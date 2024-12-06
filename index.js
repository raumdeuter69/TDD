function extracteDelimiter(delimiterPart) {
    if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
        const extractedDelimiter = delimiterPart.match(/\[([^\]]+)\]/g).map((d) => d.slice(1, -1));
        return new RegExp(
            extractedDelimiter.map((d) => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"))

    } else {
        return new RegExp(delimiterPart.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
    }
}
function add(nums) {
    if (nums === "") {
        return 0;

    }

    let delimiter = /[,\n;*#]/;
    if (nums.startsWith("//")) {
        const parts = nums.split("\n");
        const delimiterPart = parts[0].slice(2);
        delimiter = extracteDelimiter(delimiterPart);
        nums = parts[1];
    }
    if (/^\d+[\n,;*#]$/.test(nums)) {
        throw new Error("Invalid input: single number with delimiter");
    }
    nums = nums.split(delimiter).map((num) => {
        return num <= 1000 ? parseInt(num, 10) : 0;
    });
    const negatives = nums.filter((num) => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
    return nums.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

module.exports = add;
