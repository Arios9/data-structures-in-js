class Bst{

    constructor(){
        this.root=null;
    }

    insert(data){ 
        if(!this.root)this.root=new TNode(data); 
        else 
        try {
            this.prinsert(data,this.root);
        } catch (error) {
            console.log(error);
        }
          
    }
    prinsert(data,root){
            if(data>root.data){
                if(root.right)this.prinsert(data,root.right);
                else root.right=new TNode(data); 
            }else if (data<root.data){
                if(root.left)this.prinsert(data,root.left);
                else root.left=new TNode(data); 
            }else throw new Error("No duplicate");
    }

    remove(data){
        this.priremove(data,this.root);
    }

    priremove(data,root){
        if(!root)throw new Error("num doesnt exist");
        if(data==root.data){
            if(root==this.root){
                if(!root.left&&!root.right)this.root=null;
                else if(root.left&&root.right){
                    this.removewith2childs(root);
                }else{
                    if(root.left)this.root=root.left;
                    else this.root=root.right;
                }
            }else{
                let father=this.fatherof(data,this.root);
                if(!root.left&&!root.right){
                    if(father.left==root)father.left=null;
                    else father.right=null;
                }else if(root.left&&root.right){
                    this.removewith2childs(root);
                }else{
                    if(father.left==root){
                        if(root.left)father.left=root.left;
                        else father.left=root.right;
                    }else{
                        if(root.left)father.right=root.left;
                        else father.right=root.right;
                    }
                }
            }
        }else{
            if(data<root.data)this.priremove(data,root.left);
            else this.priremove(data,root.right);
        }
    }
    removewith2childs(root){
        let min=root.right;
        while(min.left)
        min=min.left;
        this.priremove(min.data,this.root);
        root.data=min.data;  
    }

    fatherof(data,root){
        if(root.left&&root.left.data==data)return root;
        if(root.right&&root.right.data==data)return root;
        if(data<root.data)return this.fatherof(data,root.left);
        else return this.fatherof(data,root.right);
    }



   

    printinorder(root){
        if(!root)return;
        this.printinorder(root.left);
        console.log(root.data);
        this.printinorder(root.right);
    }

    

    ar(){
        let a=[5,2,11,-4,3,9,21,19,25,100];
        for(let i=0; i<a.length; i++)
        this.insert(a[i]);
    }

}


class TNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}