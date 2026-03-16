import React from 'react';
import '../styles/DownArrow.css';


interface DownArrowProps {
  isOpen: boolean;
  onClick?: () => void;
}

const DownArrow: React.FC<DownArrowProps> = ({ isOpen, onClick }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`down-arrow ${isOpen ? 'down-arrow-open' : 'down-arrow-closed'}`}
    >
      <path
        d="M21 8H3L12 19L21 8Z"
        fill="#f99a26"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default DownArrow;