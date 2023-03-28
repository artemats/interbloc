import db from '~utils/db/db';
import {ObjectId} from 'mongodb';
import getRandomHash from '~utils/random/getRandomHash';
import getRandomInt from '~utils/random/getRandomInt';
import getRandomAge from '~utils/random/getRandomAge';
import Block from '../../../models/Block';

const handler = async (req, res) => {
	try {
		await db.dbConnect();
		const blocks = [];
		
		for (let i = 0; i < 20; i++) {
			const _id = new ObjectId();
			blocks.push({
				_id,
				id: _id.toString(),
				proposer: {
					name: '-',
					thumbnail: `https://picsum.photos/id/${i}/100/100`,
				},
				hash: getRandomHash(64),
				height: getRandomInt(1000000, 2000000),
				time: getRandomAge(),
				txs: getRandomInt(0, 100)
			})
		}
		
		if (blocks.length === 20) {
			await Block.deleteMany()
			await Block.insertMany(blocks)
		}
		
		res.status(200).json({ success: true, blocks })
	} catch ({ message }) {
		res.status(500).json({ message: message })
	}
}

export default handler