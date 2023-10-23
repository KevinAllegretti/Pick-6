import mongoose, { Schema, Document } from 'mongoose';

export interface IPick extends Document {
    userId: string;
    week: number;
    picks: {
        team: string;
        type: string; // 'spread' or 'moneyline'
        value: number;
    }[];
    bonusBet?: {
        team: string;
        type: string;
        value: number;
    };
    timestamp: Date;
}

const PickSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    week: { type: Number, required: true },
    picks: [{
        team: { type: String, required: true },
        type: { type: String, required: true },
        value: { type: Number, required: true },
    }],
    bonusBet: {
        team: { type: String, required: true },
        type: { type: String, required: true },
        value: { type: Number, required: true },
    },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IPick>('Pick', PickSchema);

