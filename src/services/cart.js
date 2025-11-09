import chalk from 'chalk';

function assertCart(cart) {
    if (!Array.isArray(cart)) throw new Error('Cart must be an array.')
}

function findItemIndex(cart, name) {
    return cart.findIndex(item => item.name === name)
}

function addItemToCart(cart, item) {
    assertCart(cart);
    if (!item || !item.name) throw new Error("Invalid item.");
    const index = findItemIndex(cart, item.name);
    if (index >= 0) {
        cart[index].quantity += item.quantity || 1;
        return cart[index];
    } else {
        cart.push({ ...item });
        return item;
    }
}

function removeItemFromCart(cart, name, removeAll = false) {
    assertCart(cart);
    const index = findItemIndex(cart, name);
    if (index === -1) return false;
    if (removeAll || cart[index].quantity <= 1) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity -= 1;
    }
    return true;
}

function calculateItemsSubTotal(cart) {
    assertCart(cart);
    return cart.map(item => ({ name: item.name, subtotal: item.price * item.quantity }))

}

function calculateCartSubTotal(cart) {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart(cart) {
    assertCart(cart);
    cart.length = 0;
}

function showAllItemsInCart(cart) {
    assertCart(cart)
    if (!cart.length) {
        console.log(chalk.yellow('The cart is empty.'))
        return;
    }
    console.log(chalk.bold.cyan('\nItems in the cart:'));
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${chalk.green(item.name)} | Qty: ${item.quantity} | Unit: ${formatCurrency(item.price)} | Subtotal: ${formatCurrency(item.price * item.quantity)}`
        )
    });
    console.log(chalk.bold.magenta(`Total: ${formatCurrency(calculateCartSubTotal(cart))}`));
}

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export {
    addItemToCart, removeItemFromCart,
    calculateItemsSubTotal, calculateCartSubTotal,
    clearCart, showAllItemsInCart
}