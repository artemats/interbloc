import Head from 'next/head';
import TransactionPage from '~routes/Transaction';
import db from '~utils/db/db';
import TransactionModel from '../../../models/Transaction';



export default function Transaction({ transaction }) {
	return (
		<>
			<Head>
				<title>InterBloc | Transaction</title>
			</Head>
			<TransactionPage transaction={transaction}/>
		</>
	)
}

export async function getServerSideProps(req) {
	
	const { transactionSlug } = req.query;
	
	await db.dbConnect();
	
	const transaction = await TransactionModel.findOne({ id: transactionSlug }).lean();
	
	await db.dbDisconnect();
	
	return {
		props: {
			transaction: JSON.parse(JSON.stringify(transaction))
		}
	}
}