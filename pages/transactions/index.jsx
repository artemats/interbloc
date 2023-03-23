import Head from 'next/head';
import TransactionsPage from '~routes/Transactions';
import TransactionModel from '../../models/Transaction';

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

export async function getServerSideProps({ query, req }) {
	
	const { page = 1, limit = 10 } = query;
	
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