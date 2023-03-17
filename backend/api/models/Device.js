import mongoose from 'mongoose';
const {Schema} = mongoose;

const DeviceSchema = new mongoose.Schema({
    serial_number:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    }
});

export default mongoose.model("Device", DeviceSchema)