import {useMemo} from 'react';
import Plot from 'react-plotly.js';
import { styles } from '~config/chart';
import getRandomInt from '~utils/random/getRandomInt';

export default function Consensus() {

	const data = useMemo(() => {
		const online = getRandomInt(20, 50);
		const total = getRandomInt(50, 100);
		const onlinePercent = (( online / total ) * 100).toFixed();
		const top3 = getRandomInt(1, 5);
		return { online, total, onlinePercent, top3 }
	}, [])

	return (
		<>
			<div className="row">
				<div className="col-6">
					<p className="color-grey font-bold mt-1">Voting Power <br/> Online:</p>
					<p className="font-secondary-bold color-orange font-16 mt-1">{data.onlinePercent}%</p>
				</div>
				<div className="col-6">
					<p className="color-grey font-bold mt-1">Number Of <br/> Validators:</p>
					<p
						className="font-secondary-bold color-violet font-16 mt-1">{`${data.online}/${data.total}`}</p>
				</div>
			</div>
			<div className="consensus-chart">
				<Plot
					data={[
						{
							values: [data.onlinePercent, (100 - data.onlinePercent)],
							labels: ['', '', ''],
							type: 'pie',
							hole: .9,
							marker: {
								colors: ['#D69F4D', '#323232'],
							},
							textinfo: 'none',
						}
					]}
					layout={{
						width: null,
						height: null,
						autosize: true,
						showlegend: false,
						margin: {t: 30, r: 0, b: 0, l: 0},
						font: styles.font,
						paper_bgcolor: 'transparent',
						plot_bgcolor: 'transparent',
						xaxis: {
							visible: false,
						},
						yaxis: {
							visible: false,
						},
						hovermode: false,
						annotations: [
							{
								font: {
									size: 16,
									family: 'SpaceMono-Bold',
									color: '#F9F9F9',
								},
								showarrow: false,
								text: `top 1/${data.top3}`,
								y: .55
							}
						],
					}}
					config={styles.config}
					style={styles.style}
				/>
			</div>
		</>
	)
}