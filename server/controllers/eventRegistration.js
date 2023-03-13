import Event from "../models/Event.js";
import Metaclix from "../models/Metaclix.js";
import Enigma from "../models/Enigma.js";
import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
    const newRegistration = new Event(req.body);

    try {
        const savedRegistration = await newRegistration.save();
        res.status(200).json(savedRegistration);
    } catch (err) {
        next(err);
    }
};

export const deregisterUser = async (req, res, next) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      res.status(200).json("You have been deregistered for this event.");
    } catch (err) {
      next(err);
    }
  };

  export const registerMetaclix = async (req, res, next) => {
    const newRegistration = new Metaclix({ participantId : req.user.id });
    try {
        const savedRegistration = await newRegistration.save();
        res.status(200).json(savedRegistration);
    } catch (err) {
      res.status(500).send("Error in registering");
    }
  };

  export const registerEnigma = async (req, res, next) => {
    console.log(req.body)
    // const newRegistration = new Enigma(req.body);
    const newRegistration = new Enigma({ pid1 : req.body.pid1 });
    console.log("e0")
    try {
      console.log("e1")
        const savedRegistration = await newRegistration.save();
        console.log("e2")
        res.status(200).json(savedRegistration);
    } catch (err) {
      console.log("e3")
      res.status(500).send("Error in registering");
    }
  };

//   export const getHotel = async (req, res, next) => {
//     try {
//       const hotel = await Hotel.findById(req.params.id);
//       res.status(200).json(hotel);
//     } catch (err) {
//       next(err);
//     }
//   };
//   export const getHotels = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     try {
//       const hotels = await Hotel.find({
//         ...others,
//         cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//       }).limit(req.query.limit);
//       res.status(200).json(hotels);
//     } catch (err) {
//       next(err);
//     }
//   };
