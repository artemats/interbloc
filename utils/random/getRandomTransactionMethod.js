import {transactionMethods} from '~utils/constants';

const getRandomTransactionMethod = () => {
	const methods = transactionMethods;
	const i = Math.floor(Math.random() * (methods.length - 1));
	
	return methods[i] || methods[0]
}

export default getRandomTransactionMethod