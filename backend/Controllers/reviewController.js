import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) => {
    try{
        const reviews=await Review.find({});
        res
        .status(200).json({success:true, message:"Successful",data:reviews})
    } catch(err){
        res.status(404).json({success:false, message:"Internal Server Error"})
    }
};
// export const createReview = async (req, res) => {
//     if (!req.body.doctor) {
//         req.body.doctor = req.params.doctorId; // match the casing from the router
//     }
//     if(!req.body.user) {
//         req.body.user = req.params.userid;
//     }
//     const newReview=newReview(req.body);
//     try{
//         const savedReview=await newReview.save();
    
//         await Doctor.findByIdAndUpdate(req.body.doctor,{
//             $push:{reviews:savedReview._id} 
//         });

//         res.status(200).json({success:true, message:"Successfully submitted review",data:savedReview})
//     }catch(err){
//         res.status(500).json({success:false, message:err.message})
//     }
// };

export const createReview = async (req, res) => {
    try {
        // Assign doctor and user from params and token
        if (!req.body.doctor) {
            req.body.doctor = req.params.doctorId;
        }

        req.body.user = req.userId; // get user from token (set in authenticate middleware)

        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({
            success: true,
            message: "Successfully submitted review",
            data: savedReview
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
