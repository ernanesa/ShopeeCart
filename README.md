# ShopeeCart

Simple shopping cart demo in Node.js inspired by the Shopee cart flow. Lets you create items, add/remove them from a cart, list contents, and calculate per-item and overall totals. Uses `chalk` for colored console output.

## Features
- Add items to the cart (increments quantity if the item already exists).
- Remove a single unit or remove the entire item.
- Display all items with per-item subtotal and grand total.
- Clear the cart.
- Currency formatting (USD, `en-US`).

## Requirements
- Node.js 16+
- npm

> Note: Project uses ES modules (`"type": "module"`) and `chalk@5` (ESM).

## Installation
```pwsh
npm install
```

## Running (demo)
```pwsh
npm start
# or
node src/index.js
```

Example output (colors removed):
```
Welcome to your Shopee Cart!

Adding a Laptop to the cart.
Adding a Mouse to the cart.
Adding a PlayStation to the cart.
Adding a Mouse to the cart.
Items in the cart:
1. Laptop | Qty: 1 | Unit: $7,500.00 | Subtotal: $7,500.00
2. Mouse | Qty: 2 | Unit: $250.00 | Subtotal: $500.00
3. PlayStation | Qty: 1 | Unit: $12,500.00 | Subtotal: $12,500.00
Total: $20,500.00

Removing a Mouse from the cart.
Items in the cart:
1. Laptop | Qty: 1 | Unit: $7,500.00 | Subtotal: $7,500.00
2. Mouse | Qty: 1 | Unit: $250.00 | Subtotal: $250.00
3. PlayStation | Qty: 1 | Unit: $12,500.00 | Subtotal: $12,500.00
Total: $20,250.00

Clearing the cart!
The cart is empty.
```

## API

Import the factory and cart functions:

```js
import createItem from './src/services/item.js';
import {
  addItemToCart,
  removeItemFromCart,
  showAllItemsInCart,
  clearCart,
  calculateItemsSubTotal,
  calculateCartSubTotal
} from './src/services/cart.js';
```

- `createItem(name: string, price: number, quantity?: number = 1)`
  - Validates arguments and returns `{ name, price, quantity, subtotal(get) }`.
- `addItemToCart(cart: Array, item)`
  - Adds an item or increments its quantity.
- `removeItemFromCart(cart: Array, name: string, removeAll?: boolean = false)`
  - Removes one unit; with `removeAll = true` removes the entire item.
- `showAllItemsInCart(cart: Array)`
  - Prints items, per-item subtotal, and total.
- `clearCart(cart: Array)`
  - Empties the cart array in place.
- `calculateItemsSubTotal(cart: Array)`
  - Returns an array of `{ name, subtotal }`.
- `calculateCartSubTotal(cart: Array)`
  - Returns the sum of `price * quantity` for all items.

## Project Structure
```
src/
  index.js               # Demo script
  services/
    cart.js              # Cart functions
    item.js              # Item factory with validation
```

## Scripts
- `npm start`: runs the demo (`src/index.js`).
- `npm test`: placeholder (no tests yet).

## Suggested Next Steps
- Localization: add i18n (e.g., pt-BR currency & messages).
- Unit tests (Jest or similar) for cart logic.
- Enhanced error handling and structured logging.