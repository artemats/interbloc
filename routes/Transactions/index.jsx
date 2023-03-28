import {useEffect, useState} from 'react';
import Link from 'next/link';
import Pagination from '~components/Pagination';
import Button from '~ui/components/Button';
import TransactionsIcon from '~ui/icons/Transactions';
import EyeIcon from '~ui/icons/Eye';
import ArrowIcon from '~ui/icons/Arrow';
import routes from '~config/routes';
import getRandomFloat from '~utils/random/gerRandomFloat';

export default function TransactionsPage({ transactions }) {
	
	const [eth, setEth] = useState(null)
	
	useEffect(() => {
		setEth({
			value: getRandomFloat(2000, 3000, 2),
			percentage: getRandomFloat(1,2,2)
		})
	}, [])
	
	return (
		<>
			<div className="page-header-inner">
				<div className="page-header-thumb __orange">
					<TransactionsIcon/>
				</div>
				<div>
					<h1 className="h-2">Transactions</h1>
					{eth?.value ? (
						<p className="font-16 font-secondary-bold">Eth: <span className="color-violet">${eth.value.toLocaleString('en-US')}</span> (+{eth.percentage}%)</p>
					) : null}
				</div>
			</div>
			<div className="page-body">
				<div className="table-box">
					<div className="table-header">
						<div className="row">
							<div className="col-6">
								<p className="font-16 font-book mb-1">More than > <span
									className="color-turquoise font-bold">{transactions.total}</span> transaction found</p>
								<p className="font-12 font-book color-grey">(Showing the last {transactions.data.length} records)</p>
							</div>
							<div className="col-6">
								<div className="d-flex justify-content-end">
									<Pagination
										theme="rounded"
										total={transactions.total}
										active={transactions.currentPage}
										limit={transactions.limit}
										url="/transactions"/>
								</div>
							</div>
						</div>
					</div>
					<table className="table">
						<thead>
						<tr>
							<th/>
							<th>Txs Hash</th>
							<th>Method</th>
							<th>Block</th>
							<th>Age</th>
							<th>From</th>
							<th/>
							<th>To</th>
							<th>Value</th>
							<th>Txn Fee</th>
							<th/>
						</tr>
						</thead>
						<tbody>
						{
							transactions.data.map((option, index) => (
								<tr key={index}>
									<td>
										<Link href={`${routes.public.transactions}/${option.id}`}>
											<a>
												<Button icon color="transparent">
													<EyeIcon/>
												</Button>
											</a>
										</Link>
									</td>
									<td>
										<span className="color-turquoise font-secondary-bold font-hash">{option.hash}</span>
									</td>
									<td>
										<span className="color-violet font-12 font-bold status">{option.method}</span>
									</td>
									<td>
										<span className="font-book">{option.block}</span>
									</td>
									<td>
										<span className="font-book">{option.age}</span>
									</td>
									<td>
										<span className="font-book font-hash">{option.from}</span>
									</td>
									<td>
										<Link href={`${routes.public.transactions}/${option.id}`}>
											<a>
												<Button>
													<ArrowIcon/>
												</Button>
											</a>
										</Link>
									</td>
									<td>
										<span className="font-book font-hash">{option.to}</span>
									</td>
									<td>
										<span className="font-book">{option.value}</span>
									</td>
									<td>
										<span className="font-book font-hash">{option.free}</span>
									</td>
									<td>
										<div className="signal bg-primary"/>
									</td>
								</tr>
							))
						}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}