import mongoose, { Document, Model } from 'mongoose';

const {Schema} = mongoose;

export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userSchema = new Schema<UserDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
        role: {
            type: String,
            default: 'user',
        }
    },
    {timestamps: true}
);

const User: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', userSchema);

export default User;