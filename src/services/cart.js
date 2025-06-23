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

async function removeItemCart(userCart, index) {
	
}

async function sumTotalCart(userCart) {
	const resultSumTotalCart = userCart.reduce((total, itemName) => total + itemName.subTotalItem(), 0);
	console.log(resultSumTotalCart);
}

async function viewItemCart(userCart) {
	console.log("Shopee cart list: ");
	userCart.forEach((item, index) => {
		console.log(`${index + 1}. ${item.nameItem} - R$${item.priceItem} | ${item.quantityItem} | Subtotal: ${item.subTotalItem()}`);
	});
}

export {
	addItemCart,
	sumTotalCart,
	deleteItemCart,
	removeItemCart,
	viewItemCart,
}
