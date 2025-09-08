
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, className }) => {
  return (
    <div className={`p-4 rounded shadow-md bg-white ${className}`}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

