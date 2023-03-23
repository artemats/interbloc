import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const TransactionSchema = new mongoose.Schema(
	{
		id: { type: String, required: true, unique: true },
		hash: { type: String, required: true },
		block: { type: Number },
		from: { type: String, required: true },
		to: { type: String, required: true },
		value: { type: Number },
		free: { type: String, required: true },
		age: { type: String },
		method: { type: String }
	},
	{
		timestamps: true
	}
)

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default Transaction