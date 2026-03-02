import React from 'react';

// We define an "interface" to tell TypeScript what props this component needs
interface DownArrowProps {
  isOpen: boolean;
  onClick?: () => void; // Optional: in case you want to click the icon itself
}

const DownArrow: React.FC<DownArrowProps> = ({ isOpen, onClick }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      onClick={onClick}
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        cursor: 'pointer',
        filter: 'drop-shadow(0px 4px 0px #c77b1e)',
        display: 'block',
        marginTop: '3.5'
      }}
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