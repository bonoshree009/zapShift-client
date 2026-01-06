import React from 'react';
import reviewcardimg from '../../../assets/reviewQuote.png'

const ReviewCard = ({reviewcard}) => {
    return (
        
             <div className="bg-primary rounded-2xltransition overflow-hidden p-1 md:p-6 ">
      
    
      <img src={reviewcardimg} alt="card"className=" object-cover"/>
      <div className="p-1 md:p-6">

        <p className="text-[10px] md:text-xl font-bold leading-relaxed mb-5"> {reviewcard.review}</p>

        <div className="flex items-center gap-4">
          <img src={reviewcard.user_photoURL} className="w-4 md:w-14  rounded-full object-cover" />

          <div>
            <h4 className="text-[10px] md:text-base font-semibold text-gray-800"> {reviewcard.userName} </h4>
            <p className="text-[10px] md:text-sm text-gray-500">{reviewcard.user_email} </p>
          </div>
        </div>
      </div>
    </div>
       
    );
};

export default ReviewCard;