const BinarySearchTree = require('./BinarySearchTree');

// 3. Create a binary search tree called BST and insert 3, 1, 4, 6, 9, 2, 5, 7;
// into your tree.Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N;
// into your tree.Compare your result with the result from the 1st exercise.
function main() {

  const BST = new BinarySearchTree;
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);
  console.log(BST);

  const BST2 = new BinarySearchTree;
  BST2.insert('E');
  BST2.insert('A');
  BST2.insert('S');
  BST2.insert('Y');
  BST2.insert('Q');
  BST2.insert('U');
  BST2.insert('E');
  BST2.insert('S');
  BST2.insert('T');
  BST2.insert('I');
  BST2.insert('O');
  BST2.insert('N');
  console.log(BST2);

  console.log(treeHeight(BST));
  console.log(treeHeight(BST2));
  console.log(isItBst(BST));
  console.log(isItBst(BST2));

  // console.log(isBST(BST))

}
main();

// function sort(t, d = 0) {
//   if (t) {
//     sort(t.left, d + 1);
//     console.log(" ".repeat(d) + t.value);
//     sort(t.right, d + 1);
//   }
// }


// 4. What does this program do?
// Without running this code in your code editor, explain what the;
// following program does.Show with an example the result of executing this;
// program.What is the runtime of this algorithm ?

//This function recursively sums every element in a tree Runtime: O(n) as the 
//function is called for every node in the tree


function tree(t) {
  //base?
  if (!t) {
    return 0;
  }
  //recusive? 
  return tree(t.left) + t.value + tree(t.right);
}

//5. Write an algorithm to find the height of a binary search tree.
// What is the time complexity of your algorithm ?

function treeHeight(tree) {
  if (tree === null) {
    return -1;
  }
  let left = treeHeight(tree.left);
  let right = treeHeight(tree.right);

  if (left > right) {
    return left + 1;
  }
  else {
    return right + 1;
  }
}
// or option 2 
function getSize(node = this.root) {
  if (node === null) {
    return -1;
  }

  let left = getSize(node.left);
  let right = getSize(node.right);
  if (left > right) {
    return left + 1;
  }
  else {
    return right + 1;
  }
}




// const bst = new BinarySearchTree(); 

// bst.add(9)
// bst.add(2)
// bst.add(3)
// bst.add(4)


// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())

// console.log('inorder:' + bst.inOrder())
// console.log('preorder:' + bst.preOrder())
// console.log('postorder:' + bst.postOrder())

//6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree;
// is a binary search tree, assuming the tree does not contain duplicates.;
// ensuring that every node's left hand child i sless than the parent node's value
// and that every node's right hand child is greater than the parent
// not sure on this solution:

function isItBst(tree) {
  if (tree === null) {
    return false;
  }
  if (tree.left && tree.right.key > tree.key) {
    return true;
  }
  let left = isItBst(tree.left);
  let right = isItBst(tree.right);

  return left && right;
}


//or group solution 
// const isBST = (node, min = null, max = null) => {
//   // base case
//   if (!node) {
//     return true;
//   }
//   if (max !== null && node.key >= max) {
//     return false;
//   }
//   if (min !== null && node.key <= min) {
//     return false;
//   }
//   const leftSide = isBST(node.left, min, node.key);

//   const rightSide = isBST(node.right, node.value, max);

//   return leftSide && rightSide;
// };
