import BlocksPage from 'routes/Blocks';
import Head from 'next/head';
import db from '~utils/db/db';
import BlockModel from '../../models/Block';



export default function Blocks({ blocks }) {
	return (
		<>
			<Head>
				<title>InterBloc | Blocks</title>
			</Head>
			<BlocksPage blocks={blocks}/>
		</>
	);
}

export async function getServerSideProps(req) {
	
	const { page = 1, limit = 10 } = req.query;
	
	await db.dbConnect();
	
	const blocks = await BlockModel.find()
		.limit(limit)
		.skip((page - 1) * limit)
		.lean();
	
	const total = await BlockModel.find().count();
	
	await db.dbDisconnect();
	
	return {
		props: {
			blocks: {
				data: JSON.parse(JSON.stringify(blocks)),
				currentPage: page,
				total,
				limit,
			}
		}
	}
}