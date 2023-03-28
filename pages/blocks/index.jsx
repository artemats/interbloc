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

export async function getServerSideProps() {
	
	await db.dbConnect();
	
	const blocks = await BlockModel.find().lean();
	
	return {
		props: {
			blocks: JSON.parse(JSON.stringify(blocks))
		}
	}
}