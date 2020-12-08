class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }


  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      // this.value = value;
    }
    else if (key < this.key) {

      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }

      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }



  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }



  find(key) {
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
}
module.exports = BinarySearchTree; 






// 3. Create a BST class
//   Walk through the binary search tree code in the curriculum and understand;
// it well.Then write a BinarySearchTree class with its core functions(insert(),
//   remove(), find()) from scratch.

// Create a binary search tree called BST and insert 3, 1, 4, 6, 9, 2, 5, 7;
// into your tree.Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N;
// into your tree.Compare your result with the result from the 1st exercise.;
