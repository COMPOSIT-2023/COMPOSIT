import mongoose from "mongoose";
const EnigmaSchema = new mongoose.Schema(
    {
        pid1: {
            type: String,
            required: true,
            unique: true,
        },
        pid2: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Enigma", EnigmaSchema);
