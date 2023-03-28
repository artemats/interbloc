import Head from 'next/head';
import TransactionsPage from '~routes/Transactions';
import TransactionModel from '../../models/Transaction';
import db from '~utils/db/db';

export default function Transactions({ transactions }) {
	
	return (
		<>
			<Head>
				<title>InterBloc | Transactions</title>
			</Head>
			<TransactionsPage transactions={transactions}/>
		</>
	)
}

export async function getServerSideProps(req) {
	
	const { page = 1, limit = 10 } = req.query;
	
	await db.dbConnect();
	
	const transactions = await TransactionModel.find()
		.limit(limit)
		.skip((page - 1) * limit)
		.lean();
	
	const total = await TransactionModel.find().count();
	
	return {
		props: {
			transactions: {
				data: JSON.parse(JSON.stringify(transactions)),
				currentPage: page,
				total,
				limit,
			}
		}
	}
}