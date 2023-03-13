import mongoose from "mongoose";
const MetaclixSchema = new mongoose.Schema(
  {
    participantId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Metaclix", MetaclixSchema);
