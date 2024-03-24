import React from 'react';
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';

const Rating = ({ rating }) => {
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img className='rating' key={index} src={ratingValue <= rating ? redStar : greyStar} alt="étoiles" />
                );
            })}
        </div>
    );
};

export default Rating;
