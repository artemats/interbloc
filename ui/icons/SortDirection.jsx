import PropTypes from 'prop-types';



export default function SortDirectionIcon({ color = 'currentColor', direction = 'down' }) {
	return (
		<svg width="24" height="15" viewBox="0 0 24 15">
			<path fillRule="evenodd" clipRule="evenodd" d="M12 0C11.4477 0 11 0.447715 11 1C11 1.55228 11.4477 2 12 2H23C23.5523 2 24 1.55228 24 1C24 0.447715 23.5523 0 23 0H12ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5ZM12 8C11.4477 8 11 8.44771 11 9C11 9.55229 11.4477 10 12 10H17C17.5523 10 18 9.55229 18 9C18 8.44771 17.5523 8 17 8H12ZM12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12H12Z" fill={color}/>
			{
				direction === 'up'
					? (
					<path d="M3.5 14C3.5 14.2761 3.72386 14.5 4 14.5C4.27614 14.5 4.5 14.2761 4.5 14H3.5ZM4.35355 0.646447C4.15829 0.451184 3.84171 0.451184 3.64645 0.646447L0.464466 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659728 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646447ZM4.5 14L4.5 1H3.5L3.5 14H4.5Z" fill={color}/>
					) : (
						<path d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 14.3536C3.84171 14.5488 4.15829 14.5488 4.35355 14.3536L7.53553 11.1716C7.7308 10.9763 7.7308 10.6597 7.53553 10.4645C7.34027 10.2692 7.02369 10.2692 6.82843 10.4645L4 13.2929L1.17157 10.4645C0.976311 10.2692 0.659729 10.2692 0.464467 10.4645C0.269204 10.6597 0.269204 10.9763 0.464467 11.1716L3.64645 14.3536ZM3.5 1L3.5 14L4.5 14L4.5 1L3.5 1Z" fill={color}/>
					)
			}


		</svg>
	)
}

SortDirectionIcon.propTypes = {
	color: PropTypes.string,
	direction: PropTypes.oneOf(['up', 'down']),
}