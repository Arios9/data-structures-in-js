

class MyLinkedList{

	constructor(){
		this.first=null;
		this.last=null;
	}

	insertfirst(data){
		let node=new Node(data);
		if(this.first==null){
			this.first=this.last=node;
		}else{
			node.next=this.first;
			this.first=node;
		}
	}

	insertlast(data){
		let node=new Node(data);
		if(this.first==null){
			this.first=this.last=node;
		}else{
			this.last.next=node;
			this.last=node;
		}
	}

	removefirst(){
		if(this.first==null)return null;		
		let node=this.first;
		if(this.first==this.last)this.last=null;
		this.first=this.first.next;
		return node;
	}

	removelast(){
		if(this.first==null)return null;		
		let node=this.last;
		if(this.first==this.last)this.last=this.first=null;
		let temp = this.first;
		while(temp.next){
			if(temp.next==this.last){
				temp.next=null;
				this.last=temp;
			}
			temp=temp.next;
		}
		return node;
	}
}


class Node{
	constructor(data){
		this.data=data;
		this.next=null;
	}
}










 





 