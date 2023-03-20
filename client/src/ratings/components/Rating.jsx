import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Rating = ({ rating }) => {
  const MAX_RATING = 5;
  const fullStars = Math.floor(rating);
  const lastStar = rating % 1;
  const stars = [];

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
    );
  }

  // Render last star (half star or empty star)
  if (lastStar !== 0) {
    stars.push(
      <StarIcon key={fullStars} className={`w-5 h-5 text-yellow-500 ${lastStar >= 0.5 ? 'opacity-100' : 'opacity-50'}`} />
    );
  }

  // Render empty stars
  for (let i = stars.length; i < MAX_RATING; i++) {
    stars.push(
      <StarIcon key={i} className="w-5 h-5 text-gray-300" />
    );
  }

  return (
    <div className="flex items-center space-x-1">
      {stars}
      <span className="text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

export default Rating;
