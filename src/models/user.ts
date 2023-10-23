import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Before saving the user, hash the password
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

interface IUser extends mongoose.Document {
    username: string;
    password: string;
    totalPoints?: number;  // Assuming this is the structure of your User
}

const User = mongoose.model<IUser>('User', userSchema);

export { IUser };
export default User;
