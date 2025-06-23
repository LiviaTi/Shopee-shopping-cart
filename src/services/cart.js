//Use case
async function addItemCart(userCart, itemName) {
	userCart.push(itemName);
}

async function deleteItemCart(userCart, nameItem) {
	
}

async function removeItemCart(userCart, index) {
	
}

async function sumTotalCart(userCart) {
	const resultSumTotalCart = userCart.reduce((total, itemName) => total + itemName.subTotalItem(), 0);
	console.log(resultSumTotalCart);
}

export {
	addItemCart,
	sumTotalCart,
	deleteItemCart,
	removeItemCart,
}
