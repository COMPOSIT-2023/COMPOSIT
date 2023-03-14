import Event from "../models/Ideathon.js";
import Metaclix from "../models/Metaclix.js";
import Metallomania from "../models/Metallomania.js";
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
  const newRegistration = new Metaclix({ participantId: req.user.id });
  try {
    const savedRegistration = await newRegistration.save();
    res.status(200).json(savedRegistration);
  } catch (err) {
    next(err)
  }
};

export const registerMetallomania = async (req, res, next) => {
  const newRegistration = new Metallomania({ participantId: req.user.id });
  try {
    const savedRegistration = await newRegistration.save();
    res.status(200).json(savedRegistration);
  } catch (err) {
    next(err)
  }
};

export const registerEnigma = async (req, res, next) => {
  const newRegistration = new Enigma({ pid1: req.user.id, pid2: req.body.pid2 });
  try {
    console.log(Object.keys(req.body).length)
    const x = Object.keys(req.body).length
    
    if (x !=0 ) {
      console.log("req")
      const p2 = await Enigma.find({ pid1: req.body.pid2 });
      console.log(p2[0].pid1)
      console.log("Enigma")
      if (p2[0].pid1 == req.body.pid2) {
        console.log("in if")
        res.send("Participant 2 is already registered!!");
        console.log("in if 2")
      }


      else {
        const savedRegistration = await newRegistration.save();
        res.status(200).json(savedRegistration);
      }
    }
    else {
      // const savedRegistration = await newRegistration.save();
      console.log("else")
      res.status(200).json("Error");
    }

    // const p1 = await Enigma.find({pid2: req.body.pid2});
    // console.log(p2[0].pid1)
    // console.log("Enigma")
    // if(p2[0].pid1 == req.body.pid2){
    //   console.log("in if")
    //   res.send("Participant 2 is already registered!!");
    //   console.log("in if 2")
    // }


    // else{
    //   const savedRegistration = await newRegistration.save();
    //   res.status(200).json(savedRegistration);
    // }
  } catch (err) {
    console.log(err)
    next(err)
    // res.status(500).send("Error in registering");
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
