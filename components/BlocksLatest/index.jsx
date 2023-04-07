import {useMemo} from 'react';
import NumberFormat from 'react-number-format';
import getRandomInt from '~utils/random/getRandomInt';
import getRandomFloat from '~utils/random/gerRandomFloat';

export default function BlocksLatest() {
	
	const block = useMemo(() => {
		return {
			height: getRandomInt(5000000, 6000000),
			time: getRandomFloat(3, 5, 2)
		}
	}, [])
	
	return (
		<div className="h-100 d-flex flex-column justify-content-end pb-2">
			<p className="font-16 color-grey font-bold">Latest Block:</p>
			<NumberFormat
				value={block.height}
				displayType="text"
				thousandSeparator={true}
				renderText={(value, props) => {
					return <p className="h-2 mb-4" {...props}>{value}</p>
				}}/>
			<p className="font-16 color-grey font-bold">Average Block Time:</p>
			<p className="h-2">{block.time} s</p>
		</div>
	)
}