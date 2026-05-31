function Book(title, description) {
    if (!new.target)
        throw Error("You must use the 'new' operator to call Card");

    this.title = title;
    this.description = description;
    this.id;
    this.read = false;

    this.renderCard = function() {
        const card = document.createElement("div");
        card.classList.add("card", "flex");
        card.dataset.id = "book-" + String(this.id);
        card.dataset.title = this.title;

        const cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details", "flex");

        const cardTitle = document.createElement("div")
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.title;

        const cardDescription = document.createElement("div")
        cardDescription.classList.add("card-description");
        cardDescription.textContent = this.description;

        cardDetails.append(cardTitle, cardDescription);

        const cardButtons = document.createElement("div")
        cardButtons.classList.add("card-buttons", "flex");
        
        const cardButton1 = document.createElement("button");
        cardButton1.classList.add("card-button", "card-icon");

        const cardIcon1 = document.createElement("img");
        cardIcon1.src = "/assets/icons/star-svgrepo-com.svg";
        cardIcon1.alt = "favorite"
        cardIcon1.classList.add("card-button-icon");

        cardButton1.append(cardIcon1);

        const cardButton2 = document.createElement("button");
        cardButton2.classList.add("card-button", "card-icon");

        const cardIcon2 = document.createElement("img");
        cardIcon2.src = "/assets/icons/share-svgrepo-com.svg";
        cardIcon2.alt = "share"
        cardIcon2.classList.add("card-button-icon");

        cardButton2.append(cardIcon2);

        const cardButton3 = document.createElement("button");
        cardButton3.classList.add("card-button", "card-icon");

        const cardIcon3 = document.createElement("img");
        cardIcon3.src = "/assets/icons/menu-dots-svgrepo-com.svg";
        cardIcon3.alt = "card menu"
        cardIcon3.classList.add("card-button-icon");

        cardButton3.append(cardIcon3);

        const cardButton4 = document.createElement("button");
        cardButton4.classList.add("card-button")
        
        const cardSpan = document.createElement("span");
        cardSpan.classList.add("read-button");
        cardSpan.id = "read-button";
        cardSpan.textContent = "Read";

        cardButton4.append(cardSpan);

        const cardButton5 = document.createElement("button");
        cardButton5.classList.add("card-button", "card-icon", "trash-button");

        const cardIcon4 = document.createElement("img");
        cardIcon4.src = "/assets/icons/trash-bin-minimalistic-svgrepo-com.svg";
        cardIcon4.alt = "delete";
        cardIcon4.classList.add("card-button-icon");

        cardButton5.append(cardIcon4);

        cardButtons.append(cardButton1, cardButton2, cardButton3, cardButton4, cardButton5);

        card.append(cardDetails, cardButtons);

        return card;
    }

}

Book.prototype.setId = function(id) {
    this.id = id;
}

Book.prototype.setRead = function(read) {
    this.read = read;
} 