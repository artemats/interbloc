import Link from 'next/link';
import PropTypes from 'prop-types';
import ArrowShortIcon from '~ui/icons/ArrowShort';

export default function Pagination({ theme = 'default', active = 1, total = 10, limit, url }) {
	
	const pages = Math.ceil(Number(total) / Number(limit));
	let items = [];
	
	for (let number = 1; number <= pages; number++) {
		items.push(
			<div className="pagination-item" key={number}>
				<Link href={`${url}/?page=${number}`} className={`pagination-link ${number === Number(active) ? 'is-active' : ''}`}>
					<a>{number}</a>
				</Link>
			</div>
		)
	}
	
	if (theme === 'rounded') {
		return (
			<div className="pagination pagination-rounded">
				<div className="pagination-item __first">
					<Link href={`${url}/?page=${1}`}>
						<a className="pagination-link">First</a>
					</Link>
				</div>
				<div className="pagination-list">
					<div className="pagination-item __prev">
						<Link href={`${url}/?page=${Math.max(1, ( Number(active) - 1 ))}`}>
							<a className={`pagination-link pagination-link-arrow ${Number(active) === 1 ? 'disabled' : ''}`}>
								<ArrowShortIcon/>
							</a>
						</Link>
					</div>
					<span className="color-grey font-secondary-bold">Page {active} of {pages}</span>
					<div className="pagination-item __next">
						<Link href={`${url}/?page=${Math.min(pages, ( Number(active) + 1 ))}`}>
							<a className={`pagination-link pagination-link-arrow ${Number(active) === pages ? 'disabled' : ''}`}>
								<ArrowShortIcon/>
							</a>
						</Link>
					</div>
				</div>
				<div className="pagination-item __last">
					<Link href={`${url}/?page=${pages}`}>
						<a className="pagination-link" href="#">Last</a>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className="pagination">
			<div className="pagination-item __prev">
				<a className="pagination-link pagination-link-arrow" href="#">
					<ArrowShortIcon/>
				</a>
			</div>
			<div className="pagination-list">
				{items}
			</div>
			<div className="pagination-item __next">
				<a className="pagination-link pagination-link-arrow" href="#">
					<ArrowShortIcon/>
				</a>
			</div>
		</div>
	)
}

Pagination.propTypes = {
	theme: PropTypes.oneOf(['default', 'rounded']),
};