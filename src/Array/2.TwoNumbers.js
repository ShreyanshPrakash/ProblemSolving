/*
const twoSums = (nums, target) => {
  if (nums.length <= 2) {
    return nums;
  }

  let numsMap = {};
  nums.map((num, index) => {
    numsMap[num] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numsMap[diff] !== undefined) {
      return [i, numsMap[diff]];
    }
  }

  return [];
};
*/

/*

*/

const twoSums = (nums, target) => {
  if (nums.length <= 2) {
    return nums;
  }

  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const currentItem = nums[i];
    if (numsMap[currentItem] !== undefined) {
      return [i, numsMap[currentItem]];
    }
    numsMap[diff] = i;
  }

  return [];
};

const nums = [3, 7, 8, 10, 2];
const target = 12;

const result = twoSums(nums, target);
console.log(result);
