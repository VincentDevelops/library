
function Book(title, description) {
    if (!new.target) {
        throw Error("You must use 'new' operator for Book initialization");
    }

    this.title = title;
    this.description = description;

    this.getTitle = function() {
        return this.title;
    }

    this.getDescription = function() {
        return this.description;
    }

    this.setTitle = function(title) {
        this.title = title;
    }


    this.setDescription = function(description) {
        this.description = description
    }

    

}
