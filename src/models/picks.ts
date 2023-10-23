import mongoose, { Schema, Document } from 'mongoose';

interface IPick extends Document {
  picks: {
    team: string;
    type: string; // 'spread' or 'moneyline'
    value: number;
  }[];
  immortalLock: {
    team: string;
    type: string;
    value: number;
  };
  timestamp: Date;
}

const PickSchema: Schema = new Schema({
  picks: [{
    team: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
  }],
  immortalLock: {
    team: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
  },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IPick>('Pick', PickSchema);
