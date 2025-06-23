import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Camiseta", 20.00, 3);
const item2 = await createItem("Saia midi", 50.00, 1);

await cartService.addItemCart(myCart, item1);
await cartService.addItemCart(myCart, item2);

console.log(item1.subTotalItem());

console.log("Total Shopee cart:");
await cartService.sumTotalCart(myCart);