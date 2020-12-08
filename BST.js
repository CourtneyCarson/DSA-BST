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
}
main();

// function s(t, d = 0) {
//   if (t) {
//     s(t.left, d + 1);
//     console.log(" ".repeat(d) + t.value);
//     s(t.right, d + 1);
//   }
// }

// function tree(t) {
//   if (!t) {
//     return 0;
//   }
//   return tree(t.left) +'' + t.value + '' tree(t.right);
// }

// console.log(tree('A'));

// 4. What does this program do?
// Without running this code in your code editor, explain what the;
// following program does.Show with an example the result of executing this;
// program.What is the runtime of this algorithm ?

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}


