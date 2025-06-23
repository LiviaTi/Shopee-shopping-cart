import createItem from "./services/item.js";

const carrinho = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Camiseta", 20.99, 3);
const item2 = await createItem("Saia mid1", 50.99, 1);

console.log(item1.subTotalItem());