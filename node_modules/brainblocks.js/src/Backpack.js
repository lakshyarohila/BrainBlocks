class Backpack {
constructor (size = 100){
    this.items = [];
    this.capacity = size;
}

    pack(item){
        if(this.items.length >= this.capacity){
            throw new Error("🎒 Backpack is full!");
        }
        this.items.push(item);
    }
    
    unpack(){
        if(this.isEmpty()){
            throw new Error("🎒 Backpack is empty !");
            
        }
        return this.items.pop();
    
    }
    
    peek(){
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    size(){
        return this.items.length;
        
    }
    

}

module.exports = Backpack;