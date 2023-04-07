import { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import Plot from 'react-plotly.js';
import getRandomInt from '~utils/random/getRandomInt';
import {isEmptyObject} from '~utils/object/detectEmptyObject';
import { styles } from '~config/chart';

export default function Tokenomics() {
	
	const token = useMemo(() => {
		const bonded = getRandomInt(50000000, 100000000);
		const unbonded = getRandomInt(10000000, 50000000);
		const supply = bonded + unbonded;
		
		const boundedPercent = parseFloat(( ( bonded * 100 ) / supply ).toFixed(2));
		const unBoundedPercent = parseFloat(( ( unbonded * 100 ) / supply ).toFixed(2));
		const boundedPercentFake = ( boundedPercent / 100 ) * 50;
		const unBoundedPercentFake = ( unBoundedPercent / 100 ) * 50;
		
		return { supply, bonded, unbonded, boundedPercent, unBoundedPercent, boundedPercentFake, unBoundedPercentFake }
	}, [])
	
	if (!isEmptyObject(token)) {
		return (
			<>
				<div className="row">
					<div className="col-6">
						<p className="color-grey font-bold">Bonded:</p>
						<NumberFormat
							value={token.bonded}
							displayType="text"
							thousandSeparator={true}
							renderText={(value, props) => {
								return <p className="font-16 font-secondary-bold color-orange" {...props}>{value}</p>
							}}/>
						<p className="color-grey font-secondary-bold font-12">BTSG</p>
						<p className="mt-2">{token.boundedPercent.toFixed(2)} %</p>
					</div>
					<div className="col-6">
						<p className="color-grey font-bold">Unbonded:</p>
						<NumberFormat
							value={token.unbonded}
							displayType="text"
							thousandSeparator={true}
							renderText={(value, props) => {
								return <p className="font-16 font-secondary-bold color-violet" {...props}>{value}</p>
							}}/>
						<p className="color-grey font-secondary-bold font-12">BTSG</p>
						<p className="mt-2">{token.unBoundedPercent.toFixed(2)} %</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<div className="tokenomics-chart">
							<Plot
								data={[
									{
										values: [token.boundedPercentFake, token.unBoundedPercentFake, 50],
										labels: ['', '', ''],
										type: 'pie',
										rotation: 90,
										marker: {
											colors: ['#D69F4D', '#9485FE', '#1E1F1F'],
										},
										textinfo: 'none',
									}
								]}
								layout={{
									width: null,
									height: null,
									autosize: true,
									showlegend: false,
									margin: {t: 0, r: 0, b: 0, l: 0},
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
								}}
								config={styles.config}
								style={styles.style}
							/>
						</div>
					</div>
					<div className="col-4">
						<div className="tokenomics-legends d-flex flex-column">
							<p className="font-12 color-grey legend mb-2">
								<span className="legend-icon bg-orange"/>
								<span className="legend-title">Bonded</span>
							</p>
							<p className="font-12 color-grey legend">
								<span className="legend-icon bg-violet"/>
								<span className="legend-title">Unbonding</span>
							</p>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-8">
						<p className="color-grey font-bold">Staking:</p>
					</div>
					<div className="col-4">
						<NumberFormat
							value={token.supply}
							displayType="text"
							thousandSeparator={true}
							renderText={(value, props) => {
								return <p className="font-16 font-secondary-bold" {...props}>{value}</p>
							}}/>
					</div>
				</div>
			</>
		)
	}
	
	return null
}