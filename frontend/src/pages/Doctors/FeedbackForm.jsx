import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Send review to parent
    if (rating && reviewText.trim()) {
      onSubmit({ rating, text: reviewText });
      setRating(0);
      setReviewText('');
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div className="mb-6">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate your overall experience?*
        </h3>
        <div className="flex gap-1">
          {[...Array(5).keys()].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                <AiFillStar
                  size={24}
                  color={starValue <= (hover || rating) ? "#0067FF" : "#E0E0E0"}
                  className="transition-colors"
                />
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or any suggestions*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        ></textarea>
      </div>
      <button type="submit" className="btn">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
