const binsryThree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 10,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

const binsryThree2 = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null,
  },
  right: null,
};

console.log(getBranchSums(binsryThree), "must be [15,16,18,10,11]");

function getBranchSums(tree, sum = 0) {
  let sums = [];

  if (tree) {
    sum = tree.value + sum;
    sums = sums.concat(getBranchSums(tree.left, sum));
    sums = sums.concat(getBranchSums(tree.right, sum));
    return sums.length ? sums : [sum];
  }
  return [];
}
