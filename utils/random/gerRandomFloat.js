function getRandomFloat(min, max, decimals) {
	return Number((Math.random() * (max - min) + min).toFixed(decimals));
}

export default getRandomFloat