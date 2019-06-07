"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "whatever", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map