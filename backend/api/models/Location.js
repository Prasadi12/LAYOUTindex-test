import mongoose from 'mongoose';
const {Schema} = mongoose;

const LocationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: false,
    },
    phone:{
        type: String,
        required: false,
    },
    nodevices:{
        type: String,
        required: false,
    }
});

export default mongoose.model("Location", LocationSchema)