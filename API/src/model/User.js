import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    "nome": { type: String, required: true },
    "idade": { type: Number, required: true },
    "email": { type: String, required: true }
});

export default mongoose.model('User', userSchema);