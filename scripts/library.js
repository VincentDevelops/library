function Library() {
    if(!new.target)
        throw Error("Must use new on new Library");

    this.map = new Map();
    this.id = 0;
    this.size = 0;
}

Library.prototype.addBook = function(book) {
    book.setId(this.id);
    this.map.set(this.id, book);
    this.id++;
    this.size++;
}

Library.prototype.getSize = function() {
    return this.size;
}

Library.prototype.getBookAtID = function(id) {
    if (this.map.has(id))
        return this.map.get(id);
    else
        return null;
}

Library.prototype.deleteBookAtId = function(id) {
    if (this.map.has(id)) {
        this.map.delete(id);
        this.size--;
    } 
}


