module.exports = (temp, product) => {
	let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); //Have to use Regular Expression
	output = output.replace(/{%IMAGE%}/g, product.image); //Have to use Regular Expression
	output = output.replace(/{%PRICE%}/g, product.price); //Have to use Regular Expression
	output = output.replace(/{%FROM%}/g, product.from); //Have to use Regular Expression
	output = output.replace(/{%NUTRIENTS%}/g, product.nutrients); //Have to use Regular Expression
	output = output.replace(/{%QUANTITY%}/g, product.quantity); //Have to use Regular Expression
	output = output.replace(/{%DESCRIPTION%}/g, product.description); //Have to use Regular Expression
	output = output.replace(/{%ID%}/g, product.id); //Have to use Regular Expression

	console.log(product);
	if (!product.organic) {
		output = output.replace(/{%NOTORGANIC%}/g, 'not-organic');
		return output;
	}
	return output;
};
