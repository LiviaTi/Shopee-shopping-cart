//Use case
async function addItemCart(userCart, itemName) {
	userCart.push(itemName);
}

async function deleteItemCart(userCart, nameItem) {
	const index = userCart.findIndex((item) => item.nameItem === nameItem);

	if (index != -1) {
		userCart.splice(index, 1);
	}
}

async function removeItemCart(userCart, item) {
	//find item index
	const indexFound = userCart.findIndex((product) => product.nameItem === item.nameItem);
	//case not find the item
	if (indexFound == -1) {
		console.log("item not found");
		return;
	}
	//case found, if item > 1 subtract 1 item, item = 1 delete item
	if (userCart[indexFound].quantityItem == 1) {
		userCart.splice(indexFound, 1);
		return;
	}
	if (userCart[indexFound].quantityItem > 1) {
		userCart[indexFound].quantityItem--;
		return;
	}

}

async function sumTotalCart(userCart) {
	const resultSumTotalCart = userCart.reduce((total, itemName) => total + itemName.subTotalItem(), 0);
	console.log(`\n Total cart: ${resultSumTotalCart}`);

}

async function viewItemCart(userCart) {
	console.log("Shopee cart list: ");
	userCart.forEach((item, index) => {
		console.log(`\n ${index + 1}. ${item.nameItem} - R$${item.priceItem} | ${item.quantityItem}x | Subtotal: ${item.subTotalItem()}`);
	});
}

export {
	addItemCart,
	sumTotalCart,
	deleteItemCart,
	removeItemCart,
	viewItemCart,
}
