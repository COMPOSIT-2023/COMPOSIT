import Event from "../models/Event.js";
// import Event from "../models/Event.js";
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
