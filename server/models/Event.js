import mongoose from "mongoose";
import { v4 } from 'uuid';
const EventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    }, 
    participants: [{
      participantsId: {
        type: [String],
        required: true,
        unique: true,
      },
      participantsName: {
        type: [String],
        required: true,
        unique: true,
      },
      leadersId: {
        type: String,
        required: true,
        unique: true,
      }, 
      leadersName: {
        type: String,
        required: true,
        unique: true,
      }, 
      teamStrength: {
        type: Number,
        default: 1,
      },
      // serial: {
      //   type: String,
      //   default: v4,
      // }
    }],
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
