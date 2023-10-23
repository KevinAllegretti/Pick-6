/*import mongoose from 'mongoose';

const pickHistorySchema = new mongoose.Schema({
    week: {
        type: Number,
        required: true
    },
    picks: {
        type: [String],  // Array of strings for team picks
        required: true
    },
    weekScore: {
        type: Number,
        default: 0
    }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    picksHistory: {
        type: [pickHistorySchema],
        default: []
    }
});

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    return userObject;
}

export type User = {
    id: number;
    username: string;
    totalPoints: number;
    picksHistory: Array<{
        week: number;
        picks: string[];
        weekScore: number;
    }>;
};

interface IUser extends mongoose.Document {
    username: string;
    totalPoints: number;
    picksHistory: typeof User["picksHistory"];
}

const User = mongoose.model<IUser>('User', userSchema);

export { IUser };
export default User;
*/