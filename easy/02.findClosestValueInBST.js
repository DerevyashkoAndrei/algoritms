const binaryThree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 15,
    left: {
      value: 13,
      left: null,
      right: { value: 14, left: null, right: null },
    },
    right: { value: 22, left: null, right: null },
  },
};

console.log(find(binaryThree, 12), "must be 13");
console.log(find(binaryThree, 15), "must be 15");

function find(tree, targetValue) {
  let currentStep = tree;
  while (currentStep) {
    let nextStep = null;
    if (currentStep.value === targetValue) {
      return currentStep.value;
    }
    nextStep =
      currentStep.value > targetValue ? currentStep.left : currentStep.right;
    if (nextStep) currentStep = nextStep;
    else return currentStep.value;
  }

  return null;
}
