import mongoose from 'mongoose';

const {} = mongoose.Schema.Types;

const BlockSchema = new mongoose.Schema(
	{
		height: { type: Number, required: true },
		id: { type: String, required: true, unique: true },
		proposer: {
			name: { type: String },
			thumbnail: { type: String },
		},
		hash: { type: String, required: true },
		txs: { type: Number },
		time: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const Block = mongoose.models.Block || mongoose.model('Block', BlockSchema);

export default Block