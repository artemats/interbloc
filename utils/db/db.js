import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
	if (connection.isConnected) {
		console.log('DB already connected');
		return
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState;
		if (connection.isConnected === 1) {
			console.log('Use previous connection');
			return;
		}
		await mongoose.disconnect();
	}
	console.log('process.env.MONGODB_URI ', process.env.MONGODB_URI)
	const db = await mongoose.connect(process.env.MONGODB_URI);
	console.log('New connection');
	connection.isConnected = db.connections[0].readyState;
}

async function dbDisconnect() {
	if (connection.isConnected) {
		if (process.env.NODE_ENV === 'production') {
			await mongoose.disconnect();
			connection.isConnected = false;
		} else {
			console.log('Not disconnected');
		}
	}
}

function convertDocToObj(doc) {
	doc._id = doc._id.toString();
	doc?.createdAt ? doc.createdAt = doc.createdAt.toString() : null;
	doc?.updatedAt ? doc.updatedAt = doc.updatedAt.toString() : null;
	return doc;
}

const db = { dbConnect, dbDisconnect, convertDocToObj };
export default db;