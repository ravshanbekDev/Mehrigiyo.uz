import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const StarWrapper = styled(motion.div)`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 20px;
  cursor: pointer;
`;

const Star = ({ selected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (onSelect && !clicked) {
      onSelect();
    }
    setClicked(true);
  };

  return (
    <StarWrapper
      animate={{ scale: hovered ? 1.2 : 1, x: clicked ? 1.2 : (selected ? 10 : 0) }}
      whileHover={{ rotate: 90 }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex"
    >
      <FaStar color={(selected || clicked) ? 'gold' : 'gray'} size={30} />
    </StarWrapper>
  );
};

const StarRating = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setRating(result.data.id % 5);
    };
    fetchData();
  }, []);

  const handleStarClick = (index) => {
    if (index === 4) {
      setRating(5);
    } else {
      setRating(index + 1);
    }
  };

  return (
    <div className='flex items-start justify-start gap-1'>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onSelect={() => handleStarClick(index)}
        />
      ))}
      <span>{rating} stars</span>
    </div>
  );
};

export default StarRating;
