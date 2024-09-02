import React from 'react';

const GlowingButton = ({ onClick, color, children, project }) => {
  const buttonStyles = {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: color,
    color: '#fff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '1.0rem',
    letterSpacing: '0.1em',
    fontWeight: '400',
    padding: '10px 30px',
    transition: '0.5s',
    boxShadow: `0 0 35px ${color}`,
    border: 'none', // Ensure it's a button, not a link
    cursor: 'pointer'
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(project);
      }}
      style={buttonStyles}
      className="relative inline-block"
    >
      <span className="relative z-10">{children}</span>
      <i className="absolute inset-0 block">
        <span className="absolute inset-px bg-[#151F28]"></span>
      </i>
      <style>{`
        button::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: #151F28;
        }

        button i::before {
          content: '';
          position: absolute;
          top: 0;
          left: 80%;
          width: 10px;
          height: 4px;
          background: #151F28;
          transform: translateX(-50%) skewX(325deg);
          transition: 0.5s;
        }

        button i::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 20%;
          width: 10px;
          height: 4px;
          background: #151F28;
          transform: translateX(-50%) skewX(325deg);
          transition: 0.5s;
        }

        button:hover {
          background: ${color};
          color: ${color};
          letter-spacing: 0.25em;
        }

        button:hover::before {
          width: 20px;
          left: 20%;
        }

        button:hover i::before {
          width: 20px;
          left: 20%;
        }

        button:hover i::after {
          width: 20px;
          left: 80%;
        }
      `}</style>
    </button>
  );
};

export default GlowingButton;
