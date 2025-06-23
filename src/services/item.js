// Use cas4es item

//create item with correct subtotal
async function createItem(nameItem, priceItem, quantityItem) {
	return {
		nameItem,
		priceItem,
		quantityItem,
		subTotalItem: function () {
			return this.priceItem * this.quantityItem;
		}
	}
}

export default createItem;