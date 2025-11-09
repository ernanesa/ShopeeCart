function createItem(name, price, quantity = 1) {
    if (!name) throw new Error("Item name is required");
    if (typeof price !== 'number' || price < 0) throw new Error("Price must be a positive number");
    if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Quantity must be a positive integer");

    return {
        name,
        price,
        quantity,
        get subtotal() {
            return this.price * this.quantity;
        }
    };
}

export default createItem;