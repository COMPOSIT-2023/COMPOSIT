import mongoose from "mongoose";
const TechtoonSchema = new mongoose.Schema(
  {
    participantId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Techtoon", TechtoonSchema);
