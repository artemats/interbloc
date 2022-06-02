import PropTypes from 'prop-types';



export default function PercentIcon({ color = 'currentColor' }) {
	return (
		<svg width="15" height="13" viewBox="0 0 15 13">
			<path d="M6.1945 2.30298C6.40285 2.73541 6.50998 3.1574 6.51587 3.56897C6.51599 3.96852 6.44179 4.35208 6.29328 4.71964C6.151 5.0694 5.94063 5.38537 5.66218 5.66754C5.39574 5.94392 5.08835 6.16603 4.74 6.33387C4.39166 6.50171 4.02039 6.6066 3.62619 6.64853C3.244 6.68468 2.86579 6.6523 2.49157 6.55141C2.12357 6.43271 1.78336 6.24882 1.47094 5.99975C1.15274 5.73865 0.889461 5.3919 0.681108 4.95948C0.472756 4.52705 0.368524 4.11106 0.368413 3.71151C0.362513 3.29994 0.430705 2.91928 0.572987 2.56952C0.721494 2.20196 0.928968 1.87998 1.19541 1.6036C1.47386 1.32143 1.78726 1.09643 2.1356 0.928589C2.48394 0.76075 2.84921 0.658756 3.2314 0.622609C3.6256 0.580674 4.0067 0.619055 4.3747 0.737751C4.74892 0.838648 5.09514 1.01964 5.41334 1.28073C5.72576 1.52981 5.98614 1.87056 6.1945 2.30298ZM4.01077 4.82039C4.31107 4.6757 4.52613 4.44628 4.65596 4.13211C4.7858 3.81795 4.75811 3.46868 4.57291 3.0843C4.38771 2.69993 4.1318 2.46062 3.80519 2.36639C3.47858 2.27215 3.16513 2.29738 2.86483 2.44207C2.56454 2.58676 2.34948 2.81618 2.21964 3.13035C2.08981 3.44451 2.11749 3.79378 2.30269 4.17815C2.4879 4.56253 2.7438 4.80184 3.07041 4.89607C3.39703 4.99031 3.71048 4.96508 4.01077 4.82039ZM14.2356 7.84156C14.444 8.27398 14.5511 8.69598 14.557 9.10755C14.5571 9.5071 14.4829 9.89066 14.3344 10.2582C14.1922 10.608 13.9818 10.9239 13.7033 11.2061C13.4369 11.4825 13.1295 11.7046 12.7812 11.8724C12.4328 12.0403 12.0615 12.1452 11.6673 12.1871C11.2851 12.2233 10.9069 12.1909 10.5327 12.09C10.1647 11.9713 9.82451 11.7874 9.5121 11.5383C9.19389 11.2772 8.93062 10.9305 8.72226 10.4981C8.51391 10.0656 8.40968 9.64964 8.40957 9.25009C8.40367 8.83852 8.47186 8.45786 8.61414 8.10809C8.76265 7.74053 8.97012 7.41856 9.23656 7.14218C9.51502 6.86001 9.82841 6.63501 10.1768 6.46717C10.5251 6.29933 10.8904 6.19733 11.2726 6.16119C11.6668 6.11925 12.0479 6.15763 12.4159 6.27633C12.7901 6.37723 13.1363 6.55822 13.4545 6.81931C13.7669 7.06839 14.0273 7.40914 14.2356 7.84156ZM12.0519 10.359C12.3522 10.2143 12.5673 9.98485 12.6971 9.67069C12.827 9.35653 12.7993 9.00726 12.6141 8.62288C12.4289 8.23851 12.173 7.9992 11.8463 7.90497C11.5197 7.81073 11.2063 7.83596 10.906 7.98065C10.6057 8.12534 10.3906 8.35476 10.2608 8.66893C10.131 8.98309 10.1586 9.33236 10.3438 9.71673C10.529 10.1011 10.785 10.3404 11.1116 10.4346C11.4382 10.5289 11.7516 10.5037 12.0519 10.359ZM9.94315 1.65121L11.359 2.70065L4.95559 11.1585L3.53972 10.1091L9.94315 1.65121Z" fill={color}/>
		</svg>
	)
}

PercentIcon.propTypes = {
	color: PropTypes.string,
};