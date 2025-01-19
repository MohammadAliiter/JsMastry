var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); 
    let closestSum = Infinity; 

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            // Update closest sum if needed
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            // Adjust pointers based on sum
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // Exact match
                return currentSum;
            }
        }
    }

    return closestSum;
};

let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2
