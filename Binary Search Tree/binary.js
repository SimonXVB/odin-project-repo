class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class Tree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        const value = new Node(data);

        if(this.root === null) {
            this.root = value;
        } else {
            this.insertNode(this.root, value);
        }  
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(root, data) {
        if(root === null) {
            return root;
        }

        if(data < root.data) {
            root.left = this.deleteNode(root.left, data);
        } else if(data > root.data) {
            root.right = this.deleteNode(root.right, data);
        } else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            } else if(!root.right) {
                return root.left;
            }
            root.data = this.minDel(root.right);
            root.right = this.deleteNode(root.right, root.data)
        }
        return root
    }

    find(data) {
        let current = this.root;

        while(current) {
            if(current.data === data) {
                console.log(current);
                return
            }

            if(data < current.data) {
                current = current.left;
            } else  {
                current = current.right;
            }
        }

        console.log("Node not in tree")
    }

    buildTree(array) {
        for(let i = 0; i < array.length; i++) {
            this.insert(array[i])
        }
    }

    minDel(root) {
        if (!root.left) {
          return root.data;
        } else {
          return this.min(root.left);
        }
      }

    min() {
        let current = this.root;

        
        while(current.left) {
            current = current.left;
        }

        console.log("Minimum: " + current.data);
    }

    max() {
        let current = this.root;

        
        while(current.right) {
            current = current.right;
        }

        console.log("Maximum: " + current.data);
    }

    insertNode(root, newNode) {
        if(newNode.data < root.data) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    printRoot() {
        console.log("Root: " + this.root.data);
    }

    levelOrder() {
        const arr = [];
        
        const queue = [];
        queue.push(this.root);
        console.log(arr);

        while(queue.length) {
            let current = queue.shift();
            arr.push(current.data);

            if(current.left) {
                queue.push(current.left);
            }
            if(current.right) {
                queue.push(current.right);
            }
        }
    }

    height(root) {
        if(root === null) {
            return 0;
        } else {
            let leftHeight = this.height(root.left);
            let rightHeight = this.height(root.right);

            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
    
    depth(data) {
        let count = 0;
        let current = this.root;

        while(current) {
            if(current.data === data) {
                console.log("Depth: " + count);
                return
            }

            if(data < current.data) {
                current = current.left;
                count++;
            } else {
                current = current.right;
                count++;
            }
        }
    }

    inOrder(root) {
        if(root) {
            this.preOrder(root.left);
            console.log(root.data);
            this.preOrder(root.right);
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.data);
        }
    }
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
 

const tree = new Tree();

tree.insert(24);
tree.insert(23);
tree.insert(25);
tree.insert(22);
tree.insert(26);
tree.insert(27);
tree.buildTree([5, 6, 7, 8]);
tree.min();
tree.max();
tree.find(22);
tree.printRoot();
console.log(tree.height(tree.root));
tree.delete(23);
tree.levelOrder();
tree.depth(8);
console.log(tree);
tree.inOrder(tree.root);
prettyPrint(tree.root);