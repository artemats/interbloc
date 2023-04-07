import {useMemo} from 'react';
import Plot from 'react-plotly.js';
import getRandomInt from '~utils/random/getRandomInt';
import {isEmptyObject} from '~utils/object/detectEmptyObject';
import { styles } from '~config/chart';

export default function Mempool() {
	
	const mem = useMemo(() => {
		return {
			pending: 12,
			x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			y: Array.from({ length: 12 }, () => getRandomInt(10, 30))
		}
	}, [])
	
	if (!isEmptyObject(mem)) {
		return (
			<>
				<p className="font-16 color-grey font-bold">Transactions pending:</p>
				<p className="h-2">{mem?.pending}</p>
				<div className="mempool-chart">
					<Plot
						data={[
							{
								x: mem?.x,
								y: mem?.y,
								type: 'bar',
								marker: {
									color: '#687EFF',
								},
								cornerroundness: {
									bottomleft: 10,
								}
							}
						]}
						layout={{
							width: null,
							height: null,
							autosize: true,
							showlegend: false,
							margin: {t: 10, r: 0, b: 30, l: 30},
							font: styles.font,
							paper_bgcolor: 'transparent',
							plot_bgcolor: 'transparent',
							xaxis: {
								// visible: false,
								gridcolor: '#292929',
								linecolor: '#292929',
								title: {
									text: 'Gas',
									font: {
										color: '#A3A3A3',
										size: 10,
									},
									standoff: 0,
								},
								tickfont: {
									color: '#5C5C5C',
									size: 10,
								},
							},
							yaxis: {
								// visible: false,
								gridcolor: '#292929',
								linecolor: '#292929',
								title: {
									text: 'Gas Limit',
									font: {
										color: '#A3A3A3',
										size: 10,
									},
									standoff: 0,
								},
								tickfont: {
									color: '#5C5C5C',
									size: 10,
								},
							},
							hovermode: false,
							bargap: 0.4,
						}}
						config={styles.config}
						style={styles.style}
					/>
				</div>
			</>
		)
	}
	return null
}