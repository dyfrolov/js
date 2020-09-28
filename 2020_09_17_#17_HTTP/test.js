// document.body.innerHTML = `${document.body.constructor.name}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body instanceof HTMLBodyElement}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body instanceof HTMLElement}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body instanceof Element}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body instanceof Node}`;
// document.body.innerHTML = `${document.body.innerHTML} ${document.body instanceof EventTarget}`;
console.log(document.body);
console.dir(document.body);

let b = document.body;
console.log(b);
console.dir(b);
// b.innerHTML = 'InnerHTML';
// console.log(b);
// console.dir(b);
// b.outerHTML = 'OuterHTML';
// console.log(b);
// console.dir(b);

// document.body.firstElementChild.innerHTML = document.querySelector('body>ul').textContent;
let ul = document.querySelector('body>div:nth-of-type(2)>ul');
console.dir(ul);
document.querySelector('body div:nth-of-type(1)').innerHTML+=ul.firstElementChild.firstChild.data;
document.querySelector('body div:nth-of-type(1)').innerHTML+=ul.lastElementChild.firstChild.data;
document.querySelector('body div:nth-of-type(1)').innerHTML+=ul.children[1].firstChild.data;
document.querySelector('body div:nth-of-type(1)').innerHTML+=ul.childElementCount;

let arr=[];
cur=ul;
let i=0;
// while(cur.childElementCount>0){
//     // arr.push(...cur.children);
//     arr.push(...cur.children);
//     cur=arr[i++];
// }
console.dir(cur.querySelectorAll('li'));
arr.push(...cur.querySelectorAll('li'));

console.dir(arr.map(v=>v.firstChild.data));
// document.body.innerHTML = ``;
console.log(globalThis===window);
cur = document.querySelector('body>ul:first-of-type');
arr.push(...cur.querySelectorAll('li'));

console.dir(arr.map(v=>v.firstChild.data));
console.dir(document.querySelectorAll('body ul'));


class TreeNode{
    constructor(left, right, value){
        this.left=left;
        this.right=right;
        this.value=value;
    }
}

class BTree{
    constructor(root){
        this.root = root;
    }
    append(value){
        let curNode = root;
        let prevNode = null;
        while(curNode){
            prevNode = curNode;
            curNode = (value < prevNode.value ) ? prevNode.left : prevNode.right;
        }
        let newNode = new TreeNode(null,null,value);
        if (value<prevNode.value){
            prevNode.left = newNode;
        }else{
            prevNode.right = newNode;
        }
    }
    nodePrintIn(curNode){
        if(!curNode){
            return;
        }else{
            this.nodePrintIn(curNode.left);
            document.body.innerHTML+=`<br>${curNode.value}`;
            this.nodePrintIn(curNode.right);
        }
    }
    nodePrintPre(curNode){
        if(!curNode){
            return;
        }else{
            document.body.innerHTML+=`<br>${curNode.value}`;
            this.nodePrintPre(curNode.left);
            this.nodePrintPre(curNode.right);
        }
    }
    nodePrintPost(curNode){
        if(!curNode){
            return;
        }else{
            this.nodePrintPost(curNode.left);
            this.nodePrintPost(curNode.right);
            document.body.innerHTML+=`<br>${curNode.value}`;
        }
    }
}
// let lll = new TreeNode(null, null, 500);
// let llr = new TreeNode(null, null, 400);
// let ll = new TreeNode(lll, llr, 30);
// let lr = new TreeNode(null, null, 20);
// let l = new TreeNode(ll, lr, 1);
// let r = new TreeNode(null, null, 2);
let root = new TreeNode(null, null, 5);
let tree = new BTree(root);
tree.append(3);
tree.append(7);
tree.append(2);
tree.append(4);
tree.append(6);
tree.append(8);
// console.log(root);
tree.nodePrintPre(root);
document.body.innerHTML+=`<br>`;
tree.nodePrintIn(root);
document.body.innerHTML+=`<br>`;
tree.nodePrintPost(root);
console.dir(tree.root);
// function nodePrint(curNode){
//     document.body.innerHTML+=`<br>${curNode.value}`;
//     if(curNode.left){nodePrint(curNode.left);}
//     if(curNode.right){nodePrint(curNode.right);}
// }