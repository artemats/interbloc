function getRandomAge() {
	const now = new Date().getTime();
	const fiveHoursLater = now - (3 * 60 * 60 * 1000);
	const timestamp = Math.floor(Math.random() * (now - fiveHoursLater + 1) + fiveHoursLater);
	const different = new Date(now - timestamp);
	const hours = different.getHours();
	const minutes = different.getMinutes();
	return `${hours}hr ${minutes && minutes}min ago`;
}

export default getRandomAge