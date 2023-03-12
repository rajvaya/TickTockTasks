import React from 'react';
import './card.css'

const BaseCard = ({ children ,className }: any) => {
  return (
    <div className={`card card-shadow ${className}`}>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default BaseCard;