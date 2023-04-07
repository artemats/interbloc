import NumberFormat from 'react-number-format';
import BlocksIcon from '~ui/icons/Blocks';
import hashShortening from '~utils/string/hashShortening';
import ErrorBlock from '~ui/components/Error';
import placeholder from '~static/images/placeholder.svg';
import Pagination from '~components/Pagination';


export default function BlocksPage({ blocks = [] }) {
	return (
		<>
			<div className="page-header-inner">
				<div className="page-header-thumb __turquoise">
					<BlocksIcon/>
				</div>
				<div>
					<h1 className="h-2">Blocks</h1>
					<p className="h-6">Last Actuals Blocks</p>
				</div>
			</div>
			<div className="page-body">
				{blocks.data.length ? (
					<div className="table-box">
						<table className="table">
							<thead>
							<tr>
								<th>Height</th>
								<th>Proposer</th>
								<th>Hash</th>
								<th>Txs</th>
								<th>Time</th>
							</tr>
							</thead>
							<tbody>
							{
								blocks.data.map((option, index) => (
									<tr key={index}>
										<td>
											<NumberFormat
												value={option.height}
												displayType="text"
												thousandSeparator={true}
												renderText={(value, props) => {
													return <span className="font-secondary-bold color-turquoise" {...props}>{value}</span>;
												}}/>
										</td>
										<td>
											<div className="d-inline-flex align-items-center">
												<div className="thumb size-30 position-left">
													<img src={placeholder.src} alt={option.hash}/>
												</div>
												<span className="font-secondary-bold">{option.proposer.name}</span>
											</div>
										</td>
										<td>
											<p className="font-book">{hashShortening(option.hash)}</p>
										</td>
										<td><span className="font-book">{option.txs}</span></td>
										<td><span className="font-book">{option.time}</span></td>
									</tr>
								))
							}
							</tbody>
						</table>
					</div>
				) : <ErrorBlock title="Data is not available"/>}
				<Pagination total={blocks.total} limit={blocks.limit} active={blocks.currentPage} url="/blocks"/>
			</div>
		</>
	)
}