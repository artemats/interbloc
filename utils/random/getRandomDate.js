function getRandomDate() {
	const today = new Date();
	const yesterday = today.setDate(today.getDate() - 1)
	return `today ${today} - yesterday ${new Date(yesterday)}`
}

export default getRandomDate