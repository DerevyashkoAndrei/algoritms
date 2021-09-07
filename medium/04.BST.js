class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // time O(log(n)) | space O(1)
  insert(value) {
    // Write your code here.
    let target = this;
    while (target) {
      if (target.value > value) {
        if (!target.left) {
          target.left = new BST(value);
          break;
        }
        target = target.left;
      } else {
        if (!target.right) {
          target.right = new BST(value);
          break;
        }
        target = target.right;
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }
  // time O(log(n)) | space O(1)
  contains(value) {
    // Write your code here.
    const [node] = findNodeByValue(value);
    return !!node;
  }
  // time O(log(n)) | space O(1)
  remove(value) {
    // Write your code here.
    const [node, parent] = this.findNodeByValue(value);

    if (!node) return this;

    if (node.right && node.left) {
      const [smallestValueNode, parent] = node.right.getSmallestValueNode();
      parent.left = parent.left.right;
      node.value = smallestValueNode.value;
    } else if (node.right) {
      node.value = node.right.value;
      node.right = node.right.right;
      node.left = node.right.left;
    } else if (node.left) {
      node.value = node.left.value;
      node.right = node.left.right;
      node.left = node.left.left;
    } else {
      if (parent.left ===node) parent.left = null 
      else parent.right = null
    }

    // Do not edit the return statement of this method.
    return this;
  }

  findNodeByValue(value) {
    let target = this,parent = null;
    while (target) {
      if (target.value === value) return [target, parent];
      if (target.value > value) {
        if (!target.left) {
          target.left = new BST(value);
          break;
        }
        parent = target;
        target = target.left;
      } else {
        if (!target.right) {
          target.right = new BST(value);
          break;
        }
        parent = target;
        target = target.right;
      }
    }
    return [null,null];
  }

  getSmallestValueNode() {
    let target = this, parent;

    while (target) {
      if (target.left) {
        parent = target;
        target = target.left;
      }
      return [target, parent];
    }
  }
}

const graph = (() => {
  const graph = new BST(10);
  graph.insert(5);
  graph.insert(5);
  graph.insert(2);
  graph.insert(1);
  graph.insert(15);
  graph.insert(13);
  graph.insert(14);
  return graph.insert(22);
})();

// try {
//   graph.insert(12);
//   console.log("insert", graph.right.left.left.value === 12);
// } catch {
//   console.log("not correct insert");
// }

// try {
//   console.log("contains", graph.contains(12) === true);
//   console.log("contains", graph.contains(5) === true);
//   console.log("contains", graph.contains(4) === false);
// } catch {
//   console.log("not correct contains");
// }

try {
  // graph.remove(1);
  graph.remove(10);
  console.log("remove", graph);
} catch(e) {
  console.log("not correct remove");
  console.log(e)
}

exports.BST = BST;

exports.createBST = () => {
  const graph = new BST(10);
  graph.insert(5);
  graph.insert(5);
  graph.insert(2);
  graph.insert(1);
  graph.insert(15);
  graph.insert(13);
  graph.insert(14);
  return graph.insert(22);
}