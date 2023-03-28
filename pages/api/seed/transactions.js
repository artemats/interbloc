import getRandomInt from '~utils/random/getRandomInt';
import getRandomHash from '~utils/random/getRandomHash';
import getRandomFloat from '~utils/random/gerRandomFloat';
import getRandomAge from '~utils/random/getRandomAge';
import getRandomTransactionMethod from '~utils/random/getRandomTransactionMethod';
import db from '~utils/db/db';
import Transaction from '../../../models/Transaction';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
	try {
		await db.dbConnect();
		const transactions = [];
		
		for (let i = 0; i < 100; i++) {
			const _id = new ObjectId();
			transactions.push({
				_id,
				id: _id.toString(),
				hash: getRandomHash(64),
				block: getRandomInt(1000, 2000),
				from: getRandomHash(64),
				to: getRandomHash(64),
				value: getRandomFloat(0.001, 1, 4),
				free: getRandomHash(64),
				age: getRandomAge(),
				method: getRandomTransactionMethod(),
			})
		}
		
		if (transactions.length === 100) {
			await Transaction.deleteMany();
			await Transaction.insertMany(transactions);
		}
		
		res.status(200).send({ success: true, transactions })
	} catch (error) {
		res.status(500).json({ message: error?.message ? error.message : error })
	}
}

export default handler