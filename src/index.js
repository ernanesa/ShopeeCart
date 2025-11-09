import chalk from "chalk";
import { addItemToCart, removeItemFromCart, showAllItemsInCart, clearCart } from "./services/cart.js";
import createItem from "./services/item.js";

const userCart = [];

const item1 = createItem("Laptop", 7500, 1);
const item2 = createItem("Mouse", 250, 1);
const item3 = createItem("PlayStation", 12500, 1);

function main() {
    console.log('Welcome to your Shopee Cart!\n');
    console.log(chalk.green('Adding a Laptop to the cart.'));
    addItemToCart(userCart, item1);
    console.log(chalk.green('Adding a Mouse to the cart.'));
    addItemToCart(userCart, item2);
    console.log(chalk.green('Adding a PlayStation to the cart.'));
    addItemToCart(userCart, item3);
    console.log(chalk.green('Adding a Mouse to the cart.'));
    addItemToCart(userCart, item2); // Increase quantity of Mouse

    showAllItemsInCart(userCart);

    // Example remove and show again
    console.log(chalk.yellow('\nRemoving a Mouse from the cart.'));
    removeItemFromCart(userCart, 'Mouse');
    showAllItemsInCart(userCart);

    // Clear cart demonstration
    console.log(chalk.bold.red('\nClearing the cart!'))
    clearCart(userCart);
    showAllItemsInCart(userCart);
}

main();