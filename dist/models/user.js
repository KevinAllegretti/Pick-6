"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
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
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs_1.default.hash(this.password, 8);
    }
    next();
});
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
};
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
