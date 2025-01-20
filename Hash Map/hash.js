
class HashMap{
    constructor() {
        this.storage = new Array(16);
        this.size = 0;
        
        for(let i = 0; i < this.storage.length; i++){
            this.storage[i] = [];
        }
    }
    
    hashKey(key) {
        let hashCode = 0;  
        const primeNumber = 31;
    
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.storage.length;
        }
    
        return hashCode;
    };

    set(key, value) {
        const index = this.hashKey(key);
        const same = this.storage[index].find((item) => item[0] === key);
        
        if(same){
            same[1] = value;
        } else {
            this.storage[index].push([key, value, index])
            this.size++
        }
    };

    get(key) {
        const index = this.hashKey(key);
        const same = this.storage[index].find((item) => item[0] === key);
        
        if(same){
            console.log(same[1])
        } else {
            console.log("null")
        }
    }

    has(key){
        const index = this.hashKey(key);
        const same = this.storage[index].find((item) => item[0] === key);
        
        if(same){
            console.log("true")
        } else {
            console.log("false")
        }
    }

    remove(key){
        const index = this.hashKey(key);
        const same = this.storage[index].find((item) => item[0] === key);

        if(same){
            this.storage[index].splice(this.storage[index].indexOf(same), 1);
            this.size--
        } else {
            console.log("not right");
        }
    }

    length() {
        console.log("Size: " + this.size);
    }

    clear() {
        for(let i = 0; i < this.storage.length; i++){
            this.storage[i] = [];
        }
        this.size = 0
    }

    keys() {
        let arr = [];
        for(let i = 0; i < this.storage.length; i++){
            for(let j = 0; j < this.storage[i].length; j++){
                arr.push(this.storage[i][j][0]);
            }
        }
        console.log(arr);
    }

    values() {
        let arr = [];
        for(let i = 0; i < this.storage.length; i++){
            for(let j = 0; j < this.storage[i].length; j++){
                arr.push(this.storage[i][j][1]);
            }
        }
        console.log(arr);
    }

    entries() {
        let arr = [];
        for(let i = 0; i < this.storage.length; i++){
            for(let j = 0; j < this.storage[i].length; j++){
                arr.push(this.storage[i][j]);
            }
        }
        console.log(arr);
    }
};

const hash = new HashMap();

hash.set("joe", "jim");
hash.set("oje", "test");
hash.set("jeo", "test");
hash.get("joe");
hash.has("oje");
hash.length();
hash.keys();
hash.values();
hash.entries();

console.log(hash.storage);