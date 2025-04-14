import React, { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { formatDate } from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = ({ initialReviews = [], doctorId }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  const calculateAverageRating = () => {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return reviews.length ? (totalRating / reviews.length).toFixed(1) : 0;
  };

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All Reviews ({reviews.length})
        </h4>

        {/* Display reviews */}
        {reviews.map((review, idx) => (
          <div key={idx} className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
              <figure className='w-10 h-10 rounded-full'>
                <img className="w-full rounded-full" src={avatar} alt="" />
              </figure>
              <div>
                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                  {review.name || "Anonymous"}
                </h5>
                <p className='text-[14px] leading-6 text-textColor'>
                  {formatDate(review.createdAt || new Date())}
                </p>
                <p className='text__para mt-3 font-medium text-[15px]'>
                  {review.text}
                </p>
              </div>
            </div>
            <div className='flex gap-1'>
              {[...Array(review.rating)].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </div>
          </div>
        ))}

        {/* Average rating */}
        {reviews.length > 0 && (
          <div className='mb-6'>
            <h5 className='text-[16px] leading-6 font-semibold'>
              Average Rating: {calculateAverageRating()} / 5
            </h5>
          </div>
        )}
      </div>

      {/* Show feedback form button */}
      {!showFeedbackForm && (
        <div className='text-center'>
          <button className='btn' onClick={() => setShowFeedbackForm(true)}>
            Post a Feedback
          </button>
        </div>
      )}

      {/* Feedback form */}
      {showFeedbackForm && (
        <FeedbackForm onSubmit={handleAddReview} />
      )}
    </div>
  );
};

export default Feedback;
