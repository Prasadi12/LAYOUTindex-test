import mongoose from 'mongoose';
const {Schema} = mongoose;

const LocationSchema = new mongoose.Schema({
    LocationSchema:{
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
    no_devices:{
        type: String,
        required: false,
    }
});

export default mongoose.model("Location", LocationSchema)