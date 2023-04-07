import db from '~utils/db/db';
import {ObjectId} from 'mongodb';
import getRandomHash from '~utils/random/getRandomHash';
import getRandomInt from '~utils/random/getRandomInt';
import getRandomAge from '~utils/random/getRandomAge';
import Block from '../../../models/Block';
import proposers from '../../../data/proposers.json';

const handler = async (req, res) => {
	try {
		await db.dbConnect();
		const blocks = [];
		
		for (let i = 0; i < proposers.length; i++) {
			const _id = new ObjectId();
			blocks.push({
				_id,
				id: _id.toString(),
				proposer: {
					name: proposers[i].name,
				},
				hash: getRandomHash(64),
				height: getRandomInt(1000000, 5000000),
				time: getRandomAge(),
				txs: getRandomInt(0, 100)
			})
		}
		
		if (blocks.length === 50) {
			await Block.deleteMany()
			await Block.insertMany(blocks)
		}
		
		await db.dbDisconnect();
		
		res.status(200).json({ success: true, blocks })
	} catch ({ message }) {
		res.status(500).json({ message: message })
	}
}

export default handler