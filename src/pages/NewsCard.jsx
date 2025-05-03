import React from 'react';
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    rating,
    total_view,
    author,
    thumbnail_url,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Header */}
      <div className='flex bg-base-200 justify-between items-center p-4'>
      <div className="flex items-center gap-4 p-4">
        <img src={author.img} alt={author.name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>
      <button className='text-gray-500 hover:text-primary flex gap-2'>
        <FaRegBookmark></FaRegBookmark>
        <FaShareAlt></FaShareAlt>
      </button>
      </div>

      {/* Title */}
      <h2 className="px-4 font-bold text-lg">{title}</h2>

      {/* Image */}
      <figure>
        <img src={thumbnail_url} alt="News" className="w-full max-h-60 object-cover" />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700">
        {details.length > 200 ? details.slice(0, 200) + '...' : details}
        <span className="text-blue-600 ml-2 cursor-pointer">Read More</span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 pt-2">
        <div className="flex items-center gap-2 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
