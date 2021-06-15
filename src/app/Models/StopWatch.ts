import { Document, Model } from 'mongoose';
import mongoose from '../../Database';

//interface do Schema do banco de dados
export interface IStopWatch extends Document {
    time: number;
    minutes: number;
    seconds: number;
    createdAt: Date;
};
//Schema do banco de dados
const StopWatchSchema = new mongoose.Schema({
    time: { type: Number, required: true },
    minutes: { type: Number, required: true },
    seconds: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const StopWatch: Model<IStopWatch> = mongoose.model('StopWatch', StopWatchSchema);

export { StopWatch };