
import React from 'react';

interface WaterDropIconProps {
  size?: number;
  className?: string;
}

export const WaterDropIcon: React.FC<WaterDropIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main droplet shape with gradient */}
      <path 
        d="M12 2.5C12 2.5 5.5 9.5 5.5 14.5C5.5 18.6421 8.35786 22 12 22C15.6421 22 18.5 18.6421 18.5 14.5C18.5 9.5 12 2.5 12 2.5Z" 
        fill="url(#paint0_linear)" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Decorative paisley pattern inside */}
      <path
        d="M12 7C12 7 10 10 10 12.5C10 14.5 11 15.5 12 15.5C13 15.5 14 14.5 14 12.5C14 10 12 7 12 7Z"
        fill="url(#paint1_linear)"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.6"
      />
      
      {/* Small decorative dot */}
      <circle 
        cx="10" 
        cy="12" 
        r="1" 
        fill="white" 
        fillOpacity="0.8"
      />
      
      {/* Small decorative dot */}
      <circle 
        cx="14" 
        cy="12" 
        r="0.8" 
        fill="white" 
        fillOpacity="0.6"
      />
      
      {/* Decorative lotus-inspired design */}
      <path
        d="M12 19C13.6569 19 15 17.6569 15 16C15 17.6569 16.3431 19 18 19C16.3431 19 15 20.3431 15 22C15 20.3431 13.6569 19 12 19Z"
        fill="url(#paint2_linear)"
        fillOpacity="0.7"
      />
      
      <defs>
        <linearGradient 
          id="paint0_linear" 
          x1="12" 
          y1="2.5" 
          x2="12" 
          y2="22" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#91EAE4" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        
        <linearGradient 
          id="paint1_linear" 
          x1="12" 
          y1="7" 
          x2="12" 
          y2="15.5" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
        
        <linearGradient 
          id="paint2_linear" 
          x1="15" 
          y1="19" 
          x2="15" 
          y2="22" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0EA5E9" />
          <stop offset="1" stopColor="#0369A1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
